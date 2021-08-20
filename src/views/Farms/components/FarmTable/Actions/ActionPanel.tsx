import React from 'react'
import styled, { useTheme, keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from 'components/Pancake'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CommunityTag, CoreTag, SushiTag, WaultTag, DfynTag, DualTag, ApeTag, JetSwapTag } from 'components/Tags'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, DFYN_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL, JET_ADD_LIQUIDITY_URL, FIREBIRD_ADD_LIQUIDITY_URL } from 'config'

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
  background: ${({ theme }) => theme.colors.row};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;
  margin-top: -7px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 12px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const ContainerWrapper = styled.div`
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${ContainerWrapper}:last-of-type {
    margin-left: 200px;
    flex-grow: 1;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 20px;
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
    height: auto;
    padding: 12px;
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
  padding-left: 98px;

  a {
    font-weight: 600;
    font-size: 14px;
  }
`

const InfoWrapper = styled.div`
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

const Info = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas: 
    "staked staked underlying"
    "apr return fee";
  
  > div {
    padding: 24px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.infoContainer}; 
  }
`

const Staked = styled.div`
  grid-area: staked;
`

const Underlying = styled.div`
  grid-area: underlying;
`

const APR = styled.div`
  grid-area: apr;
`

const Return = styled.div`
  grid-area: return;
`

const Fee = styled.div`
  grid-area: fee;
`

const Title = styled.div`
  font-size: 12px;
`

const Stat = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
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
  const theme = useTheme();
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
  const info = farm.underlyingWebsite

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
  if (farm.isJetSwap===true){
    liquidityurl = `${JET_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isFirebird===true){
    liquidityurl = `${FIREBIRD_ADD_LIQUIDITY_URL}/${lpAddress}`
  }
  if (farm.token===farm.quoteToken){
    liquidityurl = `https://quickswap.exchange/#/swap?outputCurrency=${lpAddress}`
    if (farm.isApe===true){
      liquidityurl = `https://app.apeswap.finance/swap?outputCurrency=${lpAddress}`
    }
    if (farm.isSushi===true){
      liquidityurl = `https://app.sushi.com/swap?outputCurrency=${lpAddress}`
    }
    if (farm.token.coingeico==='pwings'){
      liquidityurl = `https://polygon-exchange.jetswap.finance/#/swap?outputCurrency=${lpAddress}`
    }
  }
  if (farm.lpSymbol==="PYQ-USDC"){
    liquidityurl = `https://app.polyquity.org/liquidity`
  }
  if (farm.token.coingeico==='curve3pool'){
    liquidityurl = `https://polygon.curve.fi/aave/deposit`
  }
  if (farm.token.coingeico==='iron3pool'){
    liquidityurl = `https://app.iron.finance/swap/pools/is3usd/deposit`
  }
  if (farm.token.coingeico==='atricrypto'){
    liquidityurl = `https://polygon.curve.fi/atricrypto/deposit`
  }
  if (farm.token.coingeico==='btcrenbtc'){
    liquidityurl = `https://polygon.curve.fi/ren/deposit`
  }


  return (
    <Container expanded={expanded}>
      <Wrapper>
        <ContainerWrapper>
          <InfoContainer>
            {isActive && (
              <StakeContainer>
                <StyledLinkExternal href={liquidityurl} color={theme.colors.textSubtle}>
                  {t(`Get ${lpLabel}`, { name: lpLabel })}
                </StyledLinkExternal>
              </StakeContainer>
            )}
            <StyledLinkExternal href={bsc} color={theme.colors.textSubtle}>{t('View Contract')}</StyledLinkExternal>
            <StyledLinkExternal href={info} color={theme.colors.textSubtle}>{t('Underlying Project')}</StyledLinkExternal>
            <TagsContainer>
              {farm.isCommunity ? <CommunityTag /> : <CoreTag />}
              {farm.isWault && <WaultTag />}
              {farm.isApe && <ApeTag />}
              {farm.isJetSwap && <JetSwapTag />}
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
            <ValueWrapper>
              <Text>{t('Total Staked')}</Text>
              <Liquidity {...liquidity} />
            </ValueWrapper>
            <ValueWrapper>
              <Text>{t('User Staked')}</Text>
              <UserValue {...userValue} />
            </ValueWrapper>
          </ValueContainer>
        </ContainerWrapper>
        <ContainerWrapper>
          <InfoWrapper>
            <Info>
              <Staked>
                <Title>LPs Staked</Title>
                <Stat>697,896.00</Stat>
              </Staked>
              <Underlying>
                <Title>Underlying APR</Title>
                <Stat>423.56%</Stat>
              </Underlying>
              <APR>
                <Title>Underlying APR</Title>
                <Stat>423.56%</Stat>
              </APR>
              <Return>
                <Title>Daily Return</Title>
                <Stat>1.17%</Stat>
              </Return>
              <Fee>
                <Title>Deposit Fee (Third-Party)</Title>
                <Stat>3%</Stat>
              </Fee>

            </Info>
            {/* <ActionContainer>
              <StakedAction {...farm} userDataReady={userDataReady} />
            </ActionContainer> */}
          </InfoWrapper>
        </ContainerWrapper>
      </Wrapper>
    </Container>
  )
}

export default ActionPanel
