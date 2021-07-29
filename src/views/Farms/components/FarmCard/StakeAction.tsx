import React, { useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap/uikit'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  jarRatio?: BigNumber
//  pid?: number
  jarAddress?: string
  addLiquidityUrl?: string
  depositFee?: number
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  jarRatio,
//  pid,
  jarAddress,
  addLiquidityUrl,
  depositFee,
}) => {
  const { t } = useTranslation()
  const { onStake } = useStake(jarAddress)
  const { onUnstake } = useUnstake(jarAddress)
  const location = useLocation()

  let numDecimals = 18
  if (tokenName==="KogeCoin" || tokenName==="KOGECOIN"){
    numDecimals = 9
  }
  if (tokenName.toUpperCase()==="USDC" || tokenName.toUpperCase()==="USDT"){
    numDecimals = 6
  }
  if (tokenName.toUpperCase()==="BTC"){
    numDecimals = 8
  }

  const displayBalanceNumber = stakedBalance.times(jarRatio).div(10**18)
  const displayBalance = useCallback(() => {
    const stakedBalanceNumber = getBalanceNumber(stakedBalance,numDecimals)
    if (stakedBalanceNumber===0){
      return stakedBalanceNumber.toLocaleString()
    }
    if (stakedBalanceNumber > 0 && stakedBalanceNumber < 0.0001) {
      return getFullDisplayBalance(displayBalanceNumber, numDecimals, numDecimals).toLocaleString()
    }
    return getFullDisplayBalance(displayBalanceNumber, numDecimals, numDecimals).toLocaleString()
//    return stakedBalanceNumber.toLocaleString()
}, [stakedBalance, displayBalanceNumber, numDecimals])

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} addLiquidityUrl={addLiquidityUrl} depositFee={depositFee}/>,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} displayMax={displayBalanceNumber} onConfirm={onUnstake} tokenName={tokenName} depositFee={depositFee} />,
  )

  const renderStakingButtons = () => {
    return stakedBalance.eq(0) ? (
      <Button
        onClick={onPresentDeposit}
        disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
      >
        {t('Stake')}
      </Button>
    ) : (
      <IconButtonWrapper>
        <IconButton variant="tertiary" onClick={onPresentWithdraw} mr="6px">
          <MinusIcon color="primary" width="14px" />
        </IconButton>
        <IconButton
          variant="tertiary"
          onClick={onPresentDeposit}
          disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
        >
          <AddIcon color="primary" width="14px" />
        </IconButton>
      </IconButtonWrapper>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading color={stakedBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance()}</Heading>
      {renderStakingButtons()}
    </Flex>
  )
}

export default StakeAction
