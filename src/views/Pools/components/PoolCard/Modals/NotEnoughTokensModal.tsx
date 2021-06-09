import React from 'react'
import { useTranslation } from 'contexts/Localization'
// import styled from 'styled-components'
import { Modal, Text, Button } from '@pancakeswap/uikit'
import { BASE_EXCHANGE_URL } from 'config'
import useTheme from 'hooks/useTheme'
import { Token } from 'config/constants/types'

interface NotEnoughTokensModalProps {
  tokenSymbol: string
  stakingToken: Token
  onDismiss?: () => void
}


const NotEnoughTokensModal: React.FC<NotEnoughTokensModalProps> = ({ tokenSymbol, stakingToken, onDismiss }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  let stakingTokenLink = `${BASE_EXCHANGE_URL}/#/add/0x13748d548D95D78a3c83fe3F32604B4796CFfa23/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270`
  if (stakingToken.coingeico==='kogecoin'){
    stakingTokenLink = `${BASE_EXCHANGE_URL}/#/swap?outputCurrency=${stakingToken.address[process.env.REACT_APP_CHAIN_ID]}`
  }

  return (
    <Modal
      title={t('%symbol% required', { symbol: tokenSymbol })}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      <Text color="failure" bold>
        {t('Insufficient %symbol% balance', { symbol: tokenSymbol })}
      </Text>
      <Text mt="24px">{t('You’ll need %symbol% to stake in this pool!', { symbol: tokenSymbol })}</Text>
      <Button mt="24px" as="a" external href={stakingTokenLink}>
        {t('Get')} {tokenSymbol}
      </Button>
      <Button variant="text" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Modal>
  )
}

export default NotEnoughTokensModal
