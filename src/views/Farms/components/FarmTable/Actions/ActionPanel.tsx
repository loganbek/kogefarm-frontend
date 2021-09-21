import React from 'react'
import styled, { useTheme, keyframes, css } from 'styled-components'
import numeral from 'numeral'
import { isDesktop, isMobile } from "react-device-detect";
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from 'components/Pancake'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CommunityTag, CoreTag, WaultTag, DualTag, ApeTag, JetSwapTag } from 'components/Tags'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, DFYN_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL, JET_ADD_LIQUIDITY_URL, ELK_ADD_LIQUIDITY_URL, GRAVITY_ADD_LIQUIDITY_URL, FIREBIRD_ADD_LIQUIDITY_URL } from 'config'
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

const Wrapper = styled.div<{ isMobile?: boolean }>`
  display: ${props => props.isMobile ? "flex" : "grid"};
  ${props => props.isMobile ? "" : "grid-template-columns: 25% 75%;"}
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
  padding-left: 15%;
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

const LpAndFiat = styled.div`
  display: grid;
  justify-items: end;
`

const Info = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "staked staked staked"
    "return apr fee";

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

  const maticAddress = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"

  let liquidityurl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'ETH')}`
  if (farm.isSushi === true) {
    liquidityurl = `${SUSHI_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'ETH')}`
  }
  if (farm.isDfyn === true) {
    liquidityurl = `${DFYN_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'MATIC')}`
  }
  if (farm.isWault === true) {
    liquidityurl = `${WAULT_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'MATIC')}`
  }
  if (farm.isApe === true) {
    liquidityurl = `${APE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'ETH')}`
  }
  if (farm.isJetSwap === true) {
    liquidityurl = `${JET_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'MATIC')}`
  }
  if (farm.isElk === true) {
    liquidityurl = `${ELK_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'MATIC')}`
  }
  if (farm.isFirebird === true) {
    liquidityurl = `${FIREBIRD_ADD_LIQUIDITY_URL}/${lpAddress}`
  }
  if (farm.isGravity === true) {
    liquidityurl = `${GRAVITY_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts.replace(maticAddress, 'ETH')}`
  }
  if (farm.token === farm.quoteToken) {
    liquidityurl = `https://quickswap.exchange/#/swap?outputCurrency=${lpAddress}`
    if (farm.isApe === true) {
      liquidityurl = `https://app.apeswap.finance/swap?outputCurrency=${lpAddress}`
    }
    if (farm.isSushi === true) {
      liquidityurl = `https://app.sushi.com/swap?outputCurrency=${lpAddress}`
    }
    if (farm.isGravity === true) {
      liquidityurl = `https://gravityfinance.io/swap?outputCurrency=${lpAddress}`
    }
    if (farm.isJetSwap === true) {
      liquidityurl = `https://polygon-exchange.jetswap.finance/#/swap?outputCurrency=${lpAddress}`
    }
    if (farm.token.coingeico === 'pwings') {
      liquidityurl = `https://polygon-exchange.jetswap.finance/#/swap?outputCurrency=${lpAddress}`
    }
  }
  if (farm.lpSymbol === "PYQ-USDC") {
    liquidityurl = `https://app.polyquity.org/liquidity`
  }
  if (farm.token.coingeico === 'curve3pool') {
    liquidityurl = `https://polygon.curve.fi/aave/deposit`
  }
  if (farm.token.coingeico === 'iron3pool') {
    liquidityurl = `https://app.iron.finance/swap/pools/is3usd/deposit`
  }
  if (farm.token.coingeico === 'iron4pool') {
    liquidityurl = `https://app.iron.finance/swap/pools/isiron/deposit`
  }
  if (farm.token.coingeico === 'atricrypto') {
    liquidityurl = `https://polygon.curve.fi/atricrypto/deposit`
  }
  if (farm.token.coingeico === 'atricrypto2') {
    liquidityurl = `https://polygon.curve.fi/atricrypto2/deposit`
  }
  if (farm.token.coingeico === 'atricrypto3') {
    liquidityurl = `https://polygon.curve.fi/atricrypto3/deposit`
  }
  if (farm.token.coingeico === 'btcrenbtc') {
    liquidityurl = `https://polygon.curve.fi/ren/deposit`
  }
  if (farm.token.coingeico === 'ghst') {
    liquidityurl = `https://aavegotchi.com/stake-polygon`
  }
  if (farm.token.coingeico === 'arcadium') {
    liquidityurl = `https://stadiumarcadium.farm/addliquidity/`
  }

  let userDeposits
  const farmRatio = new BigNumber(farm.jarRatio)
  if (farmRatio > new BigNumber(0)) {
    userDeposits = new BigNumber(farm.userData.stakedBalance)
      .times(farmRatio).div(10 ** 18)
  } else {
    userDeposits = new BigNumber(0)
  }

  const apyd = (
    ((1 +
      ((farm.apr + 365 * farm.tradingFeeRate) * (1 - farm.kogefarmFee)) /
      ((100 * 365 * 24 * 60) / farm.minutesPerCompound)) **
      ((24 * 60) / farm.minutesPerCompound) -
      1) *
    100
  ).toLocaleString(undefined, { maximumFractionDigits: 2 })

  const lpDecimals = farm.token === farm.quoteToken ? farm.token.decimals : 18
  const userValueDecimals = farm.token === farm.quoteToken ? farm.token.decimals : 2

  const depositFee = farm.depositFee ? (farm.depositFee * 100).toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'

  return (
    <Container expanded={expanded}>
      <Wrapper isMobile={isMobile}>
        <ContainerWrapper>
          <ValueContainer>
            <ValueWrapper>
              <Text>{t('APY')}</Text>
              <Apy {...apy} />
            </ValueWrapper>
            <ValueWrapper>
              <Text>{t('Daily return')}</Text>
              <Text>{apyd}%</Text>
            </ValueWrapper>
            <ValueWrapper>
              <Text>{t('Deposit Fee (Third Party)')}</Text>
              <Text>{depositFee}%</Text>
            </ValueWrapper>
            <ValueWrapper>
              <Text>{t('User Staked')}</Text>
              <LpAndFiat>
                <Stat>{(userDeposits.dividedBy(new BigNumber(10 ** lpDecimals))).toNumber().toLocaleString(undefined, { maximumFractionDigits: 4 })} LP</Stat>
                <UserValue {...userValue} />
              </LpAndFiat>
            </ValueWrapper>
            <ValueWrapper>
              <Text>{t('Total Staked')}</Text>
              <Liquidity {...liquidity} />
            </ValueWrapper>
          </ValueContainer>

          {isMobile ? <StakedAction {...details} userDataReady={userDataReady} /> : null}

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

        </ContainerWrapper>

        {isDesktop ? (
          <ContainerWrapper>
            <InfoWrapper>
              <Info>
                <Staked>
                  <Title>My Staked LP Tokens</Title>
                  <Stat>{(userDeposits.dividedBy(new BigNumber(10 ** lpDecimals))).toNumber().toLocaleString(undefined, { maximumFractionDigits: lpDecimals })}</Stat>
                  <Text
                    fontSize="10px"
                    textTransform="uppercase"
                    mt="5px"
                  >
                    {farm.lpSymbol}
                  </Text>
                </Staked>
                <Return>
                  <Title>My Daily Return (If Staked)</Title>
                  <Stat>{apyd}%</Stat>
                </Return>
                <APR>
                  <Title>Source Farm APR</Title>
                  <Stat>{(farm.apr ?? 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}%</Stat>
                </APR>
                <Fee>
                  <Title>Source Farm Deposit Fee</Title>
                  <Stat>{depositFee}%</Stat>
                </Fee>
              </Info>
            </InfoWrapper>
          </ContainerWrapper>
        ) : null}

      </Wrapper>
    </Container>
  )
}

export default React.memo(ActionPanel)
