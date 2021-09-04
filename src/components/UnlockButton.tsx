import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from 'components/Pancake'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledButton = styled(Button)`
  font-size: 12px;
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledButton
      onClick={onPresentConnectModal} {...props}
      variant="secondary"
      height="32px"
    >
      {t('Unlock Wallet')}
    </StyledButton>
  )
}

export default UnlockButton
