import React from 'react'
import { CardHeader, Text, Flex } from 'components/Pancake'
import styled from 'styled-components'
import { Pool } from 'state/types'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import CardActions from './CardActions'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string; isPromotedPool?: boolean }>`
  border-radius: 8px 8px 0 0;
  background: ${({ theme }) => theme.colors.rowHeader};
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
  pool?: Pool
  stakedBalance?: any
  account?: string
}> = ({
  earningTokenSymbol,
  stakingTokenSymbol,
  isFinished = false,
  isAutoVault = false,
  isPromotedPool = false,
  account,
  pool,
  stakedBalance,
}) => {
  const { t } = useTranslation()
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

  return (
    <Wrapper isPromotedPool={isPromotedPool} isFinished={isFinished}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <StyledText>
            {`${getHeadingPrefix()} ${stakingTokenSymbol}`}
          </StyledText>
          {!account ? (
            <UnlockButton />
          ) : (
            <CardActions
              pool={pool} 
              stakedBalance={stakedBalance} 
            />
          )}
          {/* <Text color={isFinished ? 'textDisabled' : 'textSubtle'}><span>&nbsp;&nbsp;</span>{getSubHeading()}</Text> */}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
