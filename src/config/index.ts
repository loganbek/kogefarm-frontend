import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

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
