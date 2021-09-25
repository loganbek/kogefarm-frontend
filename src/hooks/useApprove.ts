import { useCallback, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { fetchFarmUserDataAsync, updateUserAllowance } from 'state/actions'
import { approve } from 'utils/callHelpers'
// import { useMasterchef, useCake, useSousChef, useLottery } from './useContract'
import { useJar, useSousChef, useCakeVaultContract } from './useContract'
import useToast from './useToast'
import useLastUpdated from './useLastUpdated'

// Approve a Farm
export const useApprove = (lpContract: Contract, jarContractAddress: string) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const jarContract = useJar(jarContractAddress)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, jarContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, jarContract])

  return { onApprove: handleApprove }
}

export default useApprove

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateUserAllowance(sousId, account))
      if (tx) {
        toastSuccess(
          'Contract Enabled',
          'You can now stake in this pool!',
        )
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(
          `${'Error'}`,
          `${`Please try again. Confirm the transaction and make sure you are paying enough gas!`}`,
        )
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
      toastError('Error', (e as any)?.message)
      setRequestedApproval(false)
    }
  }, [account, sousId, dispatch, lpContract, sousChefContract, toastError, toastSuccess])

  return { handleApprove, requestedApproval }
}

// Approve CAKE auto pool
export const useVaultApprove = (setLastUpdated: () => void) => {
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const cakeVaultContract = useCakeVaultContract()
  const cakeContract = useCakeVaultContract()

  const handleApprove = () => {
    cakeContract.methods
      .approve(cakeVaultContract.options.address, ethers.constants.MaxUint256)
      .send({ from: account })
      .on('sending', () => {
        setRequestedApproval(true)
      })
      .on('receipt', () => {
        toastSuccess('Contract Enabled', 'You can now stake in this vault!')
        setLastUpdated()
        setRequestedApproval(false)
      })
      .on('error', (error) => {
        console.error(error)
        toastError('Error','Please try again. Confirm the transaction and make sure you are paying enough gas!')
        setRequestedApproval(false)
      })
  }

  return { handleApprove, requestedApproval }
}

export const useCheckVaultApprovalStatus = () => {
  const [isVaultApproved, setIsVaultApproved] = useState(false)
  const { account } = useWeb3React()
  const cakeContract = useCakeVaultContract()
  const cakeVaultContract = useCakeVaultContract()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  useEffect(() => {
    const checkApprovalStatus = async () => {
      try {
        const response = await cakeContract.methods.allowance(account, cakeVaultContract.options.address).call()
        const currentAllowance = new BigNumber(response)
        setIsVaultApproved(currentAllowance.gt(0))
      } catch (error) {
        setIsVaultApproved(false)
      }
    }

    checkApprovalStatus()
  }, [account, cakeContract, cakeVaultContract, lastUpdated])

  return { isVaultApproved, setLastUpdated }
}
