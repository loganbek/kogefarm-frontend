import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Text from "../Text/Text";
import MoreHorizontal from "../Svg/Icons/MoreHorizontal";
import { ButtonProps } from "../Button";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

type IconWrapperProps = {
  bg: string;
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text" })`
  background-color: ${({ theme }) => theme.colors.tertiary};
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 8px;
  justify-content: flex-start;
  padding: 6px 20px;
`;

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

export const MoreWalletCard: React.FC<ButtonProps> = (props) => {
  return (
    <WalletButton variant="tertiary" {...props}>
      <MoreHorizontal width="40px" mb="8px" color="textSubtle" />
      <Text>More</Text>
    </WalletButton>
  );
};

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon, bg } = walletConfig;

  return (
    <WalletButton
      variant="tertiary"
      onClick={() => {
        // @ts-ignore
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect);
        } else {
          login(walletConfig.connectorId);
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <IconWrapper bg={bg}>
        <Icon width="16px" />
      </IconWrapper>
      <Text>{title}</Text>
    </WalletButton>
  );
};

export default WalletCard;
