import React from 'react'
import { Tooltip } from 'react-tippy'
import styled from 'styled-components'
import { Flex, Skeleton, Text } from 'components/Pancake'
import { TooltipIcon } from 'components/Pancake/Svg'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApr } from 'utils/apr'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'
import { useGetApiPrice } from 'state/hooks'
import Balance from 'components/Balance'
import { Pool } from 'state/types'

interface AprRowProps {
  pool: Pool
  isAutoVault?: boolean
  compoundFrequency?: number
  performanceFee?: number
}

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const AprRow: React.FC<AprRowProps> = ({
  pool,
  isAutoVault = false,
  compoundFrequency = 1,
  performanceFee = 0,
}) => {
  const { t } = useTranslation()
  const { stakingToken, earningToken, totalStaked, isFinished, tokenPerBlock } = pool

  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)
  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const apr = getPoolApr(
    stakingTokenPrice,
    earningTokenPrice,
    getBalanceNumber(totalStaked, stakingToken.decimals),
    parseFloat(tokenPerBlock),
  )


  // special handling for tokens like tBTC or BIFI where the daily token rewards for $1000 dollars will be less than 0.001 of that token
  const isHighValueToken = Math.round(earningTokenPrice / 1000) > 0
  const roundingDecimals = isHighValueToken ? 4 : 2

  const earningsPercentageToDisplay = () => {
    if (isAutoVault) {
      const oneThousandDollarsWorthOfToken = 1000 / earningTokenPrice
      const tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
        numberOfDays: 365,
        farmApr: apr,
        tokenPrice: earningTokenPrice,
        roundingDecimals,
        compoundFrequency,
        performanceFee,
      })
      return getRoi({
        amountEarned: tokenEarnedPerThousand365D,
        amountInvested: oneThousandDollarsWorthOfToken,
      })
    }
    return apr
  }

  return (
    <Flex justifyContent="space-between" flexDirection="column">
      <div>
        <Flex alignItems="center">
          <Text fontSize="12px" fontWeight="600">
            {isAutoVault ? t('APY') : t('APR')}
          </Text>
          <Tooltip
            trigger="mouseenter"
            interactive
            useContext
            position="bottom"
            html={(
              <Tip>
                { isAutoVault 
                  ? t('APY includes compounding, APR doesn’t. This farm is compounded automatically, so we show APY.')
                  : t('This farm\'s rewards aren’t compounded automatically, so we show APR')
                }
              </Tip>
            )}
          >
            <TooltipIcon ml="8px" />
          </Tooltip>
        </Flex>
      </div>

      {isFinished || !apr ? (
        <Skeleton width="82px" height="32px" />
      ) : (
        <Flex alignItems="center">
          <Balance
            fontSize="32px"
            isDisabled={isFinished}
            value={earningsPercentageToDisplay()}
            decimals={2}
            unit="%"
            bold
          />
        </Flex>
      )}
    </Flex>
  )
}

export default AprRow
