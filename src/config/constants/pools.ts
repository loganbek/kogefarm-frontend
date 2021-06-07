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
      137: '0x1fBe0086499b187715985928C31e1262D8ed7Df9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.27777',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 169,
    pid: 0,
    stakingToken: tokens.kogecoin,
    earningToken: tokens.kogecoin,
    contractAddress: {
      80001: '',
      137: '0x1fBe0086499b187715985928C31e1262D8ed7Df9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.27777',
  },
]

export default pools
