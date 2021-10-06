import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
// import masterChefABI from 'config/abi/masterchef.json'
import GenericJarABI from 'config/abi/GenericJar.json'
import { FarmConfig } from 'config/constants/types'
import { CHAINS } from 'config/index'
import { useEffect, useState } from 'react'
// import { getMasterChefAddress } from 'utils/addressHelpers'
import { getAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import useNetworkSwitcher from './useNetworkSwitcher'
import useRefresh from './useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const { getCurrentNetwork } = useNetworkSwitcher()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = CHAINS[getCurrentNetwork()].farms.map((farm) => ({
        address: getAddress(farm.jarAddresses),
        name: 'balanceOf',
        params: [account],
      }))

      const rawResults = await multicall(GenericJarABI, calls)
      const results = CHAINS[getCurrentNetwork()].farms.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh, getCurrentNetwork])

  return farmsWithBalances
}

export default useFarmsWithBalance
