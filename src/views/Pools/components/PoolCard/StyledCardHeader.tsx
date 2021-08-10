import React from 'react'
import { CardHeader, Heading, Text, Flex } from 'components/Pancake'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string; isPromotedPool?: boolean }>`
  border-radius: 8px 8px 0 0;
  background: #E0E0E0;;
`

const StyledText = styled(Text)`
  font-weight: 600;
`

const StyledCardHeader: React.FC<{
  earningTokenSymbol: string
  stakingTokenSymbol: string
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
  isPromotedPool?: boolean
}> = ({
  earningTokenSymbol,
  stakingTokenSymbol,
  isFinished = false,
  isAutoVault = false,
  isPromotedPool = false,
}) => {
  const { t } = useTranslation()
/*  const poolImageSrc = isAutoVault
    ? `cake-cakevault.svg`
    : `${earningTokenSymbol}-${stakingTokenSymbol}.svg`.toLocaleLowerCase() */
  const isCakePool = earningTokenSymbol === 'CAKE' && stakingTokenSymbol === 'CAKE'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return t('Manual')
    }
    // all other pools
    return t('')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return t('Earn CAKE, stake CAKE')
    }
    return (t(''))
  }

  return (
    <Wrapper isPromotedPool={isPromotedPool} isFinished={isFinished}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <StyledText>
            {`${getHeadingPrefix()} ${stakingTokenSymbol}`}
          </StyledText>
          <Text color={isFinished ? 'textDisabled' : 'textSubtle'}><span>&nbsp;&nbsp;</span>{getSubHeading()}</Text>
        </Flex>
{/*        <Image src={`/images/pools/${poolImageSrc}`} alt={stakingTokenSymbol} width={64} height={64} /> */}
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
