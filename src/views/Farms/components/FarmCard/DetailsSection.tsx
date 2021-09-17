import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from 'components/Pancake'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  userValueFormatted?: string
  apyD?: string
  apyDRaw?: string
  lpLabel?: string
  addLiquidityUrl?: string
  depositFee?: number
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  userValueFormatted,
  apyD,
  apyDRaw,
  lpLabel,
  addLiquidityUrl,
  depositFee,
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
      <Flex justifyContent="space-between">
        <Text>{t('Daily LP Return')}:</Text>
        <Text>{apyD}%</Text>
      </Flex>
      {depositFee && (<Flex justifyContent="space-between">
        <Text>{t('Deposit Fee (Third Party)')}:</Text>
        <Text>{depositFee*100}%</Text>
      </Flex>)}
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>{t(`Get ${lpLabel}`, { name: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal href={bscScanAddress}>{t('View Contract')}</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>{t('Platform')}</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
