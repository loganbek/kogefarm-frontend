/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import farmsConfig from 'config/constants/farms'
import isArchivedPid from 'utils/farmHelpers'
import fetchFarms from './fetchFarms'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
} from './fetchFarmUser'
import { FarmsState, Farm } from '../types'

import {
  fetchFarmsTokenBalanceLP,
  fetchFarmsQuoteTokenBalanceLP,
  fetchFarmsLpTokenBalanceMC,
  fetchFarmsLpTotalSupply,
  fetchFarmsTokenDecimals,
  fetchFarmsQuoteTokenDecimals,
  fetchFarmsTotalDepositsVal,
  fetchFarmsJarRatioBal,
  fetchFarmsTradingFeeRate,
} from './fetchFarmsNew'

const nonArchivedFarms = farmsConfig.filter(({ pid }) => !isArchivedPid(pid))

const noAccountFarmConfig = farmsConfig.map((farm) => ({
  ...farm,
  userData: {
    allowance: '0',
    tokenBalance: '0',
    stakedBalance: '0',
    earnings: '0',
  },
}))

const initialState: FarmsState = { data: noAccountFarmConfig, loadArchivedFarmsData: false, userDataLoaded: false }

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarmsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
      /*
      const { arrayOfFarmDataObjects } = action.payload
      arrayOfFarmDataObjects.forEach((farmDataEl) => {
        const { pid } = farmDataEl
        const index = state.data.findIndex((farm) => farm.pid === pid)
        state.data[index] = { ...farmDataEl, ...state.data[index] }
      }) */
    },
    setFarmUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { pid } = userDataEl
        const index = state.data.findIndex((farm) => farm.pid === pid)
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
      state.userDataLoaded = true
    },
    setLoadArchivedFarmsData: (state, action) => {
      const loadArchivedFarmsData = action.payload
      state.loadArchivedFarmsData = loadArchivedFarmsData
    },
  },
})

// Actions
export const { setFarmsPublicData, setFarmUserData, setLoadArchivedFarmsData } = farmsSlice.actions

/*
// Thunks
export const fetchFarmsPublicDataAsync = () => async (dispatch, getState) => {
  const fetchArchived = getState().farms.loadArchivedFarmsData
  const farmsToFetch = fetchArchived ? farmsConfig : nonArchivedFarms
  const farms = await fetchFarms(farmsToFetch)
  const farmTokenBalanceLP = await fetchFarmsTokenBalanceLP(farmsToFetch)
  const farmQuoteTokenBalanceLP = await fetchFarmsQuoteTokenBalanceLP(farmsToFetch)
  const farmLPTokenBalanceMC = await fetchFarmsLpTokenBalanceMC(farmsToFetch)
  const farmLPTotalSupply = await fetchFarmsLpTotalSupply(farmsToFetch)
  const farmTokenDecimal = await fetchFarmsTokenDecimals(farmsToFetch)
  const farmQuoteTokenDecimal = await fetchFarmsQuoteTokenDecimals(farmsToFetch)
  const farmTotalDepositsVal = await fetchFarmsTotalDepositsVal(farmsToFetch)
  const farmJarRatioBal = await fetchFarmsJarRatioBal(farmsToFetch)
  const farmTradingFeeRate = await fetchFarmsTradingFeeRate(farmsToFetch)

  // Ratio in % a LP tokens that are in staking, vs the total number in circulation
  const lpTotalSupplyNum = new BigNumber(farmLPTotalSupply)
  const lpQuoteTokenNum = new BigNumber(farmQuoteTokenBalanceLP)
  const lpTokenRatio = new BigNumber(farmLPTokenBalanceMC).div(lpTotalSupplyNum)

  // Total value in staking in quote token value
  const lpTotalInQuoteToken = lpQuoteTokenNum.div(DEFAULT_TOKEN_DECIMAL).times(new BigNumber(2)).times(lpTokenRatio)

  // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
  const tokenAmount = new BigNumber(farmTokenBalanceLP).div(BIG_TEN.pow(farmTokenDecimal)).times(lpTokenRatio)
  const quoteTokenAmount = lpQuoteTokenNum.div(BIG_TEN.pow(farmQuoteTokenDecimal)).times(lpTokenRatio)

  const jarDeposits = new BigNumber(farmTotalDepositsVal)
  const jarRatioNum = new BigNumber(farmJarRatioBal)
  const totalDeposits = jarDeposits
    .times(2)
    .div(lpTotalSupplyNum)
    .times(lpQuoteTokenNum)
    .div(BIG_TEN.pow(farmQuoteTokenDecimal))

  const arrayOfFarmDataObjects = farmLPTotalSupply.map((token, index) => {
    return {
      ...token,
      pid: farmsToFetch[index].pid,
      tokenAmount: tokenAmount[index]?.toJSON(),
      quoteTokenAmount: quoteTokenAmount[index]?.toJSON(),
      lpTotalSupply: new BigNumber(farmLPTotalSupply[index])?.toJSON(),
      lpTokenBalanceMC: new BigNumber(farmLPTokenBalanceMC[index])?.div(DEFAULT_TOKEN_DECIMAL)?.toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken[index]?.toJSON(),
      tokenPriceVsQuote: quoteTokenAmount[index]?.div(tokenAmount[index])?.toJSON(),
      jarLPDeposits: jarDeposits[index]?.toJSON(),
      jarRatio: jarRatioNum[index]?.toJSON(),
      totalDeposits: totalDeposits[index]?.toJSON(),
      tradingFeeRate: JSON.stringify(farmTradingFeeRate[index]),
    }
  })

  ///
  // dispatch(setFarmsPublicData({farms}))
  dispatch(setFarmsPublicData({ arrayOfFarmDataObjects }))
} */

