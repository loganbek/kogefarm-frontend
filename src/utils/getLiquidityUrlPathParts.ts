import { CHAINS } from "config/index"
import useNetworkSwitcher from "hooks/useNetworkSwitcher"
// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
// import { getWbnbAddress } from './addressHelpers'


const getLiquidityUrlPathParts = ({ quoteTokenAddress, tokenAddress }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const chainId = CHAINS[useNetworkSwitcher().getCurrentNetwork()].numberChainId
  //  const wBNBAddressString = getWbnbAddress()
  const quoteTokenAddressString: string = quoteTokenAddress ? quoteTokenAddress[chainId] : null
  const tokenAddressString: string = tokenAddress ? tokenAddress[chainId] : null
  const firstPart = quoteTokenAddressString
  const secondPart = tokenAddressString
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
