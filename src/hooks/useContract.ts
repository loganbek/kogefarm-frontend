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
import { SUPPORTED_CHAINS } from 'config/index'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string, chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getBep20Contract(address, chain, web3), [address, web3, chain])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
// export const useCake = () => {
//  const web3 = useWeb3()
//  return useMemo(() => getCakeContract(web3), [web3])
// }

// Jar

export const useJar = (address: string, chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getJarContract(address, chain, web3), [address, web3, chain])
}


// Sous
export const useSousChef = (id, chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getSouschefContract(id, chain, web3), [id, web3, chain])
}

export const useSousChefV2 = (id, chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getSouschefV2Contract(id, chain, web3), [id, web3, chain])
}

export const useCakeVaultContract = (chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getCakeVaultContract(chain, web3), [web3, chain])
}

export const useMasterchef = (chain: SUPPORTED_CHAINS) => {
  const web3 = useWeb3(chain)
  return useMemo(() => getMasterchefContract(chain, web3), [web3, chain])
}