export const fetchFarmsPublicDataAsync = () => async (dispatch, getState) => {
  const fetchArchived = getState().farms.loadArchivedFarmsData
  const farmsToFetch = fetchArchived ? farmsConfig : nonArchivedFarms
  const farms = await fetchFarms(farmsToFetch)
  const farmTokenBalanceLP = await fetchFarmsTokenBalanceLP(farmsToFetch)
  const farmQuoteTokenBalanceLP = await fetchFarmsQuoteTokenBalanceLP(farmsToFetch)
  const farmLPTokenBalanceMC = await fetchFarmsLpTokenBalanceMC(farmsToFetch)
  const farmLPTotalSupply = await fetchFarmsLpTotalSupply(farmsToFetch)
  const farmTokenDecimal = await fetchFarmsTokenDecimals(farmsToFetch)
  const farmQuoteTokenDecimal = await fetchFarmsQuoteTokenDecimals(farmsToFetch)
  const farmTotalDepositsVal = await fetchFarmsTotalDepositsVal(farmsToFetch)
  const farmJarRatioBal = await fetchFarmsJarRatioBal(farmsToFetch)
  // const farmTradingFeeRate = await fetchFarmsTradingFeeRate(farmsToFetch)

  const arrayOfFarmDataObjects = farms.map((token, index) => {
    // Ratio in % a LP tokens that are in staking, vs the total number in circulation
    const lpTokenBalanceMC = new BigNumber(farmLPTokenBalanceMC[index])
    const lpTotalSupplyNum = new BigNumber(farmLPTotalSupply[index])
    const lpQuoteTokenNum = new BigNumber(farmQuoteTokenBalanceLP[index])
    const lpTokenRatio = lpTokenBalanceMC.div(lpTotalSupplyNum)
    const quoteTokenDecimal = new BigNumber(farmQuoteTokenDecimal[index])
    const tokenDecimal = new BigNumber(farmTokenDecimal[index])
    console.log(lpTotalSupplyNum.toNumber())
    console.log(lpQuoteTokenNum.toNumber())
    console.log(lpTokenRatio.toNumber())
    console.log(quoteTokenDecimal.toNumber())

    // Total value in staking in quote token value
    const lpTotalInQuoteToken = lpQuoteTokenNum.div(DEFAULT_TOKEN_DECIMAL).times(new BigNumber(2)).times(lpTokenRatio)

    console.log(lpTotalInQuoteToken.toNumber())

    // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
    const tokenAmount = new BigNumber(farmTokenBalanceLP[index]).div(BIG_TEN.pow(tokenDecimal)).times(lpTokenRatio)
    const quoteTokenAmount = lpQuoteTokenNum.div(BIG_TEN.pow(quoteTokenDecimal)).times(lpTokenRatio)

    const jarDeposits = new BigNumber(farmTotalDepositsVal[index])
    const jarRatioNum = new BigNumber(farmJarRatioBal[index])
    const totalDeposits = jarDeposits
      .times(2)
      .div(lpTotalSupplyNum)
      .times(lpQuoteTokenNum)
      .div(BIG_TEN.pow(quoteTokenDecimal))

    const lpTotalSupply = new BigNumber(farmLPTotalSupply[index])
    console.log(index)
    console.log(token.lpAddresses)

    return {
      ...token,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount.toJSON(),
      lpTotalSupply: lpTotalSupply.toJSON(),
      lpTokenBalanceMC: lpTokenBalanceMC.div(DEFAULT_TOKEN_DECIMAL).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
      jarLPDeposits: jarDeposits.toJSON(),
      jarRatio: jarRatioNum.toJSON(),
      totalDeposits: totalDeposits.toJSON(),
    }
  })

  dispatch(setFarmsPublicData(arrayOfFarmDataObjects))
}


export const fetchFarmUserDataAsync = (account: string) => async (dispatch, getState) => {
  const fetchArchived = getState().farms.loadArchivedFarmsData
  const farmsToFetch = fetchArchived ? farmsConfig : nonArchivedFarms
  const userFarmAllowances = await fetchFarmUserAllowances(account, farmsToFetch)
  const userFarmTokenBalances = await fetchFarmUserTokenBalances(account, farmsToFetch)
  const userStakedBalances = await fetchFarmUserStakedBalances(account, farmsToFetch)
  const userFarmEarnings = await fetchFarmUserEarnings(account, farmsToFetch)

  const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
    return {
      pid: farmsToFetch[index].pid,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userFarmEarnings[index],
    }
  })

  dispatch(setFarmUserData({ arrayOfUserDataObjects }))
}

export default farmsSlice.reducer
