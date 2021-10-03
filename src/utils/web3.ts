import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import { SUPPORTED_CHAINS } from 'config/index'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'
import { getNodeUrl } from './getRpcUrl'


const getWeb3NoAccount = (chain?: SUPPORTED_CHAINS) => {
  const { getCurrentNetwork } = useNetworkSwitcher()

  const RPC_URL = getNodeUrl(chain ?? getCurrentNetwork())
  const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
  const web3NoAccount = new Web3(httpProvider)

  return web3NoAccount
}

export { getWeb3NoAccount }
export default getWeb3NoAccount
