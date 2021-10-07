
import { ChainInterface, CHAINS, SUPPORTED_CHAINS } from 'config/index'
import { getNodeUrl } from './getRpcUrl'

// Set of helper functions to facilitate wallet setup

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chain: SUPPORTED_CHAINS) => {
  const provider = (window as WindowChain).ethereum
  if (provider) {
    const getChainInfo = (): ChainInterface => {
      const chainInfo = { ...CHAINS[chain] }
      delete chainInfo?.numberChainId
      delete chainInfo?.farms
      delete chainInfo?.chainNameAbbr
      delete chainInfo?.logoUrl
      return chainInfo
    }

    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [getChainInfo()],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the Matic network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string,
) => {
  const tokenAdded = await (window as WindowChain).ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  })

  return tokenAdded
}
