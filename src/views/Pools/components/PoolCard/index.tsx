import BigNumber from 'bignumber.js'
import React, {useState} from 'react'
import { CardBody, Flex, CardRibbon, useMatchBreakpoints } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { Pool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard, StyledCardInner } from './StyledCard'
import ExpandedFooter from './CardFooter/ExpandedFooter'
import StyledCardHeader from './StyledCardHeader'
import ApyRow from './ApyRow'

const PoolCard: React.FC<{ pool: Pool; account: string }> = ({ pool, account }) => {
  const {
    sousId,
    stakingToken,
    earningToken,
    isFinished,
    userData,
  } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)
  const { isXl } = useMatchBreakpoints()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

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
          pool={pool}
          stakedBalance={stakedBalance}
        />
        <CardBody>
          <AprRow pool={pool} />
          <Flex mt="24px" flexDirection="column">
            <ExpandedFooter
              pool={pool}
              account={account}
              handleOpen={handleOpen}
            />
          </Flex>
          <ApyRow pool={pool} />
        </CardBody>
      </StyledCardInner>
    </StyledCard>
  )
}

export default PoolCard
