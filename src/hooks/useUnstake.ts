import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
// import { unstake, sousUnstake, sousEmergencyUnstake } from 'utils/callHelpers'
import { unstake, sousUnstake, masterChefUnstake, sousEmergencyUnstake, masterChefEmergencyUnstake, withdrawalJar } from 'utils/callHelpers'
// import { useMasterchef, useSousChef } from './useContract'
import { useMasterchef, useSousChef, useJar } from './useContract'

const useUnstake = (jarAddress: string) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const jarContract = useJar(jarAddress)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await withdrawalJar(jarContract, amount, account, library)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, jarContract, library],
  )

  return { onUnstake: handleUnstake }
}

export const useSousUnstake = (sousId, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account, library)
        console.info(txHash)
      } else if (enableEmergencyWithdraw) {
        const txHash = await sousEmergencyUnstake(sousChefContract, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, decimals, account, library)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, masterChefContract, sousChefContract, sousId, library],
  )

  return { onUnstake: handleUnstake }
}


export const useMasterChefUnstake = (sousId, pid, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        const txHash = await masterChefEmergencyUnstake(masterChefContract, pid, account)
        console.info(txHash)
      } else {
        const txHash = await masterChefUnstake(masterChefContract, pid, amount, decimals, account, library)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, masterChefContract, sousId, pid, library],
  )

  return { onUnstake: handleUnstake }
}





export default useUnstake