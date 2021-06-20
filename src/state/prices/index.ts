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
//  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
  const data ={"usdc":{"usd":"1.0"}} as GeicoApiList

  // Fetch KogeCoin price from LP pool
  const kogecoinAddr = '0x13748d548D95D78a3c83fe3F32604B4796CFfa23'
  const maticAddr ='0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  const usdcAddr = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
  const maticUSDCLP = '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
  const kogeMaticLP = '0x3885503aEF5E929fCB7035FBDcA87239651C8154'
  const titanAddr = '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'
  const titanMaticLP = '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a'
  const bootyAddr = '0xd12dc5319808bb31ba95ae5764def2627d5966ce'
  const bootyMaticLP = '0x57B6A39c06DfF5678266e36dca2Cfa86da675894'
  const ironAddr = '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'
  const ironUSDCLP = '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc'
  const fishAddr = '0x3a3df212b7aa91aa0402b9035b098891d276572b'
  const fishMaticLP = '0x289cf2B63c5Edeeeab89663639674d9233E8668E'
  const wexAddr = '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB'
  const wexUSDCLP = '0x5DE6a3CcA10d3F788EEdbD4923e31D4658bf6f9a'
  const miMaticAddr = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
  const qidaoAddr = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
  const miMaticQidaoLP = '0xaE48aCc701151061A5bfff8e4c3f0DCfe4A957E9'
  const miMaticUSDCLP = '0x160532D2536175d65C03B97b0630A9802c274daD'
  const omenAddr = '0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E'
  const omenUSDCLP = '0x50409De292f5F821888702e9538Bf15Fa273dFE6'
  const yeldAddr = '0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891'
  const yeldUSDCLP = '0xAD8f4c66b28756458Fc419AA67aD2207A21A6997'

  const calls = [
    // Matic Price
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [maticUSDCLP],
    },
    // Balance of quote token on LP contract
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [maticUSDCLP],
    },

    // KogeCoin Price
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
    // Fish
    {
      address: fishAddr,
      name: 'balanceOf',
      params: [fishMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [fishMaticLP],
    },
    // WexPoly
    {
      address: wexAddr,
      name: 'balanceOf',
      params: [wexUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [wexUSDCLP],
    },
    // Qidao
    {
      address: miMaticAddr,
      name: 'balanceOf',
      params: [miMaticUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [miMaticUSDCLP],
    },
    // Omen
    {
      address: omenAddr,
      name: 'balanceOf',
      params: [omenUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [omenUSDCLP],
    },
    // Yeld
    {
      address: yeldAddr,
      name: 'balanceOf',
      params: [yeldUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [yeldUSDCLP],
    },
  ]
  const [maticBalanceUM, usdcBalanceUM, kogeBalanceLP, maticTokenBalanceLP, totalLPSupply, titanBalanceLP, maticBalanceLP, ironBalanceLP, usdcBalanceIron, bootyBalanceLP, maticBalanceBooty, fishBalance,maticFish, wexBalanceLP,usdcWex,miMaticQidaoUSDC,usdcmiMaticQidao, omenBalance, omenUSDCBalance, yeldBalance, yeldUSDCBalance] = await multicall(erc20, calls)
  // Get prices in matic/USDC
  const kogeMatic = kogeBalanceLP/maticTokenBalanceLP*10**9
  const titanMatic = titanBalanceLP/maticBalanceLP
  const bootyMatic = bootyBalanceLP/maticBalanceBooty
  const fishMatic = fishBalance/maticFish
  const ironUSDC = ironBalanceLP/(usdcBalanceIron*10**12)
  const wexUSDC = wexBalanceLP/(usdcWex*10**12)
  const miMaticUSDC = miMaticQidaoUSDC/(usdcmiMaticQidao*10**12)
  const omenUSDC = omenBalance/(omenUSDCBalance*10**12)
  const yeldUSDC = yeldBalance/(yeldUSDCBalance*10**12)
  // Get Matic price
  const maticUSD = (usdcBalanceUM*10**12)/maticBalanceUM
  const usdcUSD = parseFloat(data.usdc.usd)
  // Get Koge price in USD
  const kogeUSD = maticUSD/kogeMatic
  const titanUSD = maticUSD/titanMatic
  const bootyUSD = maticUSD/bootyMatic
  const fishUSD = maticUSD/fishMatic
  const ironUSD = usdcUSD/ironUSDC
  const wexUSD = usdcUSD/wexUSDC
  const miMaticUSD = usdcUSD/miMaticUSDC
  const omenUSD = usdcUSD/omenUSDC
  const yeldUSD = usdcUSD/yeldUSDC
  // Get Koge LP price
  const kogeMaticLPUSD = maticTokenBalanceLP*2*maticUSD/totalLPSupply
  // Get Koge price and Koge LP price
  data['matic-network'] = {"usd":maticUSD.toString()}
  data.kogecoin = {"usd":kogeUSD.toString()}
  data.kogematiclp = {"usd":kogeMaticLPUSD.toString()}
  data.titan = {"usd":titanUSD.toString()}
  data.booty = {"usd":bootyUSD.toString()}
  data.iron = {"usd":ironUSD.toString()}
  data.fish = {"usd":fishUSD.toString()}
  data.wexpoly = {"usd":wexUSD.toString()}
  data.mimatic = {"usd":miMaticUSD.toString()}
  data.omen = {"usd":omenUSD.toString()}
  data.yeld = {"usd":yeldUSD.toString()}

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
