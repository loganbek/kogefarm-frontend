import { CHAINS } from 'config/index'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'

export const getAddress = (address: Address): string => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { numberChainId } = CHAINS[useNetworkSwitcher().getCurrentNetwork()]

  return address[numberChainId]
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.krill.address)
}
export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
