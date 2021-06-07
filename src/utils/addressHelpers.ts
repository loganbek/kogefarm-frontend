import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 56
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
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
