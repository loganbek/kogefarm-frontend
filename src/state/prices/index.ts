/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PriceApiResponse, PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import { PriceApiThunk, PriceState, GeicoApiList } from 'state/types'

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
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd-coin%2Cmatic-network&vs_currencies=usd')
  const data = (await response.json()) as GeicoApiList

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
