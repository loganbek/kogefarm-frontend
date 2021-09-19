import React from 'react'
import styled from 'styled-components'
// import { Tag, Flex, Heading, Image } from 'components/Pancake'
import { Flex, Heading, Image } from 'components/Pancake'
import { CommunityTag, CoreTag, SushiTag, WaultTag, DfynTag, ApeTag, JetSwapTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
//  multiplier?: string
  isCommunityFarm?: boolean
  isSushiFarm?: boolean
  isDfynFarm?: boolean
  isWaultFarm?: boolean
  isApeFarm?: boolean
  isJetSwapFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

// const MultiplierTag = styled(Tag)`
//  margin-left: 4px;
// `

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
//  multiplier,
  isCommunityFarm,
  isSushiFarm,
  isDfynFarm,
  isWaultFarm,
  isApeFarm,
  isJetSwapFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        {/* <Flex justifyContent="center"> */}
        {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
        <Wrapper marginTop="6px">
        {isSushiFarm && <SushiTag />}
        {isWaultFarm && <WaultTag />}
        {isDfynFarm && <DfynTag />}
        {isApeFarm && <ApeTag />}
        {isJetSwapFarm && <JetSwapTag />}
        </Wrapper>
{/*          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag> */}
        {/* </Flex> */}
      </Flex>
    </Wrapper>
  )
}

export default React.memo(CardHeading)
