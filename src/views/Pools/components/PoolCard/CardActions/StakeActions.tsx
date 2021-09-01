import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { 
  Flex,
  Text,
  Button,
  IconButton,
  AddIcon,
  MinusIcon,
  useModal,
  Skeleton,
  useTooltip,
} from 'components/Pancake'
import { Tooltip } from 'react-tippy'
import BigNumber from 'bignumber.js'
import { useGetApiPrice } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { Pool } from 'state/types'
import Balance from 'components/Balance'
import NotEnoughTokensModal from '../Modals/NotEnoughTokensModal'
import StakeModal from '../Modals/StakeModal'
import HarvestActions from './HarvestActions'

interface StakeActionsProps {
  pool: Pool
  harvest?: any,
  stakingTokenBalance: BigNumber
  stakedBalance: BigNumber
  isStaked: ConstrainBoolean
  isLoading?: boolean
  content?: ReactNode
}

const Tip = styled.div`
  background: #F4F4F4;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 360px;
  padding: 24px;
  margin-top: 5px;
  border-radius: 4px;
`

const StakeAction: React.FC<StakeActionsProps> = ({
  pool,
  stakingTokenBalance,
  stakedBalance,
  isStaked,
  isLoading = false,
}) => {
  const { sousId, pid, stakingToken, harvest, stakingLimit, isFinished, userData, earningToken } = pool
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const stakedTokenBalance = getBalanceNumber(stakedBalance, stakingToken.decimals)
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)
  const stakedTokenDollarBalance = getBalanceNumber(
    stakedBalance.multipliedBy(stakingTokenPrice),
    stakingToken.decimals,
  )

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} stakingToken = {stakingToken}/>)

  const [onPresentStake] = useModal(
    <StakeModal
      pool={pool}
      stakingTokenBalance={stakingTokenBalance}
      stakingTokenPrice={stakingTokenPrice}
    />,
  )

  const [onPresentUnstake] = useModal(
    <StakeModal
      stakingTokenBalance={stakingTokenBalance}
      pool={pool}
      stakingTokenPrice={stakingTokenPrice}
      isRemovingStake
    />,
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('You’ve already staked the maximum amount you can stake in this pool!'),
    { placement: 'bottom' },
  )

  const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit)

  const handleOpen = () => setOpen(!open)

  const renderStakeAction = () => {
    return isStaked ? (
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <>
            <Balance bold fontSize="20px" decimals={3} value={stakedTokenBalance} />
            <Text fontSize="12px" color="textSubtle">
              <Balance
                fontSize="12px"
                color="textSubtle"
                decimals={2}
                value={stakedTokenDollarBalance}
                prefix="~"
                unit=" USD"
              />
            </Text>
          </>
        </Flex>
        <Flex>
          <IconButton variant="secondary" onClick={onPresentUnstake} mr="6px">
            <MinusIcon color="primary" width="24px" />
          </IconButton>
          {reachStakingLimit ? (
            <span ref={targetRef}>
              <IconButton variant="secondary" disabled>
                <AddIcon color="textDisabled" width="24px" height="24px" />
              </IconButton>
            </span>
          ) : (
            <IconButton
              variant="secondary"
              onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}
              disabled={isFinished}
            >
              <AddIcon color="primary" width="24px" height="24px" />
            </IconButton>
          )}
        </Flex>
        {tooltipVisible && tooltip}
      </Flex>
    ) : (
      <Tooltip
        open={open}
        trigger="click"
        interactive
        useContext
        position="bottom-end"
        html={(
          <Tip>
            {harvest ? (
              <HarvestActions
                earnings={earnings}
                earningToken={earningToken}
                onClose={handleOpen}
                sousId={sousId}
                pid={pid}
                earningTokenPrice={earningTokenPrice}
                isLoading={isLoading}
              />
            ) : null}
          </Tip>
        )}
      >
        <Button 
          variant="secondary"
          height="32px"
        >
          {t('Stake')}
        </Button>
      </Tooltip>
    )
  }

  return (
    <Flex flexDirection="column">
      {isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}
    </Flex>
  )
}

export default StakeAction
