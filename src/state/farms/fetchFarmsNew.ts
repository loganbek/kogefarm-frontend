import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import jarAbi from 'config/abi/GenericJar.json'
// import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { BIG_TEN } from 'utils/bigNumber'
// import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { getAddress } from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { createClient } from 'urql'

const quickGraphURL = 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap05'
const sushiGraphURL = 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange'
const dfynGraphURL = 'https://api.thegraph.com/subgraphs/name/ss-sonic/dfyn-v5'

export const fetchFarmsTokenBalanceLP = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const lpAddress = getAddress(farmConfig.lpAddresses)
    return { address: getAddress(farmConfig.token.address), name: 'balanceOf', params: [lpAddress] }
  })

  const tokenBalanceLP = await multicall(erc20, calls)
  return tokenBalanceLP
}

export const fetchFarmsQuoteTokenBalanceLP = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const lpAddress = getAddress(farmConfig.lpAddresses)
    return { address: getAddress(farmConfig.quoteToken.address), name: 'balanceOf', params: [lpAddress] }
  })

  const quoteTokenBalanceLP = await multicall(erc20, calls)
  return quoteTokenBalanceLP
}

export const fetchFarmsLpTokenBalanceMC = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const masterChefAddress = getAddress(farmConfig.masterChefAddresses)
    const lpAddress = getAddress(farmConfig.lpAddresses)
    if (masterChefAddress==='0xd032Cb7a0225c62E5e26455dFE4eE8C87df254e3' || masterChefAddress==='0x7B6bA2709A597Bcbf7Ff54116c0E88DE5fe2C381' || masterChefAddress==='0x1c0a0927105140216425c84399E68F8B31E7510E' || masterChefAddress==='0x7d39705Cc041111275317f55B3A406ACC83615Bc' || masterChefAddress==='0x0706b1A8A1Eeb12Ce7fb1FFDC9A4b4cA31920Eae' || masterChefAddress==='0x9C515E2489749E2befA0B054EfCb3b34B2c7F432' || masterChefAddress==='0x94BE6A449a5c286734522FC6047484ac763c595C') {
      return { address: masterChefAddress, name: 'wantLockedTotal'}
    }
    if (masterChefAddress==='0x52e7b0C6fB33D3d404b07006b006c8A8D6049C55' || masterChefAddress==='0x80F23e90f8D7d6f5e3f602B1E26C7b5Fa4E530d3') {
      return { address: masterChefAddress, name: 'stakedDinos'}
    }
    return { address: lpAddress, name: 'balanceOf', params: [masterChefAddress] }
  })

  const lpTokenBalanceMC = await multicall(erc20, calls)
  return lpTokenBalanceMC
}

export const fetchFarmsLpTotalSupply = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const lpAddress = getAddress(farmConfig.lpAddresses)
    return { address: lpAddress, name: 'totalSupply' }
  })

  const lpTotalSupply = await multicall(erc20, calls)
  return lpTotalSupply
}

export const fetchFarmsTokenDecimals = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    return { address: getAddress(farmConfig.token.address), name: 'decimals' }
  })

  const tokenDecimals = await multicall(erc20, calls)
  return tokenDecimals
}

export const fetchFarmsQuoteTokenDecimals = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    return { address: getAddress(farmConfig.quoteToken.address), name: 'decimals' }
  })

  const quoteTokenDecimals = await multicall(erc20, calls)
  return quoteTokenDecimals
}

export const fetchFarmsTotalDepositsVal = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const jarAddress = getAddress(farmConfig.jarAddresses)
    return { address: jarAddress, name: 'balance' }
  })

  const totalDepositsVal = await multicall(jarAbi, calls)
  return totalDepositsVal
}

export const fetchFarmsJarRatioBal = async (farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farmConfig) => {
    const jarAddress = getAddress(farmConfig.jarAddresses)
    return { address: jarAddress, name: 'getRatio' }
  })

  const jarRatioBal = await multicall(jarAbi, calls)
  return jarRatioBal
}

export const fetchFarmsTradingFeeRate = async (farmsToFetch: FarmConfig[]) => {
  let tradingFeeRate = 0
  farmsToFetch.map(async (farmConfig) => {
    const lpAddress = getAddress(farmConfig.lpAddresses)

    // Subgraph Trading Pair Data
    if (!farmConfig.isApe && !farmConfig.isWault) {
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
                  pairDayDatas(first:1,orderBy: date, orderDirection: desc, where:{pair_contains:"${lpAddress.toLowerCase()}"}) {
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
          subgraphQuery = `
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
          console.error(e)
        }
      }
    }
  })
  return tradingFeeRate
}
