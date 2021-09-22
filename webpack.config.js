const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const InterpolateHtmlPlugin = require("interpolate-html-plugin")



module.exports = {
    entry: "./src/index.tsx",
    output: { publicPath: '/', path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
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
            images: path.resolve(__dirname, 'src/images/'),
        }
    },
    devServer: { static: path.join(__dirname, "src") },
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
                use: ["babel-loader", 'ts-loader'],
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
        new TsconfigPathsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: "public"
        }),
        new NodePolyfillPlugin()
    ],
};