import React from 'react'
import { Menu as UikitMenu } from 'components/Pancake'
// import { Menu as UikitMenu } from '../../pancake-uikit-fork/packages/pancake-uikit/src/widgets/menu'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'
import { config } from './config'

const Menu = (props) => {
  const { getCurrentNetwork } = useNetworkSwitcher()
  const { account } = useWeb3React()
  const { login, logout } = useAuth(getCurrentNetwork())
  const { isDark, toggleTheme } = useTheme()
  //  const { profile } = useProfile()
  const { currentLanguage, setLanguage } = useTranslation()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      links={config}
      //      profile={{
      //        username: profile?.username,
      //        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //        profileLink: '/profile',
      //        noProfileLink: '/profile',
      //        showPip: !profile?.username,
      //      }}
      {...props}
    />
  )
}

export default Menu
