import BigNumber from 'bignumber.js'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'
import { getCakeVaultContract } from 'utils/contractHelpers'

// eslint-disable-next-line react-hooks/rules-of-hooks
const cakeVaultContract = getCakeVaultContract(useNetworkSwitcher().getCurrentNetwork())

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await cakeVaultContract.methods.userInfo(account).call()
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime as string,
      lastUserActionTime: userContractResponse.lastUserActionTime as string,
      cakeAtLastUserAction: new BigNumber(userContractResponse.cakeAtLastUserAction).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      cakeAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
