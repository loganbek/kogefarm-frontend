import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
// import { getBep20Contract, getCakeContract } from 'utils/contractHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import useLastUpdated from './useLastUpdated'
import useNetworkSwitcher from './useNetworkSwitcher'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const { getCurrentNetwork } = useNetworkSwitcher()
  const web3 = useWeb3(getCurrentNetwork())
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, getCurrentNetwork(), web3)
      const res = await contract.methods.balanceOf(account).call()
      setBalance(new BigNumber(res))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, web3, fastRefresh, getCurrentNetwork])

  return balance
}

// export const useTotalSupply = () => {
//  const { slowRefresh } = useRefresh()
//  const [totalSupply, setTotalSupply] = useState<BigNumber>()

//  useEffect(() => {
//    async function fetchTotalSupply() {
//      const cakeContract = getCakeContract()
//      const supply = await cakeContract.methods.totalSupply().call()
//      setTotalSupply(new BigNumber(supply))
//    }

//    fetchTotalSupply()
//  }, [slowRefresh])

//  return totalSupply
// }

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { slowRefresh } = useRefresh()
  const { getCurrentNetwork } = useNetworkSwitcher()

  const web3 = useWeb3(getCurrentNetwork())

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, getCurrentNetwork(), web3)
      const res = await contract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
      setBalance(new BigNumber(res))
    }

    fetchBalance()
  }, [web3, tokenAddress, slowRefresh, getCurrentNetwork])

  return balance
}

export const useGetBnbBalance = () => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  const { getCurrentNetwork } = useNetworkSwitcher()

  const web3 = useWeb3(getCurrentNetwork())

  useEffect(() => {
    const fetchBalance = async () => {
      const walletBalance = await web3.eth.getBalance(account)
      setBalance(new BigNumber(walletBalance))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, web3, lastUpdated, setBalance])

  return { balance, refresh: setLastUpdated }
}

export default useTokenBalance
