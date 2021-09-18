import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useGetApiPrice } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApr } from 'utils/apr'
import { Flex, Text } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'
import { Tooltip } from 'react-tippy'
import { TooltipIcon } from 'components/Pancake/Svg'

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const StyledTable = styled.table`
	margin-top: 64px;
	table-layout: fixed;

	th {
		text-align: left;
		padding-bottom: 10px;

		&:nth-of-type(2) {
			text-align: center;
		}

		&:last-of-type {
			text-align: right;
		}
	}

	td {
		text-align: left;
		padding: 6px 0;

		&:nth-of-type(2) {
			text-align: center;
		}

		&:last-of-type {
			text-align: right;
		}
	}

	tbody {
		font-size: 12px;

		tr {
			border-bottom: 1px solid #C7C7C7;
		}
	}
`

const ApyCalculatorModal = ({
	pool,
  roundingDecimals = 2,
  compoundFrequency = 1,
  performanceFee = 0,
}) => {
  const { stakingToken, earningToken, totalStaked, userData, tokenPerBlock } = pool
  const { t } = useTranslation()

  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)
  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const oneThousandDollarsWorthOfToken = 1000 / earningTokenPrice

	const userLiquidity = userData.stakedBalance.times(new BigNumber(stakingTokenPrice))

	const getUserStakedBalance = () => {
    return getBalanceNumber(userLiquidity, stakingToken.decimals)
  }



  const apr = getPoolApr(
    stakingTokenPrice,
    earningTokenPrice,
    getBalanceNumber(totalStaked, stakingToken.decimals),
    parseFloat(tokenPerBlock),
  )

  const tokenEarnedPerThousand1D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 1,
    farmApr: apr,
    tokenPrice: earningTokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

  const tokenEarnedPerThousand7D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 7,
    farmApr: apr,
    tokenPrice: earningTokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

  const tokenEarnedPerThousand30D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apr,
    tokenPrice: earningTokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

  const tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apr,
    tokenPrice: earningTokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

	const oneDayRoi = getRoi({ amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken })
	const sevenDayRoi = getRoi({ amountEarned: tokenEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfToken })
	const thirtyDayRoi = getRoi({ amountEarned: tokenEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfToken })
	const threeSixtyFiveRoi = getRoi({ amountEarned: tokenEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfToken })

  return (
		<>
			<StyledTable width="100%">
				<thead>
					<tr>
						<th>
							<Text fontSize="12px" color="textSubtle" textTransform="uppercase">
								{t('Timeframe')}
							</Text>
						</th>
						<th>
							<Flex justifyContent="center">
								<Text fontSize="12px" color="textSubtle" textTransform="uppercase">
									{t('ROI')}
								</Text>
								<Tooltip
			            trigger="mouseenter"
			            interactive
			            useContext
			            position="bottom"
			            html={(
			              <Tip>
			                <Text>
			                  {t('ROI assumes daily manual compounding')}
			                </Text>
			              </Tip>
			            )}
			          >
								<TooltipIcon ml="8px" />
							</Tooltip>
							</Flex>
						</th>
						<th>
							<Text fontSize="12px" color="textSubtle">
								{t('User Staked x ROI')}
							</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Text fontSize="12px">
								1d
							</Text>
						</td>
						<td>
							<Text fontSize="12px" bold>
								{ oneDayRoi.toLocaleString(undefined,{minimumFractionDigits: roundingDecimals, maximumFractionDigits:roundingDecimals}) }%
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								${ (getUserStakedBalance() * Number(oneDayRoi ?? 0) / 100).toLocaleString(undefined,{maximumFractionDigits:roundingDecimals}) }
							</Text>
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">
								7d
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								{ sevenDayRoi.toLocaleString(undefined,{minimumFractionDigits: roundingDecimals, maximumFractionDigits:roundingDecimals}) }%
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								${ (getUserStakedBalance() * Number(sevenDayRoi ?? 0) / 100).toLocaleString(undefined,{maximumFractionDigits:roundingDecimals})}
							</Text>
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">
								30d
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								{thirtyDayRoi.toLocaleString(undefined,{minimumFractionDigits: roundingDecimals, maximumFractionDigits:roundingDecimals})}%
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								${ (getUserStakedBalance() * Number(thirtyDayRoi ?? 0) / 100).toLocaleString(undefined,{maximumFractionDigits:roundingDecimals}) }
							</Text>
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">
								365d
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								{threeSixtyFiveRoi.toLocaleString(undefined,{minimumFractionDigits: roundingDecimals, maximumFractionDigits:roundingDecimals})}%
							</Text>
						</td>
						<td>
							<Text fontSize="12px" fontWeight="bold">
								${ (getUserStakedBalance() * Number(threeSixtyFiveRoi ?? 0) / 100).toLocaleString(undefined,{maximumFractionDigits:roundingDecimals}) }
							</Text>
						</td>
					</tr>
				</tbody>
			</StyledTable>
		</>
  )
}

export default ApyCalculatorModal
