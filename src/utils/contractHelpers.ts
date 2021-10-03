import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  getAddress,
  getCakeVaultAddress,
  getMasterChefAddress,
} from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import GenericJarAbi from 'config/abi/GenericJar.json'
import masterChef from 'config/abi/masterchef.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefV2 from 'config/abi/sousChefV2.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import { SUPPORTED_CHAINS } from 'config/index'


const getContract = (abi: any, address: string, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount(chain)
  if (_web3) {
    return new _web3.eth.Contract(abi as unknown as AbiItem, address)
  }
  return null
}

export const getMasterchefContract = (chain: SUPPORTED_CHAINS, web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), chain, web3)
}


export const getBep20Contract = (address: string, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  return getContract(bep20Abi, address, chain, web3)
}
export const getLpContract = (address: string, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  return getContract(lpTokenAbi, address, chain, web3)
}
export const getJarContract = (address: string, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  return getContract(GenericJarAbi, address, chain, web3)
}

export const getSouschefContract = (id: number, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), chain, web3)
}
export const getSouschefV2Contract = (id: number, chain: SUPPORTED_CHAINS, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  return getContract(sousChefV2, getAddress(config.contractAddress), chain, web3)
}
export const getCakeVaultContract = (chain: SUPPORTED_CHAINS, web3?: Web3) => {
  return getContract(cakeVaultAbi, getCakeVaultAddress(), chain, web3)
}
