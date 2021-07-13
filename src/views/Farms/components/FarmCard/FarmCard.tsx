import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap/uikit'
import { Farm } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL, SUSHI_ADD_LIQUIDITY_URL, DFYN_ADD_LIQUIDITY_URL, WAULT_ADD_LIQUIDITY_URL, APE_ADD_LIQUIDITY_URL, JET_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
// import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apr?: number
  liquidity?: BigNumber
  userValue?: BigNumber
}

const AccentGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

const StyledCardAccent = styled.div`
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`};
  background-size: 400% 400%;
  animation: ${AccentGradient} 2s linear infinite;
  border-radius: 32px;
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -3px;
  left: -1px;
  z-index: -1;
`

const FCard = styled.div<{ isPromotedFarm: boolean }>`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: ${({ theme, isPromotedFarm }) => (isPromotedFarm ? '31px' : theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
//  cakePrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const farmcomment = farm.kogefarmComment? farm.kogefarmComment.toUpperCase(): ''
  const depositFee = farm.depositFee
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  const totalValueFormatted = farm.liquidity
    ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '').split(' ')[0] + farmcomment
//  const earnLabel = farm.dual ? farm.dual.earnLabel : 'CAKE'
  const userValueFormatted = farm.userValue
    ? `$${farm.userValue.toNumber().toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  const farmAPR = farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  let farmAPYNum = ((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(365*24*60/farm.minutesPerCompound) - 1)*100
  if (farmAPYNum>10**18){
    farmAPYNum = Number.POSITIVE_INFINITY
  }
  const farmAPY = farmAPYNum.toLocaleString('en-US', { maximumFractionDigits: 2 })
  const farmAPYD = (((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(24*60/farm.minutesPerCompound) - 1)*100).toLocaleString('en-US', { maximumFractionDigits: 2 })
  const farmAPYDRaw = (((1+(farm.apr)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(24*60/farm.minutesPerCompound) - 1)*100).toLocaleString('en-US', { maximumFractionDigits: 2 })
//  const farmAPYW = (((1+farm.apr*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(24*60*7/farm.minutesPerCompound) - 1)*100).toLocaleString('en-US', { maximumFractionDigits: 2 })

  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  let addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  if (farm.isSushi===true){
    addLiquidityUrl = `${SUSHI_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isDfyn===true){
    addLiquidityUrl = `${DFYN_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isWault===true){
    addLiquidityUrl = `${WAULT_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isApe===true){
    addLiquidityUrl = `${APE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.isJetSwap===true){
    addLiquidityUrl = `${JET_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }
  if (farm.token===farm.quoteToken){
    addLiquidityUrl = `https://quickswap.exchange/#/swap?outputCurrency=${lpAddress}`
    if (farm.isApe===true){
      addLiquidityUrl = `https://app.apeswap.finance/swap?outputCurrency=${lpAddress}`
    }
    if (farm.token.coingeico==='pwings'){
      addLiquidityUrl = `https://polygon-exchange.jetswap.finance/#/swap?outputCurrency=${lpAddress}`
    }
  }
  if (farm.lpSymbol==="PYQ-USDC"){
    addLiquidityUrl = `https://app.polyquity.org/liquidity`
  }
  if (farm.token.coingeico==='curve3pool'){
    addLiquidityUrl = `https://polygon.curve.fi/aave/deposit`
  }
  if (farm.token.coingeico==='iron3pool'){
    addLiquidityUrl = `https://app.iron.finance/swap/pools/is3usd/deposit`
  }
  if (farm.token.coingeico==='atricrypto'){
    addLiquidityUrl = `https://polygon.curve.fi/atricrypto/deposit`
  }
  if (farm.token.coingeico==='btcrenbtc'){
    addLiquidityUrl = `https://polygon.curve.fi/ren/deposit`
  }

  const isPromotedFarm = false

/*  let infoAddr = `https://info.quickswap.exchange/pair/${lpAddress}`
  if (farm.isSushi===true){
    infoAddr = `https://analytics-polygon.sushi.com/pairs/${lpAddress}`
  }
  if (farm.isWault===true){
    infoAddr = `https://polygonscan.com/address/${lpAddress}`
  }
  if (farm.isDfyn===true){
    infoAddr = `https://info.dfyn.network/pair/${lpAddress}`
  }
  if (farm.isApe===true){
    infoAddr = `https://polygon.info.apeswap.finance/pair/${lpAddress}`
  }
  if (farm.token===farm.quoteToken){
    infoAddr = `https://info.quickswap.exchange/address/${lpAddress}`
  } */
  const infoAddr = farm.underlyingWebsite


  return (
    <FCard isPromotedFarm={isPromotedFarm}>
      {isPromotedFarm && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
//        multiplier={farm.multiplier}
        isCommunityFarm={farm.isCommunity}
        isSushiFarm={farm.isSushi}
        isWaultFarm={farm.isWault}
        isApeFarm={farm.isApe}
        isJetSwapFarm={farm.isJetSwap}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{t('APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center', textDecoration: 'line-through' }}>
            {farm.apr ? (
              <>
                {farmAPR}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Text style={{textAlign: 'left'}}>{t('APY')}:</Text>
        <Text bold style={{ display: 'flex', alignItems: 'center' }}>
          {farm.apr ? (
            <>
            {/*  <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} cakePrice={cakePrice} apr={farm.apr} /> */}
              {farmAPY}%
            </>
          ) : (
            <Skeleton height={24} width={80} />
          )}
        </Text>
      </Flex>
{/*      <Flex justifyContent="space-between" alignItems="center">
        <Text style={{textAlign: 'left'}}>{t('Daily')}:</Text>
        <Text bold style={{ display: 'flex', alignItems: 'center' }}>
          {farm.apr ? (
            <>
              {farmAPYD}%
            </>
          ) : (
            <Skeleton height={24} width={80} />
          )}
        </Text>
      </Flex> */}

{/*      <Flex justifyContent="space-between">
        <Text>{t('Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex> */}
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={`https://polygonscan.com/address/${farm.jarAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          infoAddress={infoAddr}
          totalValueFormatted={totalValueFormatted}
          userValueFormatted={userValueFormatted}
          apyD={farmAPYD}
          apyDRaw={farmAPYDRaw}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
          depositFee={depositFee}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
