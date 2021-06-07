import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    pid: 0,
    stakingToken: tokens.kogecoinMatic,
    earningToken: tokens.kogecoin,
    contractAddress: {
      80001: '',
      137: '0xEb13036d00994559630405E688EA120E00f41Fe6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.3',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 169,
    pid: 1,
    stakingToken: tokens.kogecoin,
    earningToken: tokens.kogecoin,
    contractAddress: {
      80001: '',
      137: '0xEb13036d00994559630405E688EA120E00f41Fe6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.3',
  },
]

export default pools
