import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import BigNumber from 'bignumber.js'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Flex, Text } from 'components/Pancake'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import useWeb3 from 'hooks/useWeb3'
import { useApprove } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import StakeAction from './StakeAction'
// import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apr?: number
  align?: string
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl }) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { lpAddresses, jarAddresses, jarRatio} = farm
  const {
    allowance: allowanceAsString = 0,
    tokenBalance: tokenBalanceAsString = 0,
    stakedBalance: stakedBalanceAsString = 0
  } = farm.userData || {}
  const allowance = new BigNumber(allowanceAsString)
  const tokenBalance = new BigNumber(tokenBalanceAsString)
  const stakedBalance = new BigNumber(stakedBalanceAsString)
//   const jarRatio = new BigNumber(farm.jarRatio)
//  const earnings = new BigNumber(earningsAsString)
  const lpAddress = getAddress(lpAddresses)
  const jarAddress = getAddress(jarAddresses)
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()

  const lpContract = getBep20Contract(lpAddress, web3)
//  const jarContract = getBep20Contract(jarAddress, web3)

  const { onApprove } = useApprove(lpContract, jarAddress)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        jarRatio = {jarRatio}
   //     pid={pid}
        jarAddress={jarAddress}
        addLiquidityUrl={addLiquidityUrl}
        depositFee={farm.depositFee}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {t('Approve Contract')}
      </Button>
    )
  }

  return (
    <Action>
{/*      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          * TODO: Is there a way to get a dynamic value here from useFarmFromSymbol?
          CAKE
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} /> */}
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Staked')}
        </Text>
      </Flex>
      {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
