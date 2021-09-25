import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import jarAbi from 'config/abi/GenericJar.json'
import erc20Jar from 'config/abi/erc20Jar.json'
// import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { BIG_TEN } from 'utils/bigNumber'
// import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { getAddress } from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { createClient } from 'urql'

const quickGraphURL = 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap03'
const sushiGraphURL = 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange'
const dfynGraphURL = 'https://api.thegraph.com/subgraphs/name/ss-sonic/dfyn-v5'
const apeswapGraphURL = 'https://api.thegraph.com/subgraphs/name/apeswapfinance/dex-polygon'
const waultGraphURL = 'https://api.thegraph.com/subgraphs/name/waultfinance/waultswap-polygon'

const fetchFarms = async (farmsToFetch: FarmConfig[]) => {
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      const masterChefAddress = getAddress(farmConfig.masterChefAddresses)
      const jarAddress = getAddress(farmConfig.jarAddresses)

      /*
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAddress,
          name: 'balanceOf',
          params: [masterChefAddress],
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.token.address),
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'decimals',
        },
        // Jar information
        {
          address: jarAddress,
          name: 'balance',
        },
        // Ratio of tokens in our jar contract
        {
          address: jarAddress,
          name: 'getRatio',
        },
      ]

      const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, totalDepositsVal, jarRatioBal] =
        await multicall(erc20Jar, calls)
      const tokenDecimals = farmConfig.token.decimals
      const quoteTokenDecimals = farmConfig.quoteToken.decimals

      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTotalSupplyNum = new BigNumber(lpTotalSupply)
      const lpQuoteTokenNum = new BigNumber(quoteTokenBalanceLP)
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(lpTotalSupplyNum)

      // Total value in staking in quote token value
      const lpTotalInQuoteToken = lpQuoteTokenNum.div(DEFAULT_TOKEN_DECIMAL).times(new BigNumber(2)).times(lpTokenRatio)

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals)).times(lpTokenRatio)
      const quoteTokenAmount = lpQuoteTokenNum.div(BIG_TEN.pow(quoteTokenDecimals)).times(lpTokenRatio)

      // Fetch total deposits
      const jarDeposits = new BigNumber(totalDepositsVal)
      const jarRatioNum = new BigNumber(jarRatioBal)
      const totalDeposits = jarDeposits
        .times(2)
        .div(lpTotalSupplyNum)
        .times(lpQuoteTokenNum)
        .div(BIG_TEN.pow(quoteTokenDecimals))
      */

      let tradingFeeRate = 0
      // Subgraph Trading Pair Data
      if (!farmConfig.isJetSwap && !farmConfig.isFirebird && !farmConfig.isGravity) {

        if (farmConfig.token.address !== farmConfig.quoteToken.address) {
          let APIURL = quickGraphURL
          let subgraphQuery = `
              query {
                pairDayDatas(first:1,orderBy: date, orderDirection: desc, where:{pairAddress:"${lpAddress}"}) {
                  reserve0
                  reserve1
                  reserveUSD
                  dailyVolumeToken0
                  dailyVolumeToken1
                  dailyVolumeUSD
                }
              }
              `
          if (farmConfig.isSushi) {
            APIURL = sushiGraphURL
            subgraphQuery = `
                query {
                  pairDayDatas(first:1,orderBy: date, orderDirection: desc, where:{pair_contains:"${lpAddress?.toLowerCase()}"}) {
                    reserve0
                    reserve1
                    reserveUSD
                    volumeToken0
                    volumeToken1
                    volumeUSD
                  }
                }
                `
          }

          if (farmConfig.isDfyn) {
            APIURL = dfynGraphURL
          }
          if (farmConfig.isApe) {
            APIURL = apeswapGraphURL
          }
          if (farmConfig.isWault) {
            APIURL = waultGraphURL
          }

          const client = createClient({
            url: APIURL,
          })

          const responseData = await client.query(subgraphQuery).toPromise()
          let volume0 = 0
          let volume1 = 0
          let volumeUSD = 0
          try {
            if (farmConfig.isSushi) {
              volume0 = responseData.data.pairDayDatas[0].volumeToken0
              volume1 = responseData.data.pairDayDatas[0].volumeToken1
              volumeUSD = responseData.data.pairDayDatas[0].volumeUSD
            } else {
              volume0 = responseData.data.pairDayDatas[0].dailyVolumeToken0
              volume1 = responseData.data.pairDayDatas[0].dailyVolumeToken1
              volumeUSD = responseData.data.pairDayDatas[0].dailyVolumeUSD
            }
            const reserve0 = responseData.data.pairDayDatas[0].reserve0
            const reserve1 = responseData.data.pairDayDatas[0].reserve1
            const reserveUSD = responseData.data.pairDayDatas[0].reserveUSD
            tradingFeeRate = (0.003 * 100 * volumeUSD) / reserveUSD
            if (volumeUSD <= 1000) {
              tradingFeeRate = 0.003 * 100 * (((1 / 2) * volume0) / reserve0 + ((1 / 2) * volume1) / reserve1)
            }
            if (tradingFeeRate >= 2) {
              tradingFeeRate = 0
            }
          } catch (e) {
            // console.log('')
          }
        }
        if (farmConfig.token.coingeico==='curve3pool'){
          tradingFeeRate = 0.0684/365*100
        }
        if (farmConfig.token.coingeico==='atricrypto3'){
          tradingFeeRate = 0.0541/365*100
        }
        if (farmConfig.token.coingeico==='btcrenbtc'){
          tradingFeeRate = 0.0158/365*100
        }
      }
      // new BigNumber(totalDepositsVal).times(quoteTokenAmount).div(tokenAmount).div(BIG_TEN.pow(quoteTokenDecimals)).times(2)

      /*    const calls = farmsToFetch.map((farm) => {
          const lpContractAddress = getAddress(farm.lpAddresses)
          const jarContractAddress = getAddress(farm.jarAddresses)
          return { address: lpContractAddress, name: 'allowance', params: [account, jarContractAddress] }
        })

        const rawLpAllowances = await multicall(erc20ABI, calls)
        const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
          return new BigNumber(lpBalance).toJSON()
        })
        return parsedLpAllowances
      } */

      //    const [info, totalAllocPoint] = await multicall(masterchefABI, [
      //      {
      //        address: getMasterChefAddress(),
      //        name: 'poolInfo',
      //        params: [farmConfig.pid],
      //      },
      //      {
      //        address: getMasterChefAddress(),
      //        name: 'totalAllocPoint',
      //      },
      //    ])

      //      const allocPoint = new BigNumber(info.allocPoint._hex)
      //      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farmConfig,
        /*
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
        lpTokenBalanceMC: new BigNumber(lpTokenBalanceMC).div(DEFAULT_TOKEN_DECIMAL).toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        jarLPDeposits: jarDeposits.toJSON(),
        jarRatio: jarRatioNum.toJSON(),
        totalDeposits: totalDeposits.toJSON(), */
        tradingFeeRate: JSON.stringify(tradingFeeRate),
        //        poolWeight: poolWeight.toJSON(),
        //        multiplier: `${allocPoint.div(100).toString()}X`,
      }
    }),
  )
  return data
}

export default fetchFarms
