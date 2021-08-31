import React, { useState, useCallback } from 'react'
import { Tooltip } from 'react-tippy'
import { isMobile } from "react-device-detect";
import styled from 'styled-components'
import {
  Button,
  ButtonMenu,
  ButtonMenuItem,
  useModal,
  IconButton,
  AddIcon,
  MinusIcon,
  Skeleton,
  Text,
  useMatchBreakpoints
} from 'components/Pancake'
import { Deposit, Withdraw} from 'components/Pancake/Svg'
import { useLocation } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser } from 'state/hooks'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useTranslation } from 'contexts/Localization'
import { useApprove } from 'hooks/useApprove'
import { getBep20Contract } from 'utils/contractHelpers'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL, JET_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import useWeb3 from 'hooks/useWeb3'
import useTheme from 'hooks/useTheme'

import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 360px;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const StyledButtonMenu = styled(ButtonMenu)`
  display: flex;
  margin-top: 30px;

  > div {
    flex: 1;

    button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

interface StackedActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const Staked: React.FunctionComponent<StackedActionProps> = ({
  pid,
  lpSymbol,
  lpAddresses,
  jarAddresses,
  jarRatio,
  quoteToken,
  token,
  isSushi,
  isWault,
  isApe,
  isJetSwap,
  depositFee,
  userDataReady,
}) => {
  const { isDark } = useTheme()
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const [depositIsOpen, setDepositIsOpen] = useState(false)
  const [withdrawIsOpen, setWithdrawIsOpen] = useState(false)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const jarAddress = jarAddresses[process.env.REACT_APP_CHAIN_ID]
  const { onStake } = useStake(jarAddress)
  const { onUnstake } = useUnstake(jarAddress)
  const web3 = useWeb3()

  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  let addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  if (isSushi===true){
    addLiquidityUrl = `${SUSHI_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (isWault===true){
    addLiquidityUrl = `${WAULT_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (isApe===true){
    addLiquidityUrl = `${APE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (isJetSwap===true){
    addLiquidityUrl = `${JET_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (quoteToken===token){
    addLiquidityUrl = `https://quickswap.exchange/#/swap?outputCurrency=${lpAddress}`
  }
  if (lpSymbol.toUpperCase()==="PYQ-USDC"){
    addLiquidityUrl = `https://app.polyquity.org/liquidity`
  }
  if (token.coingeico==='curve3pool'){
    addLiquidityUrl = `https://polygon.curve.fi/aave/deposit`
  }
  if (token.coingeico==='iron3pool'){
    addLiquidityUrl = `https://app.iron.finance/swap/pools/is3usd/deposit`
  }
  if (token.coingeico==='atricrypto'){
    addLiquidityUrl = `https://polygon.curve.fi/atricrypto/deposit`
  }
  if (token.coingeico==='btcrenbtc'){
    addLiquidityUrl = `https://polygon.curve.fi/ren/deposit`
  }

  let decimals = 18
  if (lpSymbol==="KogeCoin"){
    decimals = 9
  }
  if (lpSymbol.toUpperCase()==="USDC" || lpSymbol.toUpperCase()==="USDT"){
    decimals = 6
  }
  if (lpSymbol.toUpperCase()==="BTC"){
    decimals = 8
  }

  const displayBalanceNumber = stakedBalance.times(jarRatio).div(10**18)
  const displayBalance = useCallback(() => {
    const stakedBalanceNumber = getBalanceNumber(stakedBalance)
    if (stakedBalanceNumber > 0 && stakedBalanceNumber < 0.0001) {
      return getFullDisplayBalance(displayBalanceNumber,decimals,decimals).toLocaleString()
    }
  return getFullDisplayBalance(displayBalanceNumber,decimals,decimals).toLocaleString()

}, [stakedBalance, displayBalanceNumber, decimals])

  const onDepositClose = () => setDepositIsOpen(false)
  const onWithdrawClose = () => setWithdrawIsOpen(false)

  const lpContract = getBep20Contract(lpAddress, web3)

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

  if (!account) {
    return (
      <ActionContainer>
        <ActionContent>
          <UnlockButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (isApproved) {
    return (
      <StyledButtonMenu scale="sm" variant="outline">
        <Tooltip 
          trigger="click"
          open={depositIsOpen}
          interactive
          useContext
          position={isMobile ? "bottom" : "bottom-end"}
          html={(
            <Tip>
              <DepositModal
                max={tokenBalance} 
                onConfirm={onStake}
                onClose={onDepositClose}
                tokenName={lpSymbol}
                addLiquidityUrl={addLiquidityUrl}
                depositFee={depositFee} 
              />
            </Tip>
          )}
        >
          <ButtonMenuItem onClick={(e) => {
            e.stopPropagation()
            setDepositIsOpen(true)
          }}>
            <Deposit isDark={isDark} />
            <Text
              fontSize="14px"
              fontWeight="bold"
            >
              Deposit
            </Text>
          </ButtonMenuItem>
        </Tooltip>
        <Tooltip 
          trigger="click"
          open={withdrawIsOpen}
          interactive
          useContext
          position={isMobile ? "bottom" : "bottom-end"}
          html={(
            <Tip>
              <WithdrawModal
                max={stakedBalance}
                displayMax={displayBalanceNumber}
                onConfirm={onUnstake}
                onClose={onWithdrawClose}
                tokenName={lpSymbol}
                depositFee={depositFee} 
              />
            </Tip>
          )}
        >
          <ButtonMenuItem onClick={(e) => {
            e.stopPropagation()
            setWithdrawIsOpen(true)
          }}>
            <Withdraw isDark={isDark} />
            <Text
              fontSize="14px"
              fontWeight="bold"
            >
              Withdraw
            </Text>
          </ButtonMenuItem>
        </Tooltip>
      </StyledButtonMenu>
    )
  }

  if (!userDataReady) {
    return (
      <ActionContainer>
        <ActionContent>
          <Skeleton width={180} marginBottom={28} marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionContent>
        <Button
          width="100%"
          disabled={requestedApproval}
          onClick={handleApprove}
          variant="outline"
        >
          {t('Enable vault')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default Staked
