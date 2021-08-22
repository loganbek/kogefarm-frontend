import React from 'react'
import { Button, useWalletModal } from 'components/Pancake'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button
      onClick={onPresentConnectModal} {...props}
      variant="secondary"
      height="32px"
    >
      {t('Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
