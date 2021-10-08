import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'
import { FANTOM_FARMS, MOONRIVER_FARMS, POLYGON_FARMS } from './constants/farms'
import { FarmConfig } from './constants/types'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 2

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 10 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeStats.tsx = 20 (40 - Amount sent to burn pool)

export const CAKE_PER_BLOCK = new BigNumber(40)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://kogefarm.io'
export const BASE_EXCHANGE_URL = 'https://quickswap.exchange'
export const SUSHI_EXCHANGE_URL = 'https://app.sushi.com'
export const WAULT_EXCHANGE_URL = 'https://swap.wault.finance/polygon'
export const DFYN_EXCHANGE_URL = 'https://exchange.dfyn.network'
export const APE_EXCHANGE_URL = 'https://app.apeswap.finance'
export const JET_EXCHANGE_URL = 'https://polygon-exchange.jetswap.finance'
export const FIREBIRD_EXCHANGE_URL = 'https://app.firebird.finance'
export const GRAVITY_EXCHANGE_URL = 'https://gravityfinance.io'
export const ELK_EXCHANGE_URL = 'https://app.elk.finance'
export const CAFE_EXCHANGE_URL = 'https://polygondex.cafeswap.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const SUSHI_ADD_LIQUIDITY_URL = `${SUSHI_EXCHANGE_URL}/add`
export const DFYN_ADD_LIQUIDITY_URL = `${DFYN_EXCHANGE_URL}/#/add`
export const WAULT_ADD_LIQUIDITY_URL = `${WAULT_EXCHANGE_URL}/#/add`
export const APE_ADD_LIQUIDITY_URL = `${APE_EXCHANGE_URL}/add`
export const JET_ADD_LIQUIDITY_URL = `${JET_EXCHANGE_URL}/#/add`
export const ELK_ADD_LIQUIDITY_URL = `${ELK_EXCHANGE_URL}/#/add`
export const GRAVITY_ADD_LIQUIDITY_URL = `${GRAVITY_EXCHANGE_URL}/add`
export const FIREBIRD_ADD_LIQUIDITY_URL = `${FIREBIRD_EXCHANGE_URL}/add`
export const CAFE_ADD_LIQUIDITY_URL = `${CAFE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const SUSHI_LIQUIDITY_POOL_URL = `${SUSHI_EXCHANGE_URL}/pool`
export const WAULT_LIQUIDITY_POOL_URL = `${WAULT_EXCHANGE_URL}/#/pool`
export const DFYN_LIQUIDITY_POOL_URL = `${DFYN_EXCHANGE_URL}/#/pool`
export const APE_LIQUIDITY_POOL_URL = `${APE_EXCHANGE_URL}/#/pool`
export const ELK_LIQUIDITY_POOL_URL = `${ELK_EXCHANGE_URL}/#/pool`
export const GRAVITY_LIQUIDITY_POOL_URL = `${GRAVITY_EXCHANGE_URL}/pool`
export const CAFE_LIQUIDITY_POOL_URL = `${CAFE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://polygonscan.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const KOGE_TOKEN_DECIMAL = BIG_TEN.pow(9)


/**
 * Network configs
 */
export interface ChainInterface {
  chainId: string;
  chainName: string
  nativeCurrency: {
    name: string,
    symbol: string,
    decimals: number,
  },
  rpcUrls: string[],
  blockExplorerUrls: string[],
}
const POLYGON_CHAIN_ID = 137
export const POLYGON_CHAIN: ChainInterface = {
  chainId: `0x${Number(POLYGON_CHAIN_ID).toString(16)}`,
  chainName: 'Matic Network Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: [
    process.env.REACT_APP_NODE_1,
    process.env.REACT_APP_NODE_2,
    process.env.REACT_APP_NODE_3,
    process.env.REACT_APP_NODE_4,
    process.env.REACT_APP_NODE_5
  ],
  blockExplorerUrls: ['https://polygonscan.com/'],
}

// Moonriver
const MOONRIVER_CHAIN_ID = 1285
export const MOONRIVER_CHAIN: ChainInterface = {
  chainId: `0x${Number(MOONRIVER_CHAIN_ID).toString(16)}`,
  chainName: 'Moonriver',
  nativeCurrency: {
    name: 'MOVR',
    symbol: 'MOVR',
    decimals: 18,
  },
  rpcUrls: [
    "https://rpc.moonriver.moonbeam.network",
    "https://moonriver.api.onfinality.io/public",
  ],
  blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network/'],
}

// Fantom
const FANTOM_CHAIN_ID = 250
export const FANTOM_CHAIN: ChainInterface = {
  chainId: `0x${Number(FANTOM_CHAIN_ID).toString(16)}`,
  chainName: 'Fantom Opera',
  nativeCurrency: {
    name: 'FTM',
    symbol: 'FTM',
    decimals: 18,
  },
  rpcUrls: [
    "https://rpc.ftm.tools/",
  ],
  blockExplorerUrls: ["https://ftmscan.com/"],
}

export enum SUPPORTED_CHAINS {
  MATIC = "MATIC",
  MOONRIVER = "MOONRIVER",
  FANTOM = "FANTOM"
}
export type CHAINSInterface = {
  [x in SUPPORTED_CHAINS]: ChainInterface & { numberChainId: number; chainNameAbbr: string; logoUrl: string; farms: FarmConfig[] }
}

export const CHAINS: CHAINSInterface = {
  [SUPPORTED_CHAINS.MATIC]: {
    ...POLYGON_CHAIN,
    numberChainId: POLYGON_CHAIN_ID,
    chainNameAbbr: "Polygon",
    logoUrl: "/images/polygon.svg",
    farms: POLYGON_FARMS
  },
  [SUPPORTED_CHAINS.MOONRIVER]: {
    ...MOONRIVER_CHAIN,
    numberChainId: MOONRIVER_CHAIN_ID,
    chainNameAbbr: "Moonriver",
    logoUrl: "/images/moonriver.svg",
    farms: MOONRIVER_FARMS
  },
  [SUPPORTED_CHAINS.FANTOM]: {
    ...FANTOM_CHAIN,
    numberChainId: FANTOM_CHAIN_ID,
    chainNameAbbr: "Fantom",
    logoUrl: "/images/fantom.svg",
    farms: FANTOM_FARMS
  }
}