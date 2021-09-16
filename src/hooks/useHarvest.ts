import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { soushHarvest, soushHarvestBnb, masterchefHarvest, harvest } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account, library)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract, library])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account, library)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract, library])

  return { onReward: handleHarvest }
}

export const useSousHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const sousChefContract = useSousChef(sousId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (sousId === 0) {
      await harvest(masterChefContract, 0, account, library)
    } else if (isUsingBnb) {
      await soushHarvestBnb(sousChefContract, account, library)
    } else {
      await soushHarvest(sousChefContract, account, library)
    }
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId, library])

  return { onReward: handleHarvest }
}

export const useMasterChefHarvest = (sousId, pid: number) => {
  const dispatch = useAppDispatch()
  const { account, library } = useWeb3React()
  const masterChefContract = useMasterchef()
//  const sousChefContract = useSousChef(sousId)

  const handleHarvest = useCallback(async () => {
  await masterchefHarvest(masterChefContract, pid, account, library)
  dispatch(updateUserPendingReward(sousId, account))
  dispatch(updateUserBalance(sousId, account))
}, [account, dispatch, masterChefContract, pid, sousId, library])

  return { onReward: handleHarvest }
}
