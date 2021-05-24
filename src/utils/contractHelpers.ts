import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'

// Addresses
// import {
//  getAddress,
//  getCakeAddress,
// } from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
// import cakeAbi from 'config/abi/cake.json'
// import masterChef from 'config/abi/masterchef.json'
import GenericJarAbi from 'config/abi/GenericJar.json'


const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract(abi as unknown as AbiItem, address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}
export const getLpContract = (address: string, web3?: Web3) => {
  return getContract(lpTokenAbi, address, web3)
}
export const getJarContract = (address: string, web3?: Web3) => {
  return getContract(GenericJarAbi, address, web3)
}
