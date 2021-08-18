import React from 'react'
import styled from 'styled-components'
import { useGetApiPrice } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApr } from 'utils/apr'
import { Text } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'

const StyledTable = styled.table`
	margin-top: 64px;

	th {
		text-align: left;
		padding-bottom: 10px;
	}

	td {
		padding: 6px 0;
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
  const { stakingToken, earningToken, totalStaked, tokenPerBlock } = pool
  const { t } = useTranslation()

  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)
  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const oneThousandDollarsWorthOfToken = 1000 / earningTokenPrice

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

  return (
		<>
			<StyledTable width="100%">
				<thead>
					<tr>
						<th>
							<Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
								{t('Timeframe')}
							</Text>
						</th>
						<th>
							<Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
								{t('ROI')}
							</Text>
						</th>
						<th>
							<Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
								{t('Total Stacked x ROI')}
							</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Text fontSize="12px">1d</Text>
						</td>
						<td>
							<Text fontSize="12px">
								{getRoi({ amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
									roundingDecimals,
								)}
								%
							</Text>
						</td>
						<td>
							ken
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">7d</Text>
						</td>
						<td>
							<Text fontSize="12px">
								{getRoi({ amountEarned: tokenEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
									roundingDecimals,
								)}
								%
							</Text>
						</td>
						<td>
							<Text fontSize="12px">ken</Text>
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">30d</Text>
						</td>
						<td>
							<Text fontSize="12px">
								{getRoi({
									amountEarned: tokenEarnedPerThousand30D,
									amountInvested: oneThousandDollarsWorthOfToken,
								}).toFixed(roundingDecimals)}
								%
							</Text>
						</td>
						<td>
							<Text fontSize="12px">ken</Text>
						</td>
					</tr>
					<tr>
						<td>
							<Text fontSize="12px">365d</Text>
						</td>
						<td>
							<Text fontSize="12px">
								{getRoi({
									amountEarned: tokenEarnedPerThousand365D,
									amountInvested: oneThousandDollarsWorthOfToken,
								}).toFixed(roundingDecimals)}
								%
							</Text>
						</td>
						<td>
							<Text fontSize="12px">ken</Text>
						</td>
					</tr>
				</tbody>
			</StyledTable>
		</>
  )
}

export default ApyCalculatorModal
