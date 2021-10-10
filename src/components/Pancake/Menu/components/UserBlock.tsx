import NetworkSwitcher from "components/NetworkSwitcher";
import { Text } from "components/Pancake";
import useNetworkSwitcher from "hooks/useNetworkSwitcher";
import React from "react";
import { isMobile } from "react-device-detect";
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import { setupNetwork } from "utils/wallet";
import Button from "../../Button/Button";
import Flex from "../../Flex";
import BinanceChain from "../../Svg/Icons/BinanceChain";
import Coin98 from "../../Svg/Icons/Coin98";
import MathWallet from "../../Svg/Icons/MathWallet";
import Metamask from "../../Svg/Icons/Metamask";
import SafePal from "../../Svg/Icons/SafePal";
import TokenPocket from "../../Svg/Icons/TokenPocket";
import TrustWallet from "../../Svg/Icons/TrustWallet";
import WalletConnect from "../../Svg/Icons/WalletConnect";
import { useWalletModal } from "../../WalletModal";
import { connectorLocalStorageKey, walletLocalStorageKey } from "../../WalletModal/config";
import CopyToClipboard from "../../WalletModal/CopyToClipboard";
import { Login } from "../../WalletModal/types";



interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

type IconWrapperProps = {
  bg: string;
}

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${props => props.bg};
`;

const UserBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  grid-gap: 12px;
  align-items: center;
`

const walletMap = {
  Metamask: {
    component: Metamask,
    bg: 'rgba(245, 132, 31, 0.2)'
  },
  WalletConnect: {
    component: WalletConnect,
    bg: 'rgba(59, 153, 252, 0.2)'
  },
  'Trust Wallet': {
    component: TrustWallet,
    bg: 'rgba(51, 117, 187, 0.2)'
  },
  MathWallet: {
    component: MathWallet,
    bg: 'rgba(0, 0, 0, 0.2)'
  },
  TokenPocket: {
    component: TokenPocket,
    bg: 'rgba(0, 166, 242, 0.2)'
  },
  BinanceChain: {
    component: BinanceChain,
    bg: 'rgba(240, 185, 11, 0.2)'
  },
  SafePal: {
    component: SafePal,
    bg: 'rgba(0, 0, 0, 0.2)'
  },
  Coin98: {
    component: Coin98,
    bg: 'rgba(223, 190, 70, 0.2)'
  },
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : null;
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const wallet = walletMap[preferredWalletName]
  const { getCurrentNetwork } = useNetworkSwitcher()

  return (
    <UserBlockContainer style={isMobile ? { marginLeft: 15 } : {}}>
      <NetworkSwitcher />
      {account ? (
        <Tooltip
          trigger="click"
          interactive
          useContext
          position="bottom-end"
          html={(
            <Tip>
              <Flex mb="32px" flexDirection="column">
                <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
              </Flex>
              <Flex justifyContent="center">
                <Button
                  scale="sm"
                  variant="danger"
                  onClick={() => {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                  }}
                >
                  Disconnect Wallet
                </Button>
              </Flex>
            </Tip>
          )}
        >
          <Button
            variant="tertiary"
            scale="sm"
          >
            <IconWrapper bg={wallet.bg}>
              {wallet.component()}
            </IconWrapper>
            <Text
              fontWeight="bold"
              fontSize="12px"
            >
              {accountEllipsis}
            </Text>
          </Button>
        </Tooltip>
      ) : (
        <Button
          scale="sm"
          onClick={async () => {
            await setupNetwork(getCurrentNetwork());
            onPresentConnectModal();
          }}
        >
          Connect wallet
        </Button>
      )}
    </UserBlockContainer>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
