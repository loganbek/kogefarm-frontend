import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from '@pancakeswap/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CommunityTag, CoreTag, SushiTag, WaultTag, DfynTag, DualTag, ApeTag } from 'components/Tags'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, DFYN_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL } from 'config'

// import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Apy, { ApyProps } from '../Apy'
// import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'
import UserValue, { UserValueProps } from '../UserValue'

export interface ActionPanelProps {
  apr: AprProps
  apy: ApyProps
  apyd: ApyProps
//  multiplier: MultiplierProps
  liquidity: LiquidityProps
  userValue: UserValueProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apr,
  apy,
//  apyd,
//  multiplier,
  liquidity,
  userValue,
  userDataReady,
  expanded,
}) => {
  const farm = details

  const { t } = useTranslation()
  const isActive = true
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const jarAddress = farm.jarAddresses[process.env.REACT_APP_CHAIN_ID]
  const bsc = `https://polygonscan.com/address/${jarAddress}`
  let info = `https://info.quickswap.exchange/pair/${lpAddress}`
  if (farm.isSushi===true){
    info = `https://analytics-polygon.sushi.com/pairs/${lpAddress}`
  }
  if (farm.isWault===true){
    info =  `https://polygonscan.com/address/${lpAddress}`
  }
  if (farm.isDfyn===true){
    info = `https://info.dfyn.network/pair/${lpAddress}`
  }
  if (farm.isApe===true){
    info = `https://polygon.info.apeswap.finance/pair/${lpAddress}`
  }
  if (farm.token===farm.quoteToken){
    info = `https://info.quickswap.exchange/address/${lpAddress}`
    if (farm.isApe===true){
      info = `https://polygon.info.apeswap.finance/address/${lpAddress}`
    }
  }

  let liquidityurl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  if (farm.isSushi===true){
    liquidityurl = `${SUSHI_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isWault===true){
    liquidityurl = `${WAULT_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isDfyn===true){
    liquidityurl = `${DFYN_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isApe===true){
    liquidityurl = `${APE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.token===farm.quoteToken){
    liquidityurl = `https://quickswap.exchange/#/swap?outputCurrency=${lpAddress}`
    if (farm.isApe===true){
      liquidityurl = `https://app.apeswap.finance/swap?outputCurrency=${lpAddress}`
    }
  }
  if (farm.lpSymbol==="PYQ-USDC"){
    liquidityurl = `https://app.polyquity.org/liquidity`
  }


  return (
    <Container expanded={expanded}>
      <InfoContainer>
        {isActive && (
          <StakeContainer>
            <StyledLinkExternal href={liquidityurl}>
              {t(`Get ${lpLabel}`, { name: lpLabel })}
            </StyledLinkExternal>
          </StakeContainer>
        )}
        <StyledLinkExternal href={bsc}>{t('View Contract')}</StyledLinkExternal>
        <StyledLinkExternal href={info}>{t('See Pair Info')}</StyledLinkExternal>
        <TagsContainer>
          {farm.isCommunity ? <CommunityTag /> : <CoreTag />}
          {farm.isSushi && <SushiTag />}
          {farm.isWault && <WaultTag />}
          {farm.isApe && <ApeTag />}
          {dual ? <DualTag /> : null}
        </TagsContainer>
      </InfoContainer>
      <ValueContainer>
         <ValueWrapper>
          <Text>{t('APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('APY')}</Text>
          <Apy {...apy} />
        </ValueWrapper>
  {/*        <ValueWrapper>
          <Text>{t('Daily')}</Text>
          <Apy {...apyd} />
        </ValueWrapper>
      <ValueWrapper>
          <Text>{t('Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper> */}
        <ValueWrapper>
          <Text>{t('Total Staked')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('User Staked')}</Text>
          <UserValue {...userValue} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
  {/*      <HarvestAction {...farm} userDataReady={userDataReady} /> */}
        <StakedAction {...farm} userDataReady={userDataReady} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
