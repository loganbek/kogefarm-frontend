import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
//  getCakeContract,
  getJarContract,
  getSouschefContract,
  getSouschefV2Contract,
  getCakeVaultContract,
  getMasterchefContract
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
// export const useCake = () => {
//  const web3 = useWeb3()
//  return useMemo(() => getCakeContract(web3), [web3])
// }

// Jar

export const useJar = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getJarContract(address, web3), [address, web3])
}


// Sous
export const useSousChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefContract(id, web3), [id, web3])
}

export const useSousChefV2 = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefV2Contract(id, web3), [id, web3])
}

export const useCakeVaultContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeVaultContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}
