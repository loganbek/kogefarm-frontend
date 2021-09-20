import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, stakeKoge, sousStake, sousStakeBnb, depositJar  } from 'utils/callHelpers'
// import { useMasterchef, useSousChef } from './useContract'
import { useMasterchef, useSousChef, useJar } from './useContract'

const useStake = (jarAddress: string) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const jarContract = useJar(jarAddress)

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await depositJar(jarContract, amount, account, library)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, jarContract, library],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account, library)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account, library)
      } else {
        await sousStake(sousChefContract, amount, decimals, account, library)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId, library],
  )

  return { onStake: handleStake }
}


export const useMasterChefStake = (sousId:number, pid: number) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (decimals===9){
        await stakeKoge(masterChefContract, pid, amount, account, library)
      }
      else{
        await stake(masterChefContract, pid, amount, account, library)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, masterChefContract, sousId, pid, library],
  )

  return { onStake: handleStake }
}


export default useStake