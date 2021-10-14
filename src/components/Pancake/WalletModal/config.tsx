import Metamask from "../Svg/Icons/Metamask";
import WalletConnect from "../Svg/Icons/WalletConnect";
import TrustWallet from "../Svg/Icons/TrustWallet";
import MathWallet from "../Svg/Icons/MathWallet";
import TokenPocket from "../Svg/Icons/TokenPocket";
import BinanceChain from "../Svg/Icons/BinanceChain";
import SafePal from "../Svg/Icons/SafePal";
import Coin98 from "../Svg/Icons/Coin98";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
    bg: 'rgba(245, 132, 31, 0.2)'

  },
  // {
  //   title: "WalletConnect",
  //   icon: WalletConnect,
  //   connectorId: ConnectorNames.WalletConnect,
  //   priority: 2,
  //   bg: 'rgba(59, 153, 252, 0.2)'
  // },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
    bg: 'rgba(51, 117, 187, 0.2)'

  },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  //   bg: 'rgba(0, 0, 0, 0.2)'
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  //   bg: 'rgba(0, 166, 242, 0.2)'
  // },

  // {
  //   title: "Binance Chain",
  //   icon: BinanceChain,
  //   connectorId: ConnectorNames.BSC,
  //   priority: 999,
  //   bg: 'rgba(240, 185, 11, 0.2)'
  // },
  // {
  //   title: "SafePal",
  //   icon: SafePal,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  //   bg: 'rgba(0, 0, 0, 0.2)'
  // },
  // {
  //   title: "Coin98",
  //   icon: Coin98,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  //   bg: 'rgba(223, 190, 70, 0.2)'
  // },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
