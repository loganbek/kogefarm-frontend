const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const InterpolateHtmlPlugin = require("interpolate-html-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
    filename: 'index.html',
    inject: 'body'
})

module.exports = (env, options) => {
    const isProd = options.mode === "production"
    require('dotenv').config({ path: isProd ? './.env.production' : './.env.development' });

    return {
        entry: "./src/index.tsx",
        output: {
            publicPath: '/',
            path: path.join(__dirname, "build"),
            filename: isProd ? "[name].[contenthash].js" : "index.bundle.js",
            chunkFilename: isProd ? '[id].[contenthash].js' : "[id].chunk.js"
        },
        mode: isProd ? "production" : "development",
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                components: path.resolve(__dirname, 'src/components/'),
                hooks: path.resolve(__dirname, 'src/hooks/'),
                config: path.resolve(__dirname, 'src/config/'),
                utils: path.resolve(__dirname, 'src/utils/'),
                contexts: path.resolve(__dirname, 'src/contexts/'),
                state: path.resolve(__dirname, 'src/state/'),
                views: path.resolve(__dirname, 'src/views/'),
            }
        },
        devServer: {
            hot: true,
            liveReload: false,
            static: path.join(__dirname, "src"),
            port: 3000,
            historyApiFallback: true,
        },
        ...isProd ? {} : { devtool: "eval-cheap-module-source-map" },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        !isProd && {
                            loader: "babel-loader",
                            options: {
                                cacheDirectory: true,
                                plugins: ["react-refresh/babel"]
                            },
                        },
                        {
                            loader: "ts-loader",
                            options: {
                                getCustomTransformers: () => ({
                                    before: [!isProd && ReactRefreshTypeScript()].filter(Boolean),
                                }),
                                transpileOnly: !isProd
                            }
                        }
                    ].filter(Boolean),
                },
                {
                    test: /\.(css|scss)$/,
                    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
                },
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            isProd && new CleanWebpackPlugin(),
            isProd && new CssMinimizerPlugin(),
            !isProd && new ReactRefreshWebpackPlugin(),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env)
            }),
            HTMLWebpackPluginConfig,
            new InterpolateHtmlPlugin(Object.assign(
                {},
                { PUBLIC_URL: ".", },
                process.env
            )),
            new CopyPlugin({
                patterns: [
                    {
                        from: "public",
                        globOptions: {
                            ignore: [
                                "**/index.html"
                            ]
                        }
                    },
                ],
            }),
            new NodePolyfillPlugin(),
        ].filter(Boolean),
        optimization: {
            ...isProd && {
                minimize: true
            }
        }
    }
}