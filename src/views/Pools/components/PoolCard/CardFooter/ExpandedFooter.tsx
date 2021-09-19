import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import {
  Flex,
  Text,
  LinkExternal,
  Skeleton,
} from 'components/Pancake'
import { BASE_BSC_SCAN_URL, BASE_EXCHANGE_URL } from 'config'
import { useGetApiPrice } from 'state/hooks'
import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import HarvestActions from '../CardActions/HarvestActions'

interface ExpandedFooterProps {
  pool: Pool
  account: string
  handleOpen?: () => void
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const StyledLinkWrapper = styled(LinkExternal)`
  border-radius: 4px;
  display: flex;
  color: #171717;
  padding: 4px 8px;
  background: #E0E0E0;
  font-size: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  svg {
    order: 1;
    fill: currentColor;
    margin-right: 0;
    height: 18px;
    width: 18px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({ pool, handleOpen }) => {
  const { t } = useTranslation()

  const { sousId, pid, stakingToken, earningToken, totalStaked, harvest, userData, contractAddress } = pool
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO

  const poolContractAddress = getAddress(contractAddress)

  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const totalLiquidity = totalStaked.times(new BigNumber(stakingTokenPrice))
  const userLiquidity = userData.stakedBalance.times(new BigNumber(stakingTokenPrice))
  const earningTokenPrice = useGetApiPrice(earningToken.coingeico)
  const isLoading = !userData

  const getTotalStakedBalance = () => {
    return getBalanceNumber(totalLiquidity, stakingToken.decimals)
  }

  const getUserStakedBalance = () => {
    return getBalanceNumber(userLiquidity, stakingToken.decimals)
  }

  let stakingTokenLink = `${BASE_EXCHANGE_URL}/#/add/0x13748d548D95D78a3c83fe3F32604B4796CFfa23/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270`
  if (stakingToken.coingeico === 'kogecoin') {
    stakingTokenLink = `${BASE_EXCHANGE_URL}/#/swap?outputCurrency=${stakingToken.address[process.env.REACT_APP_CHAIN_ID]}`
  }

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" flexDirection="column">
        <Text small mb="4px">{t('Total staked')}:</Text>
        <Flex alignItems="flex-start">
          {totalStaked ? (
            <Balance
              fontWeight="600"
              fontSize="16px"
              mb="12px"
              value={getTotalStakedBalance()}
              decimals={2}
              prefix='$'
            />
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
        </Flex>
      </Flex>
      <Flex mb="2px" justifyContent="space-between" flexDirection="column">
        <Text small mb="4px">{t('User staked')}:</Text>
        <Flex alignItems="flex-start">
          {userData ? (
            <Balance
              fontWeight="600"
              fontSize="16px"
              mb="12px"
              value={getUserStakedBalance()}
              decimals={2}
              prefix='$'
            />
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
        </Flex>
      </Flex>

      <Flex mb="2px" justifyContent="space-between" flexDirection="column">
        <Text small mb="4px">{t('KogeCoin Earned')}:</Text>
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
        </Flex>
      </Flex>

      <Flex style={{ alignItems: "baseline" }}>
        {poolContractAddress && (
          <Flex mb="2px">
            <StyledLinkWrapper
              bold={false}
              small
              href={`${BASE_BSC_SCAN_URL}/address/${poolContractAddress}`}
            >
              {t('View Contract')}
            </StyledLinkWrapper>
          </Flex>
        )}
        <StyledLinkWrapper
          bold={false}
          small
          href={stakingTokenLink}
        >
          {t('Get ')} {stakingToken.symbol}
        </StyledLinkWrapper>
      </Flex>
    </ExpandedWrapper>
  )
}

export default React.memo(ExpandedFooter)
