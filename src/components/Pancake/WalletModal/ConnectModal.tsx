import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../../utils/getExternalLinkProps";
import Flex from '../Box/Flex'
import Box from "../Box/Box";
import Heading from "../Heading/Heading";
import { Button } from "../Button";
import { ModalBody, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
}

const WalletWrapper = styled(Box)`
  padding: 0 32px;
`;

const StyledHeading = styled(Heading)`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 18px;
`;

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const sortedConfig = getPreferredConfig(config);

  return (
    <ModalContainer minWidth="328px">
      <ModalHeader>
        <ModalTitle>
          <StyledHeading>Connect Wallet</StyledHeading>
        </ModalTitle>
      </ModalHeader>
      <ModalBody width={["320px", null, "340px"]}>
        <WalletWrapper py="24px" maxHeight="453px" overflowY="auto">
          <Flex flexDirection="column">
            {sortedConfig.map((wallet) => (
              <Box key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </Box>
            ))}
          </Flex>
        </WalletWrapper>
        <Box p="24px">
          <Button
            variant="outline"
            onClick={onDismiss}
            width="100%"
            {...getExternalLinkProps()}
          >
            Cancel
          </Button>
        </Box>
      </ModalBody>
    </ModalContainer>
  );
};

export default ConnectModal;
