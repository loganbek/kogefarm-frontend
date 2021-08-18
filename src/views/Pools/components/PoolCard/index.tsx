import BigNumber from 'bignumber.js'
import React from 'react'
import { CardBody, Flex, Text, CardRibbon, useMatchBreakpoints } from 'components/Pancake'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { Pool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard, StyledCardInner } from './StyledCard'
import ExpandedFooter from './CardFooter/ExpandedFooter'
import StyledCardHeader from './StyledCardHeader'
import CardActions from './CardActions'
import ApyRow from './ApyRow'

const PoolCard: React.FC<{ pool: Pool; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, userData } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)
  const { isXl } = useMatchBreakpoints()

  return (
    <StyledCard
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
      isPromoted={sousId===0 && { isDesktop: isXl}}
    >
      <StyledCardInner>
        <StyledCardHeader
          isStaking={accountHasStakedBalance}
          earningTokenSymbol={earningToken.symbol}
          stakingTokenSymbol={stakingToken.symbol}
          isFinished={isFinished && sousId !== 0}
          account={account}
        />
        <CardBody>
          <AprRow pool={pool} />
          <Flex mt="24px" flexDirection="column">
            {account ? (
              // <CardActions pool={pool} stakedBalance={stakedBalance} />
              <ExpandedFooter pool={pool} account={account} />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                  {t('Start earning')}
                </Text>
                <UnlockButton />
              </>
            )}
          </Flex>
          <ApyRow pool={pool} />
        </CardBody>
      </StyledCardInner>
    </StyledCard>
  )
}

export default PoolCard
