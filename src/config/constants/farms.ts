import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
/*  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      80001: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      80001: '',
      137: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
*/
  /**
   * All farms below here are from v1 and are to be set to 0x
   */
   {
     pid: 18,
     lpSymbol: 'KogeCoin',
     lpAddresses: {
       80001: '',
       137: '0x13748d548D95D78a3c83fe3F32604B4796CFfa23',
     },
     masterChefAddresses: {
       80001: '',
       137: '0x6275518a63e891b1bC54FEEBBb5333776E32fAbD',
     },
     masterChefPid: 1,
     jarAddresses: {
       80001: '',
       137: '0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657',
     },
     token: tokens.kogecoin,
     quoteToken: tokens.kogecoin,
     rewardPerBlock: 2.8,
     poolWeightDesignate: 10000/20000,
     minutesPerCompound: 1,
     kogefarmFee: 0.00,
     underlyingWebsite: 'https://kogecoin.io',
     platform: 'Koge'
   },

   {
     pid: 113,
     lpSymbol: 'Dino',
     lpAddresses: {
       80001: '',
       137: '0xAa9654BECca45B5BDFA5ac646c939C62b527D394',
     },
     masterChefAddresses: {
       80001: '',
       137: '0x52e7b0C6fB33D3d404b07006b006c8A8D6049C55',
     },
     masterChefPid: 0,
     jarAddresses: {
       80001: '',
       137: '0xbfE130aBd54F202dd7f8C3cdAe7C993fCd703f8a',
     },
     token: tokens.dino,
     quoteToken: tokens.dino,
     rewardToken: tokens.dino,
     rewardPerBlock: 0.1,
     poolWeightDesignate: 1,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     platform: 'Qi Dao'
   },

/*  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      80001: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      137: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },  */
]

export default farms
