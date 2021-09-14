import { getAddress } from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'
import { createClient } from 'urql'

const quickGraphURL = 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap03'
const sushiGraphURL = 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange'
const dfynGraphURL = 'https://api.thegraph.com/subgraphs/name/ss-sonic/dfyn-v5'

const fetchFarms = async (farmsToFetch: FarmConfig[]) => {
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)

      let tradingFeeRate = 0
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

          let volume0 = 0
          let volume1 = 0
          let volumeInUSD = 0
          try {
            const responseData = await client.query(subgraphQuery).toPromise()

            if (farmConfig.isSushi) {
              volume0 = responseData.data.pairDayDatas[0].volumeToken0
              volume1 = responseData.data.pairDayDatas[0].volumeToken1
              volumeInUSD = responseData.data.pairDayDatas[0].volumeUSD

            } else {
              volume0 = responseData.data.pairDayDatas[0]?.dailyVolumeToken0
              volume1 = responseData.data.pairDayDatas[0]?.dailyVolumeToken1
              volumeInUSD = responseData.data.pairDayDatas[0]?.dailyVolumeUSD
            }
            const { reserve0 } = responseData.data.pairDayDatas[0] ?? 0
            const { reserve1 } = responseData.data.pairDayDatas[0] ?? 0
            const { reserveUSD } = responseData.data.pairDayDatas[0] ?? 0
            tradingFeeRate = (0.003 * 100 * volumeInUSD) / reserveUSD
            if (volumeInUSD <= 1000) {
              tradingFeeRate = 0.003 * 100 * (((1 / 2) * volume0) / reserve0 + ((1 / 2) * volume1) / reserve1)
            }
            if (tradingFeeRate >= 2) {
              tradingFeeRate = 0
            }
          } catch (e) {
            console.error(e)
          }
        }
        if (farmConfig.token.coingeico==='curve3pool'){
          tradingFeeRate = 0.0745/365*100
        }
        if (farmConfig.token.coingeico==='atricrypto'){
          tradingFeeRate = 0.1173/365*100
        }
        if (farmConfig.token.coingeico==='btcrenbtc'){
          tradingFeeRate = 0.0278/365*100
        }
      }

      return {
        ...farmConfig,
        tradingFeeRate: JSON.stringify(tradingFeeRate),
      }
    }),
  )
  return data
}

export default fetchFarms
