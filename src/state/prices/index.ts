/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PriceApiResponse, PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import { PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import multicall from 'utils/multicall'
import erc20 from 'config/abi/erc20.json'

const initialState: PriceState = {
  isLoading: false,
  lastUpdated: null,
  data: null,
}
// https://api.coingecko.com/api/v3/simple/price?ids=usd-coin%2Cmatic-network&vs_currencies=usd


// Thunks
export const fetchPrices = createAsyncThunk<PriceApiThunk>('prices/fetch', async () => {
//  const response = await fetch('https://api.pancakeswap.info/api/v2/tokens')
//  const data = (await response.json()) as PriceApiResponse
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd-coin%2Cmatic-network%2Cpolycat-finance&vs_currencies=usd')
  const data = (await response.json()) as GeicoApiList

  // Fetch KogeCoin price from LP pool
  const kogecoinAddr = '0x13748d548D95D78a3c83fe3F32604B4796CFfa23'
  const maticAddr ='0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  const usdcAddr = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
  const kogeMaticLP = '0x3885503aEF5E929fCB7035FBDcA87239651C8154'
  const titanAddr = '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'
  const titanMaticLP = '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a'
  const bootyAddr = '0xd12dc5319808bb31ba95ae5764def2627d5966ce'
  const bootyMaticLP = '0x57B6A39c06DfF5678266e36dca2Cfa86da675894'
  const ironAddr = '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'
  const ironUSDCLP = '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc'
  const calls = [
    // Balance of token in the LP contract
    {
      address: kogecoinAddr,
      name: 'balanceOf',
      params: [kogeMaticLP],
    },
    // Balance of quote token on LP contract
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [kogeMaticLP],
    },
    // Total LP tokens minted
    {
      address: kogeMaticLP,
      name: 'totalSupply',
    },
    // Titan
    {
      address: titanAddr,
      name: 'balanceOf',
      params: [titanMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [titanMaticLP],
    },
    // Iron
    {
      address: ironAddr,
      name: 'balanceOf',
      params: [ironUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [ironUSDCLP],
    },
    // Booty
    {
      address: bootyAddr,
      name: 'balanceOf',
      params: [bootyMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [bootyMaticLP],
    },
  ]
  const [kogeBalanceLP, maticTokenBalanceLP, totalLPSupply, titanBalanceLP, maticBalanceLP, ironBalanceLP, usdcBalanceIron, bootyBalanceLP, maticBalanceBooty] = await multicall(erc20, calls)
  // Get prices in matic/USDC
  const kogeMatic = kogeBalanceLP/maticTokenBalanceLP*10**9
  const titanMatic = titanBalanceLP/maticBalanceLP
  const bootyMatic = bootyBalanceLP/maticBalanceBooty
  const ironUSDC = usdcBalanceIron/ironBalanceLP*10**12
  // Get Matic price
  const maticUSD = parseFloat(data['matic-network'].usd)
  // Get Koge price in USD
  const kogeUSD = maticUSD/kogeMatic
  const titanUSD = maticUSD/titanMatic
  const bootyUSD = maticUSD/bootyMatic
  // Get Koge LP price
  const kogeMaticLPUSD = maticTokenBalanceLP*2*maticUSD/totalLPSupply
  // Get Koge price and Koge LP price
  data.kogecoin = {"usd":kogeUSD.toString()}
  data.kogematiclp = {"usd":kogeMaticLPUSD.toString()}
  data.titan = {"usd":titanUSD.toString()}
  data.booty = {"usd":bootyUSD.toString()}
  data.iron = {"usd":ironUSDC.toString()}

  // Return normalized token names
  return {
//    updated_at: data.updated_at,
    data: Object.keys(data).reduce((accum, token) => {
      return {
        ...accum,
        [token.toLowerCase()]: parseFloat(data[token].usd),
      }
    }, {}),
  }
})

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPrices.fulfilled, (state, action: PayloadAction<PriceApiThunk>) => {
      state.isLoading = false
//      state.lastUpdated = action.payload.updated_at
      state.data = action.payload.data
    })
  },
})

export default pricesSlice.reducer
