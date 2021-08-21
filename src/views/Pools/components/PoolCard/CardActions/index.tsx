import BigNumber from 'bignumber.js'
import React from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import { Flex } from 'components/Pancake'
import { Pool } from 'state/types'
import ApprovalAction from './ApprovalAction'
import StakeActions from './StakeActions'

interface CardActionsProps {
  pool: Pool
  stakedBalance: BigNumber
}

const CardActions: React.FC<CardActionsProps> = ({ pool, stakedBalance }) => {
  const { harvest, userData } = pool
  // Pools using native BNB behave differently than pools using a token
  const allowance = userData?.allowance ? new BigNumber(userData.allowance) : BIG_ZERO
  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO
  const needsApproval = !allowance.gt(0)
  const isStaked = stakedBalance.gt(0)
  const isLoading = !userData

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        {needsApproval ? (
          <ApprovalAction pool={pool} isLoading={isLoading} />
        ) : (
          <StakeActions
            harvest={harvest}
            isLoading={isLoading}
            pool={pool}
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
