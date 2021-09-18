import React from 'react'
import styled, { useTheme, keyframes, css } from 'styled-components'
import numeral from 'numeral'
import { isDesktop, isMobile } from "react-device-detect";
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from 'components/Pancake'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CommunityTag, CoreTag, WaultTag, DualTag, ApeTag, JetSwapTag } from 'components/Tags'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, DFYN_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL, JET_ADD_LIQUIDITY_URL, FIREBIRD_ADD_LIQUIDITY_URL } from 'config'
import BigNumber from 'bignumber.js'
import StakedAction from './StakedAction'
import { AprProps } from '../Apr'
import Apy, { ApyProps } from '../Apy'
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
  background: ${({ theme }) => theme.colors.row};
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column-reverse;
  padding: 24px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  top: -16px;

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

    @media screen and (max-width: 576px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
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
  margin-top: 35px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 40px;
  }

  > div {
    height: auto;
    padding: 12px;
    font-size: 12px;
    margin-right: 4px;

    svg {
      width: 14px;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
      justify-content: center;
    }
  }
`

const InfoContainer = styled.div`
  padding-left: 126px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    font-weight: 600;
    font-size: 12px;
  }

  @media screen and (max-width: 576px) {
    padding-left: 0;
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

  @media screen and (max-width: 576px) {
    padding-left: 0;
    margin-top: 20px;
  }

  div:first-of-type {
    flex-shrink: 0;
  }
`

const Info = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "staked staked staked"
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

const APR = styled.div`
  grid-area: apr;
`

const Return = styled.div`
  grid-area: return;
`

const Fee = styled.div`
  grid-area: fee;
`

const Title = styled(Text)`
  font-size: 12px;
`

const Stat = styled(Text)`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
`

const format18 = num => numeral(num).format('0,0.000000000000000000')

// const format9 = (num: any) => numeral(num).format('0,0.000000000')

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apy,
  liquidity,
  userValue,
  userDataReady,
  expanded,
}) => {
  const farm = details
  console.log(farm)
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

  const apyd = (
    ((1 +
      ((farm.apr + 365 * farm.tradingFeeRate) * (1 - farm.kogefarmFee)) /
      ((100 * 365 * 24 * 60) / farm.minutesPerCompound)) **
      ((24 * 60) / farm.minutesPerCompound) -
      1) *
    100
  ).toLocaleString(undefined, { maximumFractionDigits: 2 })

  let lpDecimals = 18
  if (farm.token===farm.quoteToken){
    lpDecimals = farm.token.decimals
  }
  return (
    <Container expanded={expanded}>
      <Wrapper>
        <ContainerWrapper>
          <InfoContainer>
          <TagsContainer />
            {isActive && (
              <StakeContainer>
                <StyledLinkExternal href={liquidityurl} color={theme.colors.textSubtle}>
                  {t(`Get ${lpLabel}`, { name: lpLabel })}
                </StyledLinkExternal>
              </StakeContainer>
            )}
            <StyledLinkExternal href={bsc} color={theme.colors.textSubtle}>{t('View Contract')}</StyledLinkExternal>
            <StyledLinkExternal href={info} color={theme.colors.textSubtle}>{t('Platform')}</StyledLinkExternal>
            <TagsContainer />
          </InfoContainer>

          <ValueContainer>
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

        { isDesktop ? (
          <ContainerWrapper>
            <InfoWrapper>
              <Info>
                <Staked>
                  <Title>Total User&apos;s LPs Staked</Title>
                  <Stat>{(new BigNumber(farm.userData.stakedBalance).dividedBy(new BigNumber(10**lpDecimals))).toNumber().toLocaleString(undefined, { maximumFractionDigits:  lpDecimals})}</Stat>
                  <Text
                    fontSize="10px"
                    textTransform="uppercase"
                    mt="5px"
                  >
                    {farm.lpSymbol}
                  </Text>
                </Staked>
                <APR>
                  <Title>Underlying APR</Title>
                  <Stat>{(farm.apr ?? 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}%</Stat>
                </APR>
                <Return>
                  <Title>Daily Return</Title>
                  <Stat>{apyd}%</Stat>
                </Return>
                <Fee>
                  <Title>Deposit Fee (Third Party)</Title>
                  <Stat>{(farm.depositFee * 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}%</Stat>
                </Fee>
              </Info>
            </InfoWrapper>
          </ContainerWrapper>
        ) : null}

        {isMobile ? <StakedAction {...details} userDataReady={userDataReady} /> : null }
      </Wrapper>
    </Container>
  )
}

export default ActionPanel
