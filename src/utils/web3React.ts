import { BscConnector } from '@binance-chain/bsc-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { ConnectorNames } from 'components/Pancake'
import { CHAINS, SUPPORTED_CHAINS } from 'config/index'
import Web3 from 'web3'
import { getNodeUrl } from './getRpcUrl'

export const useGetConnectorsByName = (chain: SUPPORTED_CHAINS) => {
  const POLLING_INTERVAL = 12000
  const rpcUrl = getNodeUrl(chain)

  const chainId = CHAINS[chain].numberChainId

  const injected = new InjectedConnector({
    supportedChainIds: [
      CHAINS[SUPPORTED_CHAINS.MATIC].numberChainId,
      CHAINS[SUPPORTED_CHAINS.MOONRIVER].numberChainId,
    ]
  })

  const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl },
    bridge: 'https://pancakeswap.bridge.walletconnect.org/',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
  })

  const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

  const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector,
  }
  return connectorsByName
}

export const getLibrary = (provider): Web3 => {
  return provider
}
