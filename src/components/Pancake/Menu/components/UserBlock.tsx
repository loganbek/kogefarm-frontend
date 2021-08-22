import React from "react";
import { Tooltip } from 'react-tippy'
import styled from 'styled-components'
import Flex from "../../Flex";
import CopyToClipboard from "../../WalletModal/CopyToClipboard";
import { connectorLocalStorageKey } from "../../WalletModal/config";
import Button from "../../Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import LinkExternal from "../../Link/LinkExternal";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const StyledButton = styled(Button)`
  padding: 0 32px;
`

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 6)}...${account.substring(account.length - 6)}` : null;

  return (
    <div>
      {account ? (
        <Tooltip
          trigger="click"
          interactive
          useContext
          position="bottom-end"
          html={(
            <Tip>
              <Flex mb="32px" flexDirection="column">
                <LinkExternal 
                  small 
                  href={`https://bscscan.com/address/${account}`} 
                  mr="16px"
                >
                  View on BscScan
                </LinkExternal>
                <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
              </Flex>
              <Flex justifyContent="center">
                <Button
                  scale="sm"
                  variant="secondary"
                  onClick={() => {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                  }}
                >
                  Logout
                </Button>
              </Flex>
            </Tip>
          )}
        >
          <Button
            variant="tertiary"
            scale="sm"
          >
            {accountEllipsis}
          </Button>
        </Tooltip>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
