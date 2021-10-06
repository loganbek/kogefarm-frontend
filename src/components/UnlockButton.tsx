import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from 'components/Pancake'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'

const StyledButton = styled(Button)`
  font-size: 12px;
`

const UnlockButton = (props) => {
  const { getCurrentNetwork } = useNetworkSwitcher()

  const { t } = useTranslation()
  const { login, logout } = useAuth(getCurrentNetwork())
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
