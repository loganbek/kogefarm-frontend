import React, { useState, useRef } from 'react'
import { Tooltip } from 'react-tippy'
import { CardHeader, Text, Flex, Button } from 'components/Pancake'
import styled from 'styled-components'
import { Pool } from 'state/types'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import useOutsideAlerter from 'hooks/useOutsideClickDetection'
import CardActions from './CardActions'

const Wrapper = styled(CardHeader) <{ isFinished?: boolean; background?: string; isPromotedPool?: boolean }>`
  border-radius: 8px 8px 0 0;
  background: ${({ theme }) => theme.colors.rowHeader};
`

const StyledText = styled(Text)`
  font-weight: 600;
  flex: 1;
`

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 340px;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
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
    const [open, setOpen] = useState(false)
    const toolTipRef = useRef()


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

    const handleOpen = () => setOpen(!open)
    // Close the modal if clicked outside
    useOutsideAlerter(toolTipRef, handleOpen, open)

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
              <Tooltip
                open={open}
                trigger="click"
                interactive
                useContext
                position="bottom-end"
                html={(
                  <Tip ref={toolTipRef}>
                    <CardActions
                      pool={pool}
                      stakedBalance={stakedBalance}
                      handleOpen={handleOpen}
                    />
                  </Tip>
                )}
              >
                <Button
                  variant="tertiary"
                  scale="sm"
                  onClick={() => setOpen(true)}
                >
                  <Text
                    fontWeight="bold"
                    fontSize="12px"
                  >
                    Stake/Harvest
                  </Text>
                </Button>
              </Tooltip>
            )}
            {/* <Text color={isFinished ? 'textDisabled' : 'textSubtle'}><span>&nbsp;&nbsp;</span>{getSubHeading()}</Text> */}
          </Flex>
        </Flex>
      </Wrapper>
    )
  }

export default StyledCardHeader
