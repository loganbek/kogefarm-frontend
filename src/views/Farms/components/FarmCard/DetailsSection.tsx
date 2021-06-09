import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from '@pancakeswap/uikit'

export interface ExpandableSectionProps {
  maticExplorerAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  userValueFormatted?: string
  apyD?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  maticExplorerAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  userValueFormatted,
  apyD,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t('User Staked')}:</Text>
        <Text>{userValueFormatted}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>{t('Total Staked')}:</Text>
        <Text>{totalValueFormatted}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>{t('Daily Return')}:</Text>
        <Text>{apyD}%</Text>
      </Flex>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>{t(`Get ${lpLabel}`, { name: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal href={maticExplorerAddress}>{t('View Contract')}</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
