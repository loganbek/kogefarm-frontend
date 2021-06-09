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
} from '@pancakeswap/uikit'
import { BASE_BSC_SCAN_URL, BASE_EXCHANGE_URL } from 'config'
import { useGetApiPrice } from 'state/hooks'
import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
// import { registerToken } from 'utils/wallet'
import Balance from 'components/Balance'
// import { getPoolBlockInfo } from 'views/Pools/helpers'

interface ExpandedFooterProps {
  pool: Pool
  account: string
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({ pool }) => {
  const { t } = useTranslation()
//  const { currentBlock } = useBlock()

  const { stakingToken, totalStaked, contractAddress } = pool

//  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''
  const poolContractAddress = getAddress(contractAddress)
//  const cakeVaultContractAddress = getCakeVaultAddress()
//  const imageSrc = `${BASE_URL}/images/tokens/${earningToken.symbol.toLowerCase()}.png`
//  const isMetaMaskInScope = !!(window as WindowChain).ethereum?.isMetaMask
//  const isManualCakePool = sousId === 0


  const stakingTokenPrice = useGetApiPrice(stakingToken.coingeico)
  const totalLiquidity = totalStaked.times(new BigNumber(stakingTokenPrice))

  const getTotalStakedBalance = () => {
    return getBalanceNumber(totalLiquidity, stakingToken.decimals)
  }

  let stakingTokenLink = `${BASE_EXCHANGE_URL}/#/add/0x13748d548D95D78a3c83fe3F32604B4796CFfa23/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270`
  if (stakingToken.coingeico==='kogecoin'){
    stakingTokenLink = `${BASE_EXCHANGE_URL}/#/swap?outputCurrency=${stakingToken.address[process.env.REACT_APP_CHAIN_ID]}`
  }

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        <Text small>{t('Total staked')}:</Text>
        <Flex alignItems="flex-start">
          {totalStaked ? (
            <>
              <Balance fontSize="14px" value={getTotalStakedBalance()} decimals={2} prefix='$'/>
            </>
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
        </Flex>
      </Flex>

{/*       {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
         <Text small>{hasPoolStarted ? t('End') : t('Start')}:</Text>
          <Flex alignItems="center">
            {blocksRemaining || blocksUntilStart ? (
              <Balance color="primary" fontSize="14px" value={blocksToDisplay} decimals={0} />
            ) : (
              <Skeleton width="54px" height="21px" />
            )}
            <Text ml="4px" color="primary" small textTransform="lowercase">
              {t('Blocks')}
            </Text>
            <TimerIcon ml="4px" color="primary" />
          </Flex>
        </Flex>
      )} */}
      {poolContractAddress && (
        <Flex mb="2px" justifyContent="flex-end">
          <LinkExternal
            bold={false}
            small
            href={`${BASE_BSC_SCAN_URL}/address/${poolContractAddress}`}
          >
            {t('View Contract')}
          </LinkExternal>
        </Flex>
      )}
      <Flex mb="2px" justifyContent="flex-end">
        <LinkExternal
          bold={false}
          small
          href={stakingTokenLink}
        >
          {t('Get ')} {stakingToken.symbol}
        </LinkExternal>
      </Flex>
{/*      {account && isMetaMaskInScope && tokenAddress && (
        <Flex justifyContent="flex-end">
          <Button
            variant="text"
            p="0"
            height="auto"
            onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals, imageSrc)}
          >
            <Text color="primary" fontSize="14px">
              {t('Add to Metamask')}
            </Text>
            <MetamaskIcon ml="4px" />
          </Button>
        </Flex>
      )} */}
    </ExpandedWrapper>
  )
}

export default React.memo(ExpandedFooter)
