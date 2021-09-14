import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { useGetApiPrice } from 'state/hooks'
import { BIG_ZERO } from 'utils/bigNumber'
import { Flex, Text, Box } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// import { PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import ApprovalAction from './ApprovalAction'
import StakeActions from './StakeActions'
import HarvestActions from './HarvestActions'

const InlineText = styled(Text)`
  display: inline;
`

interface CardActionsProps {
  pool: Pool
  stakedBalance: BigNumber
  handleOpen?: () => void
}

const CardActions: React.FC<CardActionsProps> = ({ pool, stakedBalance, handleOpen }) => {
  const { sousId, pid, stakingToken, earningToken, harvest, userData } = pool
  // Pools using native BNB behave differently than pools using a token
  const { t } = useTranslation()
  const allowance = userData?.allowance ? new BigNumber(userData.allowance) : BIG_ZERO
  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const needsApproval = !allowance.gt(0)
  const isStaked = stakedBalance.gt(0)
  const isLoading = !userData
  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        {harvest && (
          <HarvestActions
            earnings={earnings}
            earningToken={earningToken}
            onClose={handleOpen}
            sousId={sousId}
            pid={pid}
            earningTokenPrice={earningTokenPrice}
            isLoading={isLoading}
          />
        )}
        <Box display="inline" mb="8px" mt="8px">
          <InlineText color={isStaked ? 'secondary' : 'textSubtle'} textTransform="uppercase" bold fontSize="10px">
            {isStaked ? stakingToken.symbol : t('Stake')}{' '}
          </InlineText>
          <InlineText color={isStaked ? 'textSubtle' : 'secondary'} textTransform="uppercase" bold fontSize="10px">
            {isStaked ? t('Staked') : `${stakingToken.symbol}`}
          </InlineText>
        </Box>
        {needsApproval ? (
          <ApprovalAction pool={pool} isLoading={isLoading} />
        ) : (
          <StakeActions
            isLoading={isLoading}
            pool={pool}
            handleOpen={handleOpen}
            stakingTokenBalance={stakingTokenBalance}
            stakedBalance={stakedBalance}
            isStaked={isStaked}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CardActions
