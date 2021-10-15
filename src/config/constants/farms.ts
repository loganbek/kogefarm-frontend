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
  /*
  {
    pid: 1001,
    lpSymbol: 'MAI(miMatic)-USDC',
    lpAddresses: {
      80001: '',
      137: '0x160532D2536175d65C03B97b0630A9802c274daD',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x60B5fC673fb40048811DD7C7A6b7f42d20dF30f4',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.qidao,
    rewardPerBlock: 3,
    poolWeightDesignate: 125/375,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.005,
    underlyingWebsite: 'https://mai.finance',
    kogefarmComment: ' (Qi)',
    platform: 'Qi Dao'
  },
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
    poolWeightDesignate: 10000 / 20000,
    minutesPerCompound: 1,
    kogefarmFee: 0.00,
    underlyingWebsite: 'https://kogecoin.io',
    platform: 'KogeFarm'
  },

  {
    pid: 63,
    lpSymbol: 'DAI-USDC-USDT',
    lpAddresses: {
      80001: '',
      137: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x19793B454D3AfC7b454F206Ffe95aDE26cA6912c',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x4a93D6b394Da4c1e6e436e9370E5DF08A45377a8',
    },
    token: tokens.curve3pool,
    quoteToken: tokens.curve3pool,
    rewardToken1: tokens.matic,
    rewardToken2: tokens.crv,
    rewardPerBlock1: 0.625, // 0.625
    rewardPerBlock2: 0.783, // 0.158
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
    platform: 'Curve'
  },
  /*
  {
    pid: 77,
    lpSymbol: 'atricrypto',
    lpAddresses: {
      80001: '',
      137: '0x8096ac61db23291252574D49f036f0f9ed8ab390',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb0a366b987d77b5eD5803cBd95C80bB6DEaB48C0',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x7a54BeCc6e4898249F4B4573Ea904F75Cbb17e2F',
    },
    token: tokens.atricrypto,
    quoteToken: tokens.atricrypto,
    rewardToken1: tokens.matic,
    rewardToken2: tokens.crv,
    rewardPerBlock1: 0, // 0.4575
    rewardPerBlock2: 0, // 0.2901
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
    platform: 'Curve',
    multiplier: '0X'
  },
  {
    pid: 166,
    lpSymbol: 'atricrypto2',
    lpAddresses: {
      80001: '',
      137: '0xbece5d20A8a104c54183CC316C8286E3F00ffC71',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9bd996Db02b3f271c6533235D452a56bc2Cd195a',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x2584B6211f054E5DcF8a708e60875b9BbA45A32b',
    },
    token: tokens.atricrypto2,
    quoteToken: tokens.atricrypto2,
    rewardToken1: tokens.matic,
    rewardToken2: tokens.crv,
    rewardPerBlock1: 0, // 0.4575
    rewardPerBlock2: 0, // 0.2899
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
    platform: 'Curve',
    multiplier: '0X'
  },
  */
  {
    pid: 182,
    lpSymbol: 'atricrypto3',
    lpAddresses: {
      80001: '',
      137: '0xdAD97F7713Ae9437fa9249920eC8507e5FbB23d3',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x3B6B158A76fd8ccc297538F454ce7B4787778c7C',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x8402c67fC92691c745E0Bbbe4989eB07Bc02c335',
    },
    token: tokens.atricrypto3,
    quoteToken: tokens.atricrypto3,
    rewardToken1: tokens.matic,
    rewardToken2: tokens.crv,
    rewardPerBlock1: 0.5105, // 0.5105
    rewardPerBlock2: 0.1783, // 0.171
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
    platform: 'Curve'
  },


  {
    pid: 78,
    lpSymbol: 'BTC-renBTC',
    lpAddresses: {
      80001: '',
      137: '0xf8a57c1d3b9629b77b6726a042ca48990A84Fb49',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xffbACcE0CC7C19d46132f1258FC16CF6871D153c',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x69aAF33Cd4bd6Cbd3Ef275f8Ddc3342e0365F083',
    },
    token: tokens.btcrenbtc,
    quoteToken: tokens.btcrenbtc,
    rewardToken1: tokens.matic,
    rewardToken2: tokens.crv,
    rewardPerBlock1: 0.0485, // 0.0485
    rewardPerBlock2: 0.0258, //
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
    platform: 'Curve'
  },

  {
    pid: -1,
    lpSymbol: 'SAGE-KOGE',
    lpAddresses: {
      137: '0x51A08a8D4A636A978181Ec03a88eb5aCFB4dD40e',
    },
    masterChefAddresses: {
      137: '0x0451b4893e4a77E7Eec3B25E816ed7FFeA1EBA68',
    },
    masterChefPid: 25,
    jarAddresses: {
      137: '0x4792b5943a05fc6AF3B20B5F1D1d7dDe33C42980',
    },
    token: tokens.kogecoin,
    quoteToken: tokens.sage,
    rewardToken: tokens.sage,
    rewardPerBlock: 0.007, // Fix reward block time
    poolWeightDesignate: 2500 / 51500,
    minutesPerCompound: 20,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polysage.finance/',
    platform: 'Polysage',
    kogefarmComment: ' (Sage)',
  },

  {
    pid: -2,
    lpSymbol: 'SAGE-WMATIC',
    lpAddresses: {
      137: '0x70c096187F8a9ac03E34a0e7ed41bCd516878158',
    },
    masterChefAddresses: {
      137: '0x0451b4893e4a77E7Eec3B25E816ed7FFeA1EBA68',
    },
    masterChefPid: 2,
    jarAddresses: {
      137: '0x99dE9f6ACc587726FE72AC8F6E2b4a6563c98Af9',
    },
    token: tokens.matic,
    quoteToken: tokens.sage,
    rewardToken: tokens.sage,
    rewardPerBlock: 0.007, // Fix reward block time
    poolWeightDesignate: 10000 / 51500,
    minutesPerCompound: 20,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polysage.finance/',
    platform: 'Polysage',
    kogefarmComment: ' (Sage)',
  },

  {
    pid: -3,
    lpSymbol: 'SAGE-USDC',
    lpAddresses: {
      137: '0x62F089467e22de4bc1FB5EE605eDe7e782b76B29',
    },
    masterChefAddresses: {
      137: '0x0451b4893e4a77E7Eec3B25E816ed7FFeA1EBA68',
    },
    masterChefPid: 2,
    jarAddresses: {
      137: '0xBF773f00C3aE7B1eE9641c7e1cF14FdDCDC0CEBb',
    },
    token: tokens.usdc,
    quoteToken: tokens.sage,
    rewardToken: tokens.sage,
    rewardPerBlock: 0.007, // Fix reward block time
    poolWeightDesignate: 10000 / 51500,
    minutesPerCompound: 20,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polysage.finance/',
    platform: 'Polysage',
    kogefarmComment: ' (Sage)',
  },

  {
    pid: 253,
    lpSymbol: 'pBrew',
    lpAddresses: {
      80001: '',
      137: '0xb5106A3277718eCaD2F20aB6b86Ce0Fee7A21F09',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x82d007ffcd3DCCB60b461085Ecd11Fb5812A7335',
    },
    token: tokens.pbrew,
    quoteToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 1000 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap'
  },

  {
    pid: 254,
    lpSymbol: 'pBrew-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x723e866989Cacc8EFC346e1DCf5a9D73572bCFc8',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x092b0a3e0d7b17E837a2ae8664885406D06bcB99',
    },
    token: tokens.pbrew,
    quoteToken: tokens.usdc,
    rewardPerBlock: 15,
    poolWeightDesignate: 2000 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap'
  },

  {
    pid: 256,
    lpSymbol: 'pBrew-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x4f03233c742Ea20e73b46d5E33242b7770274ab8',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x885B1248D36fB83E824AD49eA637Ea7998C0Ca54',
    },
    token: tokens.pbrew,
    quoteToken: tokens.matic,
    rewardPerBlock: 15,
    poolWeightDesignate: 3000 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },


  {
    pid: 267,
    lpSymbol: 'pBrew-Paw LP',
    lpAddresses: {
      80001: '',
      137: '0xE439b2eE0F4C9b61AE89c57423cabDb35895Ff45',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x2Cb2c97F28cC58de6bD3d379919dD66Ba1801c65',
    },
    token: tokens.pbrew,
    quoteToken: tokens.paw,
    rewardPerBlock: 20,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
  },


  {
    pid: 270,
    lpSymbol: 'pBrew-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x3EF3a87d745FABCAc255E9352Ea402d20F922C1C',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 18,
    jarAddresses: {
      80001: '',
      137: '0x9A7D67a685251567B0AEe4CA08402A1A9f8a1D05',
    },
    token: tokens.pbrew,
    quoteToken: tokens.eth,
    rewardPerBlock: 15,
    poolWeightDesignate: 500 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
  },

  {
    pid: 255,
    lpSymbol: 'USDC-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xBB0dbC0e2B6fBeF902BC046ECFC2D664658BaafC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xA0be41bF0454d1CDd4F19CDDC5A23A1D254722ed',
    },
    token: tokens.usdc,
    quoteToken: tokens.matic,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },


  {
    pid: 257,
    lpSymbol: 'ETH-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x64ac1107923413B6Faf0168e2063c1D4cB01bc9b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0xA6B3647DeCdefB4CE5D855250517f5EaE462F617',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 200 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 258,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0x815c2D1894Daf25935fa909bE35Ee1Fed67b2B97',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0x66F483df4aE87991539B042E8320Ac21dD33A677',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 259,
    lpSymbol: 'USDC-Eth LP',
    lpAddresses: {
      80001: '',
      137: '0x93054D6e998294097e9676D8AF1c26DB28C40652',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0xaE3e4292705e5052aCA9054B4003421F717A521C',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 260,
    lpSymbol: 'Brew-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x248C328b1048f9B6e7e00D61a02E9cA3F8c2bf50',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0xB062BB2dC24FF6B764a9Cd32973674268bB8dfad',
    },
    token: tokens.brew,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 1800 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 261,
    lpSymbol: 'Mocha-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x79A73a8370fA09ff363d8ee1ebB5CE0A9b6085B9',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x453f0CdBE6cB2C56ac38A171Ff80d41981f9f149',
    },
    token: tokens.mocha,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 1800 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 262,
    lpSymbol: 'LINK-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x436803355d26943DD0BC9826D39F9079199a890a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0xA7BEFC58c2e14e8f22E5566E49c05a7e7E6F054F',
    },
    token: tokens.link,
    quoteToken: tokens.eth,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 263,
    lpSymbol: 'AAVE-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x80F93221e875D14aeDdFdFC778Ca755Ab3562ce3',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0xfAa6Ca9A5FED9cAEF91711283d59F0EebE782a23',
    },
    token: tokens.aave,
    quoteToken: tokens.eth,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 264,
    lpSymbol: 'BTC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x5356D0F2E8B22FF6133e11762600984d819b15d1',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0x5E0F3303218a3665a2707a1D01EDEe78Abe9F3D6',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 265,
    lpSymbol: 'UST-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xFCcabD913DF5a17721c30bF23fEB7eA865422f45',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0x4C389275c52b2A2b07E444cf0223744668A54b52',
    },
    token: tokens.ust,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 268,
    lpSymbol: 'Btc-RenBtc LP',
    lpAddresses: {
      80001: '',
      137: '0x4fd19e59A1041e82aCB3Ecc6773EE99913076868',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0xBa1998aD991DDC36f9f927764d0950F10654cbE7',
    },
    token: tokens.renbtc,
    quoteToken: tokens.btc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },

  {
    pid: 269,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x7f4cdeA583b6c4dd3241fD6618236FF1fE57f549',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      137: '0xAD367134f993D8C2d62A1255FE1252A18d5C78ba',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 50 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
    kogefarmComment: ' (pBrew)'
  },


  {
    pid: 271,
    lpSymbol: 'Eth-Quick LP',
    lpAddresses: {
      80001: '',
      137: '0x6C6aC1C806379877b6a4ea236b47890b9d195aE4',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xca2DeAc853225f5a4dfC809Ae0B7c6e39104fCe5',
    },
    masterChefPid: 19,
    jarAddresses: {
      80001: '',
      137: '0x2E084932ECf2df9ad7841E7838Dd39f47Ea4e695',
    },
    token: tokens.quick,
    quoteToken: tokens.eth,
    rewardToken: tokens.pbrew,
    rewardPerBlock: 15,
    poolWeightDesignate: 100 / 11520,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.cafeswap.finance/farms',
    isCafeSwap: true,
    platform: 'CafeSwap',
  },

  {
    pid: 272,
    lpSymbol: 'Beta',
    lpAddresses: {
      80001: '',
      137: '0xaC3090B7042FCA2cDBF233022e4a9823a032600c',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x967e9A7A23E68cc6A0e8b98db8C079f133580760',
    },
    token: tokens.beta,
    quoteToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 700 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta'
  },

  {
    pid: 273,
    lpSymbol: 'Alpha',
    lpAddresses: {
      80001: '',
      137: '0x0B048D6e01a6b9002C291060bF2179938fd8264c',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x9abF2f2acBce703Eaca4430F7E44Ab9098b60C48',
    },
    token: tokens.alpha,
    quoteToken: tokens.alpha,
    rewardToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 200 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta',
    isJetSwap: true
  },

  {
    pid: 274,
    lpSymbol: 'Spade',
    lpAddresses: {
      80001: '',
      137: '0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x720726a3546B1f9CF145093bcdc293E149e2e07F',
    },
    token: tokens.spade,
    quoteToken: tokens.spade,
    rewardToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 150 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta'
  },

  {
    pid: 275,
    lpSymbol: 'Beta-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xa305A860BC0B2255dC10340E98190a6E8992b967',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x57bc21ff1236A3fDE7164FCe75c97E3e0714CCB5',
    },
    token: tokens.beta,
    quoteToken: tokens.usdc,
    rewardToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 2000 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta'
  },

  {
    pid: 276,
    lpSymbol: 'Beta-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x2F2C4A52616663D15E3fACe26Db6305AFe549EDc',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0x0DCc3Cd939e347dAaaA5b5729E6A2DAf52E4F402',
    },
    token: tokens.beta,
    quoteToken: tokens.matic,
    rewardToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 800 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta'
  },

  {
    pid: 277,
    lpSymbol: 'Alpha-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x944a8B12D898E878F92cfC18eee5E6f3f7e2E70d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0xe47b2E9c02EF23B91cdfc1ADbfA9bBb4372d421B',
    },
    token: tokens.alpha,
    quoteToken: tokens.usdc,
    rewardToken: tokens.beta,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 300 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    isJetSwap: true,
    platform: 'PolyBeta'
  },

  {
    pid: 278,
    lpSymbol: 'Beta-KogeCoin LP',
    lpAddresses: {
      80001: '',
      137: '0x83B6f8B40AA5FE76B2bbA0dF5073112785Bd7f49',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0xEab5DAC8E6E3da7679b2a01FCD17DBE1Ed519904',
    },
    token: tokens.beta,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 700 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    platform: 'PolyBeta'
  },

  {
    pid: 279,
    lpSymbol: 'Beta-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xeB4EDB0a3802FFb6Fa7F0a9635a112dcB1774B03',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9581EA83B4BCd5F2c5f1705382FBd80a11E57DcD',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x1ddE2a134E4dE3D0c85bb3f0816f343B9a861B64',
    },
    token: tokens.beta,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.0131,
    poolWeightDesignate: 2640 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polybeta.finance/',
    isJetSwap: true,
    platform: 'PolyBeta',
    kogefarmComment: ' (JetSwap)'
  },

  {
    pid: 266,
    lpSymbol: 'CRV-DFYN',
    lpAddresses: {
      80001: '',
      137: '0x4Ea3e2cfC39FA51Df85ebcfa366d7f0eED448a1C',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xc7A399EC7Cfe5e1B728cACD742637c4e6F06C3D8',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x51AC169E6139E3bebaf8D51A8867b921a77E9d99',
    },
    token: tokens.dfyn,
    quoteToken: tokens.crv,
    rewardPerBlock: 0.023148148148148148 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isDfyn: true,
    underlyingWebsite: 'https://exchange.dfyn.network/#/eco-farms',
    platform: 'DFYN'
  },


  {
    pid: 198,
    lpSymbol: 'MAI(miMatic)-USDT',
    lpAddresses: {
      80001: '',
      137: '0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xf036557fDD98485D34ae8B7D8111De2624AEAD1F',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x1c6f6D77639281DC990A7743231743C526101e42',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdt,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 245,
    lpSymbol: 'MAI-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x06e49078b1900A8489462Cd2355ED8c09f507499',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xC2c5a92E4dA9052aF406c0b97f09378C51a7E767',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdt,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000090856481481481 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap'
  },

  {
    pid: 245,
    lpSymbol: 'MAI-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x06e49078b1900A8489462Cd2355ED8c09f507499',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xC2c5a92E4dA9052aF406c0b97f09378C51a7E767',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdt,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000090856481481481 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap'
  },

  {
    pid: 199,
    lpSymbol: 'MAI(miMatic)-Dai',
    lpAddresses: {
      80001: '',
      137: '0x74214F5d8AA71b8dc921D8A963a1Ba3605050781',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xBfBeCAf31F6Aa873660d5b7c98fd8Cbd542cC0fD',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xd125662e2C04C355B4F6b22780f9fBaB48463163',
    },
    token: tokens.mimatic,
    quoteToken: tokens.dai,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 246,
    lpSymbol: 'MAI-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0x74214F5d8AA71b8dc921D8A963a1Ba3605050781',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb827B23e2276ceB912CB42088ab064800447c158',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xCF6081788AFa655705078D8371c1E6A08B7C6619',
    },
    token: tokens.mimatic,
    quoteToken: tokens.dai,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000090856481481481 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap'
  },


  {
    pid: 200,
    lpSymbol: 'MAI(miMatic)-Matic',
    lpAddresses: {
      80001: '',
      137: '0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x270be4F2B283496C761f6eba7165028C41D6b769',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xbA9702585136Cd7E39E6BCA0e700c3fae72DF05f',
    },
    token: tokens.mimatic,
    quoteToken: tokens.matic,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 247,
    lpSymbol: 'MAI-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x5F709F81cdA3E84fC2af3662B8B8C3F4f44e3d4E',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x928aC990A5A9471DA5f05A27211613aA5c75DD3c',
    },
    token: tokens.mimatic,
    quoteToken: tokens.matic,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000018171296296296 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap'
  },


  {
    pid: 201,
    lpSymbol: 'Qi-Eth',
    lpAddresses: {
      80001: '',
      137: '0x8C1b40Ea78081B70F661C3286c74E71b4602C9C0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb47f7120a57381c217e4d6F3a79F066bfAAe6C93',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xcA5a23122238A0CC126CbE30CA170839c4Ee15E8',
    },
    token: tokens.qidao,
    quoteToken: tokens.eth,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 248,
    lpSymbol: 'Qi-Eth LP',
    lpAddresses: {
      80001: '',
      137: '0x8C1b40Ea78081B70F661C3286c74E71b4602C9C0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x17fE4630A855FF6e546C19c315BE7f3ED01f38Ff',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xAD37B0Be3164a85C6Ffc48fEc9D722756C000AE6',
    },
    token: tokens.qidao,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000090856481481481 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/#/quick',
    kogefarmComment: ' (Quick)',
    platform: 'QuickSwap'
  },

  {
    pid: 31,
    lpSymbol: 'MAI(miMatic)-USDC',
    lpAddresses: {
      80001: '',
      137: '0x160532D2536175d65C03B97b0630A9802c274daD',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x3c928f0eE37bafeB6e90D835e7000ef533A09472',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.qidao,
    rewardPerBlock: 3,
    poolWeightDesignate: 50 / 300,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.005,
    underlyingWebsite: 'https://mai.finance',
    kogefarmComment: ' (Qi)',
    platform: 'Qi Dao'
  },


  {
    pid: 19,
    lpSymbol: 'MAI(miMatic)-Qi',
    lpAddresses: {
      80001: '',
      137: '0x7AfcF11F3e2f01e71B7Cc6b8B5e707E42e6Ea397',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xaE48aCc701151061A5bfff8e4c3f0DCfe4A957E9',
    },
    token: tokens.qidao,
    quoteToken: tokens.mimatic,
    rewardPerBlock: 3,
    poolWeightDesignate: 0 / 300,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.005,
    underlyingWebsite: 'https://mai.finance',
    kogefarmComment: ' (Qi)',
    platform: 'Qi Dao',
    multiplier: '0X',
  },

  {
    pid: 197,
    lpSymbol: 'Qi-Matic',
    lpAddresses: {
      80001: '',
      137: '0x9A8b2601760814019B7E6eE0052E25f1C623D1E6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0x42064982010d0881c7A6BC89D83B32309bd17a99',
    },
    token: tokens.qidao,
    quoteToken: tokens.matic,
    rewardPerBlock: 3,
    poolWeightDesignate: 100 / 300,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.005,
    underlyingWebsite: 'https://mai.finance',
    kogefarmComment: ' (Qi)',
    platform: 'Qi Dao'
  },

  {
    pid: 234,
    lpSymbol: 'Collar-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x33e05daCdd6254FDCcadAB11cCf69a2e877DBc7d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x5AA51B3890bAEdFB3BF570a6345D5F3B2A6ddfDf',
    },
    token: tokens.collar,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 10000 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    isSushi: true,
    kogefarmComment: ' (Sushi)'
  },

  {
    pid: 235,
    lpSymbol: 'Collar-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xbBe5F4998Cc537A91e7b90C7925D1c7C5bAb7ee0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x084A5e96F3EE81909bF8e4De5Ad3a823616Bd08f',
    },
    token: tokens.collar,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 10000 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    isSushi: true,
    kogefarmComment: ' (Sushi)'
  },

  {
    pid: 236,
    lpSymbol: 'Collar-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x23e5d894177840dd25De6b37752593a9c5DcC762',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 23,
    jarAddresses: {
      80001: '',
      137: '0xE5C7986950e10541CADC1646ff227aCA52F7995D',
    },
    token: tokens.collar,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 14000 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)'
  },

  {
    pid: 237,
    lpSymbol: 'Collar-KogeCoin LP',
    lpAddresses: {
      80001: '',
      137: '0x4c2Ab54adBC557334289BeE9a7F5237461bC7844',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 28,
    jarAddresses: {
      80001: '',
      137: '0x64c20BB3D9aCD870f748fe73B6541D500643e490',
    },
    token: tokens.collar,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 5000 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ui.polypup.finance/address/0xdabdf071635df85e87cb5b531c4db448a0f0ce21',
    platform: 'PolyPup',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)'
  },

  {
    pid: 238,
    lpSymbol: 'Collar',
    lpAddresses: {
      80001: '',
      137: '0x8DF26a1BD9bD98e2eC506fc9d8009954716A05DC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0xb99898440ff53A7f36422faee7030F4785452636',
    },
    token: tokens.collar,
    quoteToken: tokens.collar,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 15000 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    isJetSwap: true,
  },

  {
    pid: 239,
    lpSymbol: 'Ball-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x0097692463fD591aEf388851FE2d756505f498AC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xc74e6DcF602e81FC10dE4FE852Ab4243412E0Dd9',
    },
    token: tokens.ball,
    quoteToken: tokens.usdc,
    rewardToken: tokens.collar,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 1500 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    kogefarmComment: ' (Collar)'
  },

  {
    pid: 240,
    lpSymbol: 'Bone-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x2CC05c660f35E8692CA99dB95922CB744d44ef20',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0xA1e13449EA8218Ab2e3ea0CF841d39A61b2024D9',
    },
    token: tokens.bone,
    quoteToken: tokens.usdc,
    rewardToken: tokens.collar,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 1500 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    kogefarmComment: ' (Collar)'
  },

  {
    pid: 241,
    lpSymbol: 'Pup-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDAbDF071635Df85E87CB5b531C4Db448a0f0cE21',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0xd9bea4230Be112D900B493F6a772b1E769eCC7B8',
    },
    token: tokens.pup,
    quoteToken: tokens.usdc,
    rewardToken: tokens.collar,
    rewardPerBlock: 0.075,
    poolWeightDesignate: 1500 / 113500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://collar.polypup.finance/farms',
    platform: 'PolyPup',
    kogefarmComment: ' (Collar)'
  },

  {
    pid: 242,
    lpSymbol: 'Sing-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x6046eB198AbC5Ea4f17027bC00a2aeE0420E84EE',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9762Fe3ef5502dF432de41E7765b0ccC90E02e92',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x2002ac0EE6Fb936d5F0d52ACebAB581a3dF5F971',
    },
    token: tokens.sing,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.1 * 2,
    poolWeightDesignate: 80 / 234,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://singular.farm/farm',
    platform: 'Singular',
    isApe: true,
  },

  {
    pid: 243,
    lpSymbol: 'Sing-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x854D3639F38F65c091664062230091858955Ddc2',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9762Fe3ef5502dF432de41E7765b0ccC90E02e92',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x05e30F9b15a88f911c58D63EdAc8B60d24488AeB',
    },
    token: tokens.sing,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.1 * 2,
    poolWeightDesignate: 40 / 234,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://singular.farm/farm',
    platform: 'Singular',
    isApe: true,
  },

  /*          {
           pid: 244,
           lpSymbol: 'Sing-KogeCoin LP',
           lpAddresses: {
             80001: '',
             137: '0x3f121a0Ee1E1776299876cb6E15CCA55bbd7a33A',
           },
           masterChefAddresses: {
             80001: '',
             137: '0x9762Fe3ef5502dF432de41E7765b0ccC90E02e92',
           },
           masterChefPid: 16,
           jarAddresses: {
             80001: '',
             137: '0xFC3578356Cb5BcBA389145903254Aad2c3f606bc',
           },
           token: tokens.sing,
           quoteToken: tokens.kogecoin,
           rewardPerBlock: 0.1*2,
           poolWeightDesignate: 1/233,
           minutesPerCompound: 5,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://singular.farm/farm',
           platform: 'Singular',
         },
  */

  {
    pid: 183,
    lpSymbol: 'Shi3ld',
    lpAddresses: {
      80001: '',
      137: '0xF239E69ce434c7Fb408b05a0Da416b14917d934e',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Ec74989E6f0014D269132267cd7c5B901303306',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x4B7E2DFDDFcA7aB50c4bEdc2721EceD34c8c79F6',
    },
    token: tokens.shield,
    quoteToken: tokens.shield,
    rewardPerBlock: 1,
    poolWeightDesignate: 4000 / 38000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyshield.finance/#/vaults',
    platform: 'PolyShield'
  },

  {
    pid: 184,
    lpSymbol: 'Shi3ld-Matic',
    lpAddresses: {
      80001: '',
      137: '0x982c1F90381e31e7b7dbbA8708126532B7cb7dF6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Ec74989E6f0014D269132267cd7c5B901303306',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x64ec0D31EA0345BCBf29855d7C0B74b5Dcc78fd9',
    },
    token: tokens.shield,
    quoteToken: tokens.matic,
    rewardPerBlock: 1,
    poolWeightDesignate: 5500 / 38000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyshield.finance/#/vaults',
    platform: 'PolyShield'
  },

  {
    pid: 185,
    lpSymbol: 'Shi3ld-USDC',
    lpAddresses: {
      80001: '',
      137: '0x0CA257A6cae5C89826DAae3BE0A64170e34493C5',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Ec74989E6f0014D269132267cd7c5B901303306',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0x23f9c7097157c0f6Fdbf355D8fB8914f4711Ab05',
    },
    token: tokens.shield,
    quoteToken: tokens.usdc,
    rewardPerBlock: 1,
    poolWeightDesignate: 5500 / 38000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyshield.finance/#/vaults',
    platform: 'PolyShield'
  },

  {
    pid: 186,
    lpSymbol: 'Shi3ld-KogeCoin LP',
    lpAddresses: {
      80001: '',
      137: '0x1A1Bf82669C8c1E703DAa2562Ec1EA9849259Ab0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Ec74989E6f0014D269132267cd7c5B901303306',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0x7a9be7CdF26C8311625ed97c174869fcA9b791eC',
    },
    token: tokens.shield,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 1,
    poolWeightDesignate: 4000 / 38000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyshield.finance/#/vaults',
    platform: 'PolyShield'
  },

  {
    pid: 195,
    lpSymbol: 'Shi3ld-Elk LP',
    lpAddresses: {
      80001: '',
      137: '0x4C7C0A328b75C990491edd68fF49D307212fe037',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Ec74989E6f0014D269132267cd7c5B901303306',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0x00567b197A3506e8D05Dc8aA21E8Ce250dbcE13c',
    },
    token: tokens.shield,
    quoteToken: tokens.elk,
    rewardPerBlock: 1,
    poolWeightDesignate: 1500 / 38000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyshield.finance/#/vaults',
    platform: 'PolyShield',
    isElk: true,
  },
  /*
         {
           pid: 196,
           lpSymbol: 'KogeCoin-Matic LP',
           lpAddresses: {
             80001: '',
             137: '0x3885503aEF5E929fCB7035FBDcA87239651C8154',
           },
           masterChefAddresses: {
             80001: '',
             137: '0x6275518a63e891b1bC54FEEBBb5333776E32fAbD',
           },
           masterChefPid: 0,
           jarAddresses: {
             80001: '',
             137: '0x48f5D07501A58Cb6fE35da305697c269Dc6944A2',
           },
           token: tokens.kogecoin,
           quoteToken: tokens.matic,
           rewardPerBlock: 2.8,
           poolWeightDesignate: 1/2,
           minutesPerCompound: 5,
           kogefarmFee: 0,
           underlyingWebsite: 'https://kogecoin.io',
           platform: 'KogeFarm',
           multiplier: '0X',
         },
  */
  {
    pid: 192,
    lpSymbol: 'Iris',
    lpAddresses: {
      80001: '',
      137: '0xdaB35042e63E93Cc8556c9bAE482E5415B5Ac4B1',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4aA8DeF481d19564596754CD2108086Cf0bDc71B',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x92FB3E8323baDBEE16f4E69De52D3a0b5BA39C7C',
    },
    token: tokens.iris,
    quoteToken: tokens.iris,
    rewardPerBlock: 0.4,
    poolWeightDesignate: 80 / 661,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://www.hermesdefi.io/app/pools',
    platform: 'Hermes Defi',
    multiplier: '0X',
  },

  {
    pid: 193,
    lpSymbol: 'Iris-Matic',
    lpAddresses: {
      80001: '',
      137: '0x86ad6271809f350522085F95F5A67d46ff7ed3AB',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4aA8DeF481d19564596754CD2108086Cf0bDc71B',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0xD33eDaB4e24D7471e8b772Fbc1f6b068d99FE391',
    },
    token: tokens.iris,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.4,
    poolWeightDesignate: 160 / 661,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://www.hermesdefi.io/app/pools',
    platform: 'Hermes Defi',
    multiplier: '0X',
  },

  {
    pid: 194,
    lpSymbol: 'Iris-KogeCoin',
    lpAddresses: {
      80001: '',
      137: '0x302f7E9bB5b5AC673Ac537F464a1B7A36bbbaBfA',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4aA8DeF481d19564596754CD2108086Cf0bDc71B',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0x55A2FedB176C09488102596Db21937A753025466',
    },
    token: tokens.iris,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 0.4,
    poolWeightDesignate: 60 / 661,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://www.hermesdefi.io/app/pools',
    platform: 'Hermes Defi',
    multiplier: '0X',
  },

  {
    pid: 216,
    lpSymbol: 'Alpha',
    lpAddresses: {
      80001: '',
      137: '0x0B048D6e01a6b9002C291060bF2179938fd8264c',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xfC7B6d0f6157a1971679f5aF7F5B6374694E658f',
    },
    token: tokens.alpha,
    quoteToken: tokens.alpha,
    rewardPerBlock: 0,
    poolWeightDesignate: 700 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    multiplier: '0X',
  },

  {
    pid: 217,
    lpSymbol: 'Spade',
    lpAddresses: {
      80001: '',
      137: '0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x3De0305D703b5ce1A748D174e29BA38e7C834005',
    },
    token: tokens.spade,
    quoteToken: tokens.spade,
    rewardToken: tokens.alpha,
    rewardPerBlock: 0,
    poolWeightDesignate: 120 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    isApe: true,
    kogefarmComment: ' (Alpha)',
    multiplier: '0X',
  },

  {
    pid: 211,
    lpSymbol: 'Alpha-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x79b368B3Aa34fF2044F7869024b5367A284D3b0E',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      137: '0x79D2F222c67e954AcAc8eCF3166cefAEB6cb56D0',
    },
    token: tokens.alpha,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 2400 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    multiplier: '0X',
  },

  {
    pid: 212,
    lpSymbol: 'Alpha-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x944a8B12D898E878F92cfC18eee5E6f3f7e2E70d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x2f026c3b0fdCcF941FB07A62F4803CAF36e45859',
    },
    token: tokens.alpha,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 2790 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    multiplier: '0X',
  },

  {
    pid: 213,
    lpSymbol: 'Alpha-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x16D70F7c3D17598AE0f5e56E27273E2a9b845e6e',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0x0CB25E588E0dF55Fb6B4407884D6B3B553D16095',
    },
    token: tokens.alpha,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 700 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    multiplier: '0X',
  },

  {
    pid: 215,
    lpSymbol: 'Alpha-KogeCoin LP',
    lpAddresses: {
      80001: '',
      137: '0xC97f95d557874993920a88ae522aA54044b1AC94',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0xD02064bEd4126ACCCe79431A52F206C558479648',
    },
    token: tokens.alpha,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 0,
    poolWeightDesignate: 440 / 10000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyalpha.finance/farms',
    platform: 'PolyAlpha',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    multiplier: '0X',
  },
  /*
         {
           pid: 214,
           lpSymbol: 'Spade-USDC LP',
           lpAddresses: {
             80001: '',
             137: '0x8f2172568Ad3b2024b8CB29b03279E4b3d4849c8',
           },
           masterChefAddresses: {
             80001: '',
             137: '0x0B14C435DC29f2e3F53E203a18077F4A41914870',
           },
           masterChefPid: 13,
           jarAddresses: {
             80001: '',
             137: '0xeE0B5e8d2187DAeeAD591b3F51b2C9ed8452f28E',
           },
           token: tokens.spade,
           quoteToken: tokens.usdc,
           rewardToken: tokens.alpha,
           rewardPerBlock: 0,
           poolWeightDesignate: 140/10000,
           minutesPerCompound: 5,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://polyalpha.finance/farms',
           platform: 'PolyAlpha',
           isApe: true,
           kogefarmComment: ' (ApeSwap)',
           multiplier: '0X',
         },
  */

  {
    pid: 224,
    lpSymbol: 'TMGO-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x48233A33f840F584Dc690C4FCb2E757f02eBf4F8',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1A807EF7665e3478d62480DEF0a6a0aCa5425424',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xfee30B81bD194f23dc5AcC23769410Beab3adB21',
    },
    token: tokens.tmgo,
    quoteToken: tokens.matic,
    rewardPerBlock: 1,
    poolWeightDesignate: 75000 / 282500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://tamagoswap.finance/farms',
    platform: 'TamagoSwap'
  },

  {
    pid: 225,
    lpSymbol: 'TMGO-KogeCoin LP',
    lpAddresses: {
      80001: '',
      137: '0x0aD6421c068989cfFBe95Cf1aeF2D8Df08651B38',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1A807EF7665e3478d62480DEF0a6a0aCa5425424',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0xA838F1e986b27d7AC5a977c7d0eCbADFFCDC7Bb5',
    },
    token: tokens.tmgo,
    quoteToken: tokens.kogecoin,
    rewardPerBlock: 1,
    poolWeightDesignate: 41000 / 282500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://tamagoswap.finance/farms',
    platform: 'TamagoSwap'
  },

  {
    pid: 191,
    lpSymbol: 'WUSD-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x7B93196CD4861f345509c2da31058CA4B1c30D63',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe',
    },
    masterChefPid: 28,
    jarAddresses: {
      80001: '',
      137: '0x09c656425B71D1459f210e250f2f2E4210DCd126',
    },
    token: tokens.wusd,
    quoteToken: tokens.usdc,
    rewardToken: tokens.wexpoly,
    rewardPerBlock: 1256, // 0.22
    poolWeightDesignate: 306 / 1500,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isWault: true,
    kogefarmComment: ' (Wault)',
    underlyingWebsite: 'https://app.wault.finance/polygon/#farm',
    platform: 'Wault'
  },

  {
    pid: 167,
    lpSymbol: 'GFI',
    lpAddresses: {
      80001: '',
      137: '0x874e178A2f3f3F9d34db862453Cd756E7eAb0381',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8105662cf0F7c1A9d4066E7F2C81049049bC184d',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xa3F49c515b3c45294D3F9B5A4525AF6223EDf954',
    },
    token: tokens.gfi,
    quoteToken: tokens.gfi,
    rewardPerBlock: 8.22368421052632,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 72,
    lpSymbol: 'GFI',
    lpAddresses: {
      80001: '',
      137: '0x874e178A2f3f3F9d34db862453Cd756E7eAb0381',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xf9FBfA8Fd7568D39E1b2091379499B48EA2F4c72',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xa67153C4b30f24F60286C664547aeE010AE87F1D',
    },
    token: tokens.gfi,
    quoteToken: tokens.gfi,
    rewardPerBlock: 6.091617933723200000,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (V1)',
    platform: 'Gravity',
    isGravity: true,
    multiplier: '0X',
  },

  {
    pid: 168,
    lpSymbol: 'GFI-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x2AaBdA501253b3AEeB4bEe0Bf7B0d5Fd87B038EB',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x73933555527Ad78e1d2B318334c843D13BbDA9F8',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x85eFa41967c508f6F2f5236B08E734cce88BC7e1',
    },
    token: tokens.gfi,
    quoteToken: tokens.eth,
    rewardPerBlock: 6.57894736842105,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 169,
    lpSymbol: 'GFI-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x96d6F7afFF161E7152Bec4272B51Cc007E4417AE',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xddEFF79d2355999d5807C143b0987Cdb6fd31edD',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x1e187A8Fc90e5DCbbfd25B473e17955Efe6E15E5',
    },
    token: tokens.gfi,
    quoteToken: tokens.usdc,
    rewardPerBlock: 6.57894736842105,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 223,
    lpSymbol: 'GFI-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xf08c4ebae711242Ca26C6C29116BAdBc9AF123ee',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x532AbbC6468c39A2933AD553AD0E581731F243ff',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x89dC99ffFC4a2300c7164cDe87FE0fE05398FA1C',
    },
    token: tokens.gfi,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.92901234568,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 226,
    lpSymbol: 'GFI-Btc LP',
    lpAddresses: {
      80001: '',
      137: '0x4a56EDb9F7EcF3fc710917265de58d9018309C1c',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x476311642329d3905F51EF68Ca3a30647F9EA9B3',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x17754aCE28b367dc0ee5B9D00232B1Feb05664c5',
    },
    token: tokens.gfi,
    quoteToken: tokens.btc,
    rewardPerBlock: 1.92901234568,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 227,
    lpSymbol: 'USDC-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xe0ce1D5380681d0d944b91C5A56D2B56e3cc93Dc',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xfe187f250Acd76319c0f825007e34533723DD5eC',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x24771c6C514F0307b01dC14e361c311B8E9823b5',
    },
    token: tokens.matic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 1.92901234568,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 228,
    lpSymbol: 'BTC-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xf7F07072160EB53A71A9E0cA082Dc02Fe75FFA9F',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1D5D0f293fAcd4d16a79B353bE4085634a8B1e13',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x00983223517fb75F5B963a3e896E1d682da0359a',
    },
    token: tokens.btc,
    quoteToken: tokens.usdc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 1.92901234568,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 229,
    lpSymbol: 'AAVE-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x1D7c760a79Ec798CbC5F6e017bAAa445965Daba8',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4ceBD96D384f7B00A462876cc50BaE8F50D0cd1A',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x74EeB0121f82784622Df86C9c2b1FEE61541B03b',
    },
    token: tokens.aave,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 1.44675925926,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 230,
    lpSymbol: 'Link-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x45EA5ce4e764Ae027b64c8DF8F457e168964e026',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x7C870fE594cF31775bE218263242382F94d28535',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xD8A6050F39e2910091b55927eDefb667fC30aa8E',
    },
    token: tokens.link,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 1.44675925926,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 231,
    lpSymbol: 'CRV-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0xce4eB53Cdf8BbC07C8DCc2F7A39984CC929aF15D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x76EBe94B0a5903003438027a2075c5FdFB8353a9',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xE48aA84AB5A0Ee50e08fc12dfaED0ada08a1aA5d',
    },
    token: tokens.crv,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 1.44675925926,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 170,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xEeFe518d89A49328580480fA3d90073Bda074d32',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xbc3205826d5924AcB809FD0D3e7B14A1de504744',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xa4FEb444c17FBe341e2481B89e1574DA1ab0A833',
    },
    token: tokens.usdc,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 171,
    lpSymbol: 'Dai-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x73A7b621090b8d7584cc40D1B1F016fB831949A3',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x253b345A9fa785C929867E6Db9e4b3C72e1c85c8',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xa5B762Df7b6491f30A62681b2F988977a98A07Fe',
    },
    token: tokens.dai,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 172,
    lpSymbol: 'BTC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x84D49BeFf6AeCF52C461Eae687d959d64eDf2427',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xa2002c6514387B8386037ea782e626ADc8487fA1',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x45a686CC6a9627a2fb2e4f44104c6EC09594bA93',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 173,
    lpSymbol: 'ETH-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x0Dfbf1A50bdcB570Bd0fF7Bb307313B553a02598',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xCFaf1e3fabF1fAE980258Fc643fBA9Fe1fB44655',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xFc0Da0cBAab796e983b3c0ee42bE6edC498AEf61',
    },
    token: tokens.matic,
    quoteToken: tokens.eth,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 174,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x42286296C3edE3f6a0ec4e687939b017408Cf321',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xe3bC11531D78Ce351Db9D2f0eC270B863FaC1C07',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x4ce450F7aa450ADd27E7F3631d1Ab1Cca56e1A3D',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 175,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0x4bb452B8b74864F44913F100Bee280dAA61ac298',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x5F6db84481A08B373BA7a0Ac4e0a13012B2Cd05f',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xB01705A4fe67D957E7e328834f09608359313065',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 176,
    lpSymbol: 'UST-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xE507A93b99120d916229ee6d4aDB4204bbb04Edc',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xFa51C6CBe06E1Ec6eb9D1E72bd315067fC977dFF',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x3528DB3895423c71d64D0F040D88B036B4579471',
    },
    token: tokens.ust,
    quoteToken: tokens.usdc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },

  {
    pid: 177,
    lpSymbol: 'BTC-RenBTC LP',
    lpAddresses: {
      80001: '',
      137: '0xCDd1aD14b4c156aFF8D833dE1793F67d75237909',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1d89d5d13B182b21f8AA883E4d2C8Fa059ab6CAE',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x9F807bf6FDfCa49adEA2a7a87cB86e9c3BacCC0a',
    },
    token: tokens.renbtc,
    quoteToken: tokens.btc,
    rewardToken: tokens.gfi,
    rewardPerBlock: 3.65497076023392,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (GFI)',
    platform: 'Gravity',
    isGravity: true,
  },
  /*
       {
         pid: 88,
         lpSymbol: 'GFI-USDC LP',
         lpAddresses: {
           80001: '',
           137: '0xb1f3555A7c3753AB4E6DF1d66CFDB25477a36Ce7',
         },
         masterChefAddresses: {
           80001: '',
           137: '0x037013d0952a0215CC235F176e9eb88E6a465970',
         },
         masterChefPid: 0,
         jarAddresses: {
           80001: '',
           137: '0x7F75a9924066Fff7c97B150cB5119D5F9C8FD0E4',
         },
         token: tokens.gfi,
         quoteToken: tokens.usdc,
         rewardPerBlock: 17.361111111111100000,
         poolWeightDesignate: 1,
         minutesPerCompound: 5,
         kogefarmFee: 0.01,
         underlyingWebsite: 'https://gravityfinance.io/',
         multiplier: '0X',
         platform: 'Gravity (legacy)'
       },
       {
         pid: 89,
         lpSymbol: 'GFI-ETH LP',
         lpAddresses: {
           80001: '',
           137: '0x1587663E8F475E69eA2DBb38482C8c4EE9F388Fb',
         },
         masterChefAddresses: {
           80001: '',
           137: '0xA85587945C97359d64d94d141BF1D95C215D1626',
         },
         masterChefPid: 0,
         jarAddresses: {
           80001: '',
           137: '0xcB57482aF988A2A00F14fa796920c50C4eb932A1',
         },
         token: tokens.gfi,
         quoteToken: tokens.eth,
         rewardPerBlock: 17.361111111111100000,
         poolWeightDesignate: 1,
         minutesPerCompound: 5,
         kogefarmFee: 0.01,
         underlyingWebsite: 'https://gravityfinance.io/',
         multiplier: '0X',
         platform: 'Gravity (legacy)'
       },
  */
  {
    pid: 117,
    lpSymbol: 'Link',
    lpAddresses: {
      80001: '',
      137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2b1966652Aa0c09a2f34cE3FbeB19d945dEB8FA3',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xF31049674cb4d43edE717d430a5b16066ecD4EFA',
    },
    token: tokens.link,
    quoteToken: tokens.link,
    rewardToken: tokens.gfi,
    rewardPerBlock: 0.5787037037,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    kogefarmComment: ' (GFI, V1)',
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity'
  },

  {
    pid: 118,
    lpSymbol: 'Sushi',
    lpAddresses: {
      80001: '',
      137: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0Dbe8999Cde32164340411897a7DD73654F82571',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x029f402412e0Ee600929Ae878473C4c9d2976E15',
    },
    token: tokens.sushi,
    quoteToken: tokens.sushi,
    rewardToken: tokens.gfi,
    isSushi: true,
    rewardPerBlock: 0.5787037037,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    kogefarmComment: ' (GFI, V1)',
    underlyingWebsite: 'https://gravityfinance.io/',
    platform: 'Gravity'
  },

  {
    pid: 202,
    lpSymbol: 'BTC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xE62Ec2e799305E0D367b0Cc3ee2CdA135bF89816',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x0C776471CB3Ac5be3a0e7560C7B87977a5Ac0be2',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 105 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 203,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x34965ba0ac2451A34a0471F04CCa3F990b8dea27',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xC9D6b9D95070f924E511415bb4a7640997704E4C',
    },
    token: tokens.usdc,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 160 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 204,
    lpSymbol: 'ETH-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x8e66a05C09b31e12f65b71Eb36F46b7E249cEaa5',
    },
    token: tokens.matic,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 200 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 205,
    lpSymbol: 'USDT-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xc2755915a85C6f6c1C0F3a86ac8C058F11Caa9C9',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x2F47fBD707D9dFB3CAb292700b71A3681DEB0721',
    },
    token: tokens.usdt,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 140 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 206,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x4B1F1e2435A9C96f7330FAea190Ef6A7C8D70001',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x9790a55E43a79f30e04f0B39FC766028950E793F',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 28 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 207,
    lpSymbol: 'DAI-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x6FF62bfb8c12109E8000935A6De54daD83a4f39f',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0x88f87372bDe5E2242e1a7996B4472dE490AF8453',
    },
    token: tokens.dai,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 100 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 208,
    lpSymbol: 'USDC-DAI LP',
    lpAddresses: {
      80001: '',
      137: '0xCD578F016888B57F1b1e3f887f392F0159E26747',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0xba4A9A92fc9ae91Bb26f31D7Dc538e44Ab04f2a3',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 15 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 209,
    lpSymbol: 'MANA-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xc48AE82ca34C63887b975F20ABA91a38f2a900B8',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 34,
    jarAddresses: {
      80001: '',
      137: '0x7Bd9e5F441D2013c473c3e366F2883b9A6cf9091',
    },
    token: tokens.mana,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 5 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 210,
    lpSymbol: 'GRT-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x1cedA73C034218255F50eF8a2c282E6B4c301d60',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0x14d09C69163F94D7f5e674A004F224F24739A56C',
    },
    token: tokens.grt,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 15 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },


  {
    pid: 188,
    lpSymbol: 'AVAX-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x1274De0DE2e9D9b1d0E06313c0E5EdD01CC335eF',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 38,
    jarAddresses: {
      80001: '',
      137: '0xEB2852258F0E4117352bA3364E599dc980681c2e',
    },
    token: tokens.avax,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 10 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 187,
    lpSymbol: 'AAVE-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x2813D43463C374a680f235c428FB1D7f08dE0B69',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0xC918945e4785D7ffd3f801407368c3d5e32A7C18',
    },
    token: tokens.aave,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 70 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 189,
    lpSymbol: 'CRV-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x396E655C309676cAF0acf4607a868e0CDed876dB',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0x26e028B287486E0Daa6D4658cc70E7c3aDc75891',
    },
    token: tokens.crv,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 10 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },

  {
    pid: 190,
    lpSymbol: 'Link-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0x74D23F21F780CA26B47Db16B0504F2e3832b9321',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0x43f28AAe9fcefA47D5d7835B0a9Eb86E36F035A7',
    },
    token: tokens.link,
    quoteToken: tokens.eth,
    rewardToken1: tokens.sushi,
    rewardToken2: tokens.matic,
    rewardPerBlock1: 0.129 * 2,
    rewardPerBlock2: 0.13 * 2,
    poolWeightDesignate: 50 / 1000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Sushi)',
    isSushi: true,
    underlyingWebsite: 'https://app.sushi.com/farm',
    platform: 'SushiSwap'
  },


  {
    pid: 75,
    lpSymbol: 'DAI-USDC-USDT',
    lpAddresses: {
      80001: '',
      137: '0xb4d09ff3dA7f9e9A2BA029cb0A81A989fd7B8f17',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1fD1259Fa8CdC60c6E8C86cfA592CA1b8403DFaD',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x7B612e2A58F31Eb482812D1F3529e001655e6EB9',
    },
    token: tokens.iron3pool,
    quoteToken: tokens.iron3pool,
    rewardToken: tokens.ice,
    rewardPerBlock: 9.25925925925926 * 2,
    poolWeightDesignate: 3000 / 8000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Iron)',
    underlyingWebsite: 'https://app.iron.finance/',
    platform: 'Iron'
  },

  {
    pid: 181,
    lpSymbol: 'Iron-DAI-USDC-USDT',
    lpAddresses: {
      80001: '',
      137: '0x985D40feDAA3208DAbaCDFDCA00CbeAAc9543949',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1fD1259Fa8CdC60c6E8C86cfA592CA1b8403DFaD',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x79c3f7c36ACb46Ee566c2c33B9DdE4668eC069a6',
    },
    token: tokens.iron4pool,
    quoteToken: tokens.iron4pool,
    rewardToken: tokens.ice,
    rewardPerBlock: 9.25925925925926 * 2,
    poolWeightDesignate: 1000 / 8000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Iron)',
    underlyingWebsite: 'https://app.iron.finance/',
    platform: 'Iron'
  },

  {
    pid: 76,
    lpSymbol: 'Ice-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x34832D9AC4127a232C1919d840f7aaE0fcb7315B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1fD1259Fa8CdC60c6E8C86cfA592CA1b8403DFaD',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x55D51F0C3215085e45BA7041d32Fc8d4890570fE',
    },
    token: tokens.ice,
    quoteToken: tokens.usdc,
    rewardPerBlock: 9.25925925925926 * 2,
    poolWeightDesignate: 1000 / 8000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isDfyn: true,
    kogefarmComment: ' (Dfyn)',
    underlyingWebsite: 'https://app.iron.finance/',
    platform: 'Iron'
  },

  {
    pid: 90,
    lpSymbol: 'Ice-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0xf1EE78544a1118F2efb87f7EaCd9f1E6e80e1ea5',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1fD1259Fa8CdC60c6E8C86cfA592CA1b8403DFaD',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x95a56528Dcf6e8eC4c020Af18f869eA77b76E265',
    },
    token: tokens.ice,
    quoteToken: tokens.eth,
    rewardPerBlock: 9.25925925925926 * 2,
    poolWeightDesignate: 2000 / 8000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isFirebird: true,
    kogefarmComment: ' (Firebird)',
    underlyingWebsite: 'https://app.iron.finance/',
    platform: 'Iron'
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
    rewardPerBlock: 0.15,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    platform: 'DinoSwap'
  },

  {
    pid: 114,
    lpSymbol: 'Dino',
    lpAddresses: {
      80001: '',
      137: '0xAa9654BECca45B5BDFA5ac646c939C62b527D394',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x80F23e90f8D7d6f5e3f602B1E26C7b5Fa4E530d3',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x4e1578399F02F8f33c0911159dC61F5c9Adf1B25',
    },
    token: tokens.dino,
    quoteToken: tokens.dino,
    rewardToken: tokens.ust,
    rewardPerBlock: 0.0578703703703704,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (UST)',
    platform: 'DinoSwap'
  },

  {
    pid: 85,
    lpSymbol: 'Dino-USDC',
    lpAddresses: {
      80001: '',
      137: '0x3324af8417844e70b81555A6D1568d78f4D4Bf1f',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      137: '0x92F42e22D812C0C8ADFC30190faC42919032E19B',
    },
    token: tokens.dino,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 16000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 102,
    lpSymbol: 'Dino-Weth',
    lpAddresses: {
      80001: '',
      137: '0x9f03309A588e33A239Bf49ed8D68b2D45C7A1F11',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0xE4a966c8225BA2A5dd7B4861AB5fe3570E002629',
    },
    token: tokens.dino,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 8000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    platform: 'DinoSwap'
  },

  {
    pid: 180,
    lpSymbol: 'ORBS-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xB2b6D423e535b57aaD06E9866803B95fB66152EA',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 19,
    jarAddresses: {
      80001: '',
      137: '0xd5032F602AA9F6C00D7F20d00e3Dc61eaaAA3331',
    },
    token: tokens.orbs,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },

  {
    pid: 165,
    lpSymbol: 'DNXC-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xE169a660d720917B4fB7e95f045B6f60a64EB10A',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 18,
    jarAddresses: {
      80001: '',
      137: '0xE0011c255B8E7A5939e41913e3657D7852d50a9a',
    },
    token: tokens.dnxc,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },


  {
    pid: 163,
    lpSymbol: 'For-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xA1c3eb6fE2bB452AaC4d9247478594bf04750017',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      137: '0xd606Bd85424F372ec96DBDAcBB7ca7f9Bf04f270',
    },
    token: tokens.for,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },

  {
    pid: 150,
    lpSymbol: 'DG-USDC',
    lpAddresses: {
      80001: '',
      137: '0x27CE41B9eeB94cC122eF3B5e409b2900d3e0A629',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0xaBE114ca2B3406b5919c3617B9D8cFCe0f33611a',
    },
    token: tokens.dg,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },

  /*
  {
    pid: 82,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      80001: '',
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x1e5F7C5A8c2D3a071573Cc8101288D413cBDDc80',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 0/36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    multiplier: '0X',
    platform: 'DinoSwap'
  }, */

  {
    pid: 86,
    lpSymbol: 'Mai(miMatic)-USDC',
    lpAddresses: {
      80001: '',
      137: '0x160532D2536175d65C03B97b0630A9802c274daD',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0xA2C2473ccE81aF668f25C8d798f7A1C0F9172Cb9',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 0 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    multiplier: '0X',
    platform: 'DinoSwap'
  },

  {
    pid: 112,
    lpSymbol: 'USDT-UST',
    lpAddresses: {
      80001: '',
      137: '0x39BEd7f1C412ab64443196A6fEcb2ac20C707224',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0xc0892B586636528a0ECd1dD16256867271C5C3b7',
    },
    token: tokens.ust,
    quoteToken: tokens.usdt,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isDfyn: true,
    platform: 'DinoSwap'
  },

  {
    pid: 83,
    lpSymbol: 'WEth-WMatic',
    lpAddresses: {
      80001: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0x7F9bcE09fa5Dd6885142b34cAC9AfE4c142021Ff',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 0 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    multiplier: '0X',
    platform: 'DinoSwap'
  },
  /*
  {
    pid: 84,
    lpSymbol: 'WEth-USDC',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0xc78e2EBbdB1d45A9d0e1C35EFe2a477781387DcE',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 0/36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    multiplier: '0X',
    platform: 'DinoSwap'
  },
  */
  {
    pid: 111,
    lpSymbol: 'Dfyn-WEth',
    lpAddresses: {
      80001: '',
      137: '0x6fA867BBFDd025780a8CFE988475220AfF51FB8b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x1173c353e93342B337098b63B0B64226645Fb79d',
    },
    token: tokens.dfyn,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isDfyn: true,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },
  /*
  {
    pid: 116,
    lpSymbol: 'stkGHST-WEth',
    lpAddresses: {
      80001: '',
      137: '0x388E2a3d389F27504212030c2D42Abf0a8188cd1',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x25006b72061A512B2629dE0142d930f2F3751b7C',
    },
    token: tokens.ghst,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000/36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    multiplier: '0X',
    platform: 'DinoSwap'
  },
  */
  {
    pid: 143,
    lpSymbol: 'Bel-WEth LP',
    lpAddresses: {
      80001: '',
      137: '0x49ceCfa5c62b3A97F58CAd6B4aCc7c74810E1DDa',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xf30e1d85153E501BA8171DACf85F6613e91248B0',
    },
    token: tokens.bel,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    platform: 'DinoSwap'
  },

  {
    pid: 144,
    lpSymbol: 'XMark-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x97A95deb56d689802F02f50c25EBCda5d0A49591',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x50B808875e9722E0bDADB7211f486D8E49a2ceB9',
    },
    token: tokens.xmark,
    quoteToken: tokens.usdc,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 145,
    lpSymbol: 'CGG-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0xd74d23d2f23CD06a7D94f740A74c6E906F0C9005',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0xFAf49e554778e9D11F8a646679fDBf406B871556',
    },
    token: tokens.cgg,
    quoteToken: tokens.matic,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 146,
    lpSymbol: 'Arpa-WEth LP',
    lpAddresses: {
      80001: '',
      137: '0x590F5E967d73eA06DAE9aED2788108DCF52dA269',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0x395AB0835bea33aF0Fd1A4E20b9ED3eDc65DC0dc',
    },
    token: tokens.arpa,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 147,
    lpSymbol: 'Sx-WEth LP',
    lpAddresses: {
      80001: '',
      137: '0x1bF9805B40a5f69c7d0f9E5d1Ab718642203c652',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0x51e150D14C5f4Ce7b08eBd7a22A4D41ECF614614',
    },
    token: tokens.sx,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 148,
    lpSymbol: 'Sfi-WEth LP',
    lpAddresses: {
      80001: '',
      137: '0x7C07CecD8cdd65C0daD449808cc5f9AD74C22bd1',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0x15a5d625755FC77fC0753d9F1c3e2620297273C4',
    },
    token: tokens.sfi,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isSushi: true,
    platform: 'DinoSwap'
  },

  {
    pid: 149,
    lpSymbol: 'Route-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0xeBC4f9B1cE66258AC3A48578FFEEba1330dDB68B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x883200d4E483d01eEef2ffE96d37f9Df1E85d954',
    },
    token: tokens.route,
    quoteToken: tokens.eth,
    rewardToken: tokens.dino,
    rewardPerBlock: 11,
    poolWeightDesignate: 1000 / 36000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://dinoswap.exchange/',
    kogefarmComment: ' (DinoSwap)',
    isDfyn: true,
    platform: 'DinoSwap'
  },


  {
    pid: 43,
    lpSymbol: 'PUSD-USDC',
    lpAddresses: {
      80001: '',
      137: '0xc30D6Bc42911Aa21A63E51c7121B33b3E65cC3c4',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xCB881b62A97Cb733D01C59Eb8326B239E283E6a4',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xb33576835cC51EF8D71ccB861775B2821470bb71',
    },
    token: tokens.pusd,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pyq,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    kogefarmComment: ' (Finished)',
    underlyingWebsite: 'https://polyquity.org',
    multiplier: '0X',
    platform: 'PolyQuity'
  },

  {
    pid: 162,
    lpSymbol: 'PUSD-USDC',
    lpAddresses: {
      80001: '',
      137: '0xc30D6Bc42911Aa21A63E51c7121B33b3E65cC3c4',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x43D53FD10fd38207815311bd09eb6aE94F7Ab643',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x3F5912c3312B73483Cd8015A7881Ef40118d50C6',
    },
    token: tokens.pusd,
    quoteToken: tokens.usdc,
    rewardToken: tokens.pyq,
    rewardPerBlock: 0.231481481481481481 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    multiplier: '0X',
    kogefarmComment: ' (New)',
    underlyingWebsite: 'https://polyquity.org',
    platform: 'PolyQuity'
  },

  {
    pid: 44,
    lpSymbol: 'PYQ-USDC',
    lpAddresses: {
      80001: '',
      137: '0xd3924Ad8F881514efF89503Be9027B877E9e2bd0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2B8E5367628dF1481Be945B685ADf0968f1965E7',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xe5B7402d8Ccae02D3BaA65140a50B26f876cec8b',
    },
    token: tokens.pyq,
    quoteToken: tokens.usdc,
    rewardPerBlock: 1.26839167935058346 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://polyquity.org',
    platform: 'PolyQuity'
  },


  {
    pid: 106,
    lpSymbol: 'KogeCoin-Matic',
    lpAddresses: {
      80001: '',
      137: '0x3885503aEF5E929fCB7035FBDcA87239651C8154',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xDEb9d9D209687EC73488A89b68fE84B2364a8d86',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xb7D3e1C5cb26D088d619525c6fD5D8DDC1B543d1',
    },
    token: tokens.kogecoin,
    quoteToken: tokens.matic,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0,
    underlyingWebsite: 'https://quickswap.exchange',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap',
    multiplier: '0X'
  },

  {
    pid: 97,
    lpSymbol: 'BTC-Eth',
    lpAddresses: {
      80001: '',
      137: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x070D182EB7E9C3972664C959CE58C5fC6219A7ad',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x2425b13B711c82E694237F852c3b1A3E50930c7C',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 249,
    lpSymbol: 'BTC-Eth LP',
    lpAddresses: {
      80001: '',
      137: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2972175e1a35C403B5596354D6459C34Ae6A1070',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xE28809B6070DB755b01303d03Dc0476F49A96B17',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000154456018518518 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 249,
    lpSymbol: 'BTC-Eth LP',
    lpAddresses: {
      80001: '',
      137: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2972175e1a35C403B5596354D6459C34Ae6A1070',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xE28809B6070DB755b01303d03Dc0476F49A96B17',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000154456018518518 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 95,
    lpSymbol: 'ETH-Matic',
    lpAddresses: {
      80001: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8FF56b5325446aAe6EfBf006a4C1D88e4935a914',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xEA2A839abE3dd0fc8830B28706dF8d81FF3201eD',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 250,
    lpSymbol: 'Eth-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4b678cA360c5f53a2B0590e53079140F302A9DcD',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x8e73021E5eC8aB320b96D01fE756bd9C2B3Ab5B0',
    },
    token: tokens.matic,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000154456018518518 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 250,
    lpSymbol: 'Eth-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4b678cA360c5f53a2B0590e53079140F302A9DcD',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x8e73021E5eC8aB320b96D01fE756bd9C2B3Ab5B0',
    },
    token: tokens.matic,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000154456018518518 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 232,
    lpSymbol: 'AAVE-WETH',
    lpAddresses: {
      80001: '',
      137: '0x90bc3E68Ba8393a3Bf2D79309365089975341a43',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x573bb5CCC26222d8108EdaCFcC7F7cb9e388Af10',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xe806cfd63a2aA1461415DF918a24af77b103FD27',
    },
    token: tokens.aave,
    quoteToken: tokens.eth,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 233,
    lpSymbol: 'AVAX-MATIC',
    lpAddresses: {
      80001: '',
      137: '0xEb477AE74774b697B5D515eF8ca09e24FEe413b5',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x02e33E4713Cf231D4b7A9894DE3F075A16e19201',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xbccD774b1f377430C3cBA3662744E5157A029847',
    },
    token: tokens.avax,
    quoteToken: tokens.matic,
    rewardToken: tokens.quick,
    rewardPerBlock: 0 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap',
    multiplier: '0X',
  },

  {
    pid: 251,
    lpSymbol: 'AVAX-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xEb477AE74774b697B5D515eF8ca09e24FEe413b5',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0cAB010bA055a9F3B3f987BA39eE0ad3E2d1a830',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x3BF440465b8E5A36cac9e6B6F4300b461B42C9A6',
    },
    token: tokens.avax,
    quoteToken: tokens.matic,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000018171296296296 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 252,
    lpSymbol: 'Uni-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xF7135272a5584Eb116f5a77425118a8B4A2ddfDb',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x76cC4059Dd19518c377934CD799615B3543967fd',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x9ea363902D086A4707F71d7AF6Fb91DAf7aE4948',
    },
    token: tokens.uni,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000036342592592592 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 280,
    lpSymbol: 'IMX-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x5F819F510CA9B1469e6a3Ffe4ecD7F0C1126f8F5',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xBba6c7B2D1B088ecC969E13140b801714f9b1a20',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x9e7eB04168078eE76755D81ddC229d5C7Ad218c9',
    },
    token: tokens.imx,
    quoteToken: tokens.eth,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000009085648148148 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 20,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 281,
    lpSymbol: 'IMX-Quick LP',
    lpAddresses: {
      80001: '',
      137: '0x7E1cF35E362cAeA8C1a132bA4E4222080f26D8B0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xbAa4E89245f462B6746CBfadDe6a1Ae120fb62C3',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x9420981430E703f0310db748483d1627478EfCFA',
    },
    token: tokens.imx,
    quoteToken: tokens.quick,
    rewardToken: tokens.dquick,
    rewardPerBlock: 0.000004542824074074 * 2,
    poolWeightDesignate: 1,
    minutesPerCompound: 20,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://quickswap.exchange/',
    kogefarmComment: ' (QuickSwap)',
    platform: 'QuickSwap'
  },

  {
    pid: 135,
    lpSymbol: 'Banana-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x034293F21F1cCE5908BC605CE5850dF2b1059aC0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x2A60105aB70Eb62A7EEaa04b2748a8054cA6D6aE',
    },
    token: tokens.banana,
    quoteToken: tokens.matic,
    rewardPerBlock1: 0.325 * 2 * 5000 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 5000 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },

  {
    pid: 136,
    lpSymbol: 'Eth-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x6Cf8654e85AB489cA7e70189046D507ebA233613',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x8715Bb8f3157C7cA5bB379A107C9b810f11F7815',
    },
    token: tokens.matic,
    quoteToken: tokens.eth,
    rewardPerBlock1: 0.325 * 2 * 2000 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 2000 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },

  {
    pid: 137,
    lpSymbol: 'WMatic-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0xd32f3139A214034A0f9777c87eE0a064c1FF6AE2',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x00e80B9137560D0A0Abe5Ed39D39F5b0F5804237',
    },
    token: tokens.matic,
    quoteToken: tokens.dai,
    rewardPerBlock1: 0.325 * 2 * 800 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 800 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },

  {
    pid: 138,
    lpSymbol: 'WMatic-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x65D43B64E3B31965Cd5EA367D4c2b94c03084797',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x94d00dEe78f4b79CA8c07E0b2B00039b6B87c236',
    },
    token: tokens.matic,
    quoteToken: tokens.usdt,
    rewardPerBlock1: 0.325 * 2 * 600 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 600 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },

  {
    pid: 139,
    lpSymbol: 'WMatic-WBTC LP',
    lpAddresses: {
      80001: '',
      137: '0xe82635a105c520fd58e597181cBf754961d51E3e',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0x33c7f2cD56506e3Eac79984E96453b517D532D1e',
    },
    token: tokens.btc,
    quoteToken: tokens.matic,
    rewardPerBlock1: 0.325 * 2 * 600 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 600 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },

  {
    pid: 140,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0x5b13B583D4317aB15186Ed660A1E4C65C10da659',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0x7E90B622b8891e736247fFEE896dD2a1B3f9142e',
    },
    token: tokens.usdc,
    quoteToken: tokens.dai,
    rewardPerBlock1: 0.325 * 2 * 400 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 400 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },


  {
    pid: 141,
    lpSymbol: 'WMatic-Bnb LP',
    lpAddresses: {
      80001: '',
      137: '0x0359001070cF696D5993E0697335157a6f7dB289',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x54aff400858Dcac39797a81894D9920f16972D1D',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0x65378692264B09Ca93740F439dFA5A7978A821b1',
    },
    token: tokens.bnb,
    quoteToken: tokens.matic,
    rewardPerBlock1: 0.325 * 2 * 600 / 10000, // 0.8064
    rewardPerBlock2: 0.0435113811728395 * 2 * 600 / 10000,
    rewardToken1: tokens.banana,
    rewardToken2: tokens.matic,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (ApeSwap)',
    underlyingWebsite: 'https://app.apeswap.finance/yield',
    platform: 'ApeSwap'
  },


  {
    pid: 99,
    lpSymbol: 'pSwamp',
    lpAddresses: {
      80001: '',
      137: '0x5f1657896B38c4761dbc5484473c7A7C845910b6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6Dbf28f426Be8Ea13a191A45D3A1E70579dAc1E2',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x5C3533B44d7c3e804C428A57C426577CA899A311',
    },
    token: tokens.pswamp,
    quoteToken: tokens.pswamp,
    rewardPerBlock: 0.107205733,
    poolWeightDesignate: 1000 / 3150,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.001,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    platform: 'Swamp'
  },

  {
    pid: 115,
    lpSymbol: 'pSwamp-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x1A477272f6030EAB135Cb3BA40646f3eb26b382a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x5b782CfF50BE54e14A8762B689c18AFf39A9c42e',
    },
    masterChefPid: 36,
    jarAddresses: {
      80001: '',
      137: '0xeF721dc8AACFA0F2113DBfcB08a77207a220FEe9',
    },
    token: tokens.pswamp,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.107205733 * 1.06 / 0.38,
    poolWeightDesignate: 500 / 3150,
    minutesPerCompound: 5,
    depositFee: 0.001,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    platform: 'Swamp'
  },
  /*
     {
       pid: 100,
       lpSymbol: 'pSwamp-Matic LP',
       lpAddresses: {
         80001: '',
         137: '0x1A477272f6030EAB135Cb3BA40646f3eb26b382a',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x7242f72Cc26ad52A0Dcac8d203D9983ec28aE342',
       },
       masterChefPid: 1,
       jarAddresses: {
         80001: '',
         137: '0x531222F9399fa37AFfeBE759174423C962620E66',
       },
       token: tokens.pswamp,
       quoteToken: tokens.matic,
       rewardPerBlock: 0.107205733*9.61/8.24,
       poolWeightDesignate: 0/2650,
       minutesPerCompound: 5,
       depositFee: 0.001,
       kogefarmFee: 0.01,
       kogefarmComment: ' (removed by Swamp)',
       underlyingWebsite: 'https://swamp.finance/polygon/',
       multiplier: '0X',
     },
  */
  {
    pid: 94,
    lpSymbol: 'pSwamp',
    lpAddresses: {
      80001: '',
      137: '0x5f1657896B38c4761dbc5484473c7A7C845910b6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6Dbf28f426Be8Ea13a191A45D3A1E70579dAc1E2',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x5781135c882d4Fc8c61D0C826123761F20F67153',
    },
    token: tokens.pswamp,
    quoteToken: tokens.pswamp,
    rewardPerBlock: 0,
    poolWeightDesignate: 1000 / 2850,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.001,
    kogefarmComment: ' (legacy)',
    underlyingWebsite: 'https://swamp.finance/polygon/',
    multiplier: '0X',
    platform: 'Swamp'
  },

  {
    pid: 91,
    lpSymbol: 'pSwamp',
    lpAddresses: {
      80001: '',
      137: '0x5f1657896B38c4761dbc5484473c7A7C845910b6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6Dbf28f426Be8Ea13a191A45D3A1E70579dAc1E2',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xCc72AF943EF649B540021590fF349A454b5E2e9a',
    },
    token: tokens.pswamp,
    quoteToken: tokens.pswamp,
    rewardPerBlock: 0,
    poolWeightDesignate: 1000 / 3150,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.001,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    kogefarmComment: ' (legacy)',
    multiplier: '0X',
    platform: 'Swamp'
  },

  {
    pid: 93,
    lpSymbol: 'pSwamp-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x1A477272f6030EAB135Cb3BA40646f3eb26b382a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x7242f72Cc26ad52A0Dcac8d203D9983ec28aE342',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x52fd74517b9728E4a8c6A44a6D5efeECB49e2aC5',
    },
    token: tokens.pswamp,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 500 / 3150,
    minutesPerCompound: 5,
    depositFee: 0.001,
    kogefarmFee: 0.01,
    kogefarmComment: ' (legacy)',
    underlyingWebsite: 'https://swamp.finance/polygon/',
    multiplier: '0X',
    platform: 'Swamp'
  },

  {
    pid: 92,
    lpSymbol: 'pSwamp-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x1A477272f6030EAB135Cb3BA40646f3eb26b382a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x7242f72Cc26ad52A0Dcac8d203D9983ec28aE342',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xf5bc9A2251A1Ae5AEeb0286CC9562608E8bDb824',
    },
    token: tokens.pswamp,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 500 / 3150,
    minutesPerCompound: 5,
    depositFee: 0.001,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    kogefarmComment: ' (legacy)',
    multiplier: '0X',
    platform: 'Swamp'
  },

  /*
     {
       pid: 107,
       lpSymbol: 'MAI(miMatic)-USDC',
       lpAddresses: {
         80001: '',
         137: '0x160532D2536175d65C03B97b0630A9802c274daD',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x7d39705Cc041111275317f55B3A406ACC83615Bc',
       },
       masterChefPid: 0,
       jarAddresses: {
         80001: '',
         137: '0xc67DEEA5195a55FB19876AB3cB31F6d44a771946',
       },
       token: tokens.mimatic,
       quoteToken: tokens.usdc,
       rewardToken1: tokens.dino,
       rewardToken2: tokens.pswamp,
       rewardPerBlock1: 10.911912451171917896*0/35500*0.96, // 0.8064
       rewardPerBlock2: 0.107205733*25/2850,
       poolWeightDesignate: 1,
       minutesPerCompound: 5,
       kogefarmFee: 0.01,
       depositFee: 0.001,
       underlyingWebsite: 'https://swamp.finance/polygon/',
       kogefarmComment: ' (pSwamp, Dino)',
       multiplier: '0X',
       platform: 'Swamp'
     },
     {
       pid: 142,
       lpSymbol: 'USDT-UST LP',
       lpAddresses: {
         80001: '',
         137: '0x39BEd7f1C412ab64443196A6fEcb2ac20C707224',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x4F04e540A51013aFb6761ee73D71d2fB1F29af80',
       },
       masterChefPid: 41,
       jarAddresses: {
         80001: '',
         137: '0xc67DEEA5195a55FB19876AB3cB31F6d44a771946',
       },
       token: tokens.mimatic,
       quoteToken: tokens.usdc,
       rewardToken1: tokens.dino,
       rewardToken2: tokens.pswamp,
       rewardPerBlock1: 14.1319444444445*500/31500*0.96, // 0.8064
       rewardPerBlock2: 0.107205733*50/2775,
       poolWeightDesignate: 1,
       minutesPerCompound: 5,
       kogefarmFee: 0.01,
       depositFee: 0.001,
       underlyingWebsite: 'https://swamp.finance/polygon/',
       kogefarmComment: ' (pSwamp, Dino)',
     },
     {
       pid: 108,
       lpSymbol: 'Eth-Matic',
       lpAddresses: {
         80001: '',
         137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x0706b1A8A1Eeb12Ce7fb1FFDC9A4b4cA31920Eae',
       },
       masterChefPid: 0,
       jarAddresses: {
         80001: '',
         137: '0xD3dAdEAF5355Ca23150b037b2229Fd16A37004ae',
       },
       token: tokens.eth,
       quoteToken: tokens.matic,
       rewardToken1: tokens.dino,
       rewardToken2: tokens.pswamp,
       rewardPerBlock1: 10.911912451171917896*0/35500*0.96, // 0.8064
       rewardPerBlock2: 0.107205733*25/2775,
       poolWeightDesignate: 1,
       minutesPerCompound: 5,
       kogefarmFee: 0.01,
       depositFee: 0.001,
       underlyingWebsite: 'https://swamp.finance/polygon/',
       kogefarmComment: ' (pSwamp, Dino)',
       multiplier: '0X',
       platform: 'Swamp'
     },
  */
  {
    pid: 109,
    lpSymbol: 'WEth-USDC',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9C515E2489749E2befA0B054EfCb3b34B2c7F432',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x9A547d7c5359cd19C95A0c88C0967B715Cd19601',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.dino,
    rewardToken2: tokens.pswamp,
    rewardPerBlock1: 10.911912451171917896 * 0 / 35500 * 0.96, // 0.8064
    rewardPerBlock2: 0.107205733 * 25 / 2775,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.001,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    kogefarmComment: ' (pSwamp, Dino)',
    multiplier: '0X',
    platform: 'Swamp'
  },
  /*
     {
       pid: 110,
       lpSymbol: 'USDC-USDT',
       lpAddresses: {
         80001: '',
         137: '0x2cF7252e74036d1Da831d11089D326296e64a728',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x94BE6A449a5c286734522FC6047484ac763c595C',
       },
       masterChefPid: 0,
       jarAddresses: {
         80001: '',
         137: '0xF58B6E2A1187f3a4cf6494E75f047D268ee80dcA',
       },
       token: tokens.usdt,
       quoteToken: tokens.usdc,
       rewardToken1: tokens.dino,
       rewardToken2: tokens.pswamp,
       rewardPerBlock1: 10.911912451171917896*0/35500*0.96, // 0.8064
       rewardPerBlock2: 0.107205733*25/2850,
       poolWeightDesignate: 1,
       minutesPerCompound: 5,
       kogefarmFee: 0.01,
       depositFee: 0.001,
       underlyingWebsite: 'https://swamp.finance/polygon/',
       kogefarmComment: ' (pSwamp, Dino)',
       multiplier: '0X',
     }, */
  /*
     {
       pid: 119,
       lpSymbol: 'Dino-WETH',
       lpAddresses: {
         80001: '',
         137: '0x9f03309A588e33A239Bf49ed8D68b2D45C7A1F11',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x35fCE5A6660926CE80ba6469eCb17a30FC11d6F9', // Unverified
       },
       masterChefPid: 0,
       jarAddresses: {
         80001: '',
         137: '0xB170344302e7Ff8FCdE246Ce4900Aa69Cc5ea828',
       },
       token: tokens.dino,
       quoteToken: tokens.weth,
       rewardToken1: tokens.dino,
       rewardToken2: tokens.pswamp,
       rewardPerBlock1: 14.1319444444445*1000/31500*0.96, // 0.8064
       rewardPerBlock2: 0.107205733*25/2650,
       poolWeightDesignate: 1,
       minutesPerCompound: 5,
       kogefarmFee: 0.01,
       depositFee: 0.001,
       underlyingWebsite: 'https://swamp.finance/polygon/',
       kogefarmComment: ' (pSwamp, Dino)',
     }, */

  {
    pid: 120,
    lpSymbol: 'Dino-USDC',
    lpAddresses: {
      80001: '',
      137: '0x3324af8417844e70b81555A6D1568d78f4D4Bf1f',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x7Da45e3E3218b3A304A79e86c411F2bfd605A8De',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xf15b4FDc78a87786d3f3d775cB5E27847348490C',
    },
    token: tokens.dino,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.dino,
    rewardToken2: tokens.pswamp,
    rewardPerBlock1: 10.911912451171917896 * 14000 / 33000 * 0.96, // 0.8064
    rewardPerBlock2: 0.107205733 * 25 / 2850,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.001,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    kogefarmComment: ' (pSwamp, Dino)',
    isSushi: true,
    platform: 'Swamp'
  },

  {
    pid: 96,
    lpSymbol: 'ETH-Matic',
    lpAddresses: {
      80001: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xd032Cb7a0225c62E5e26455dFE4eE8C87df254e3',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xB364963Fd56D8A49a896E8c7BBB666b3159396fD',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardToken1: tokens.quick,
    rewardToken2: tokens.pswamp,
    rewardPerBlock1: 0 * 2 * 0.96, // 0.8064
    rewardPerBlock2: 0.107205733 * 25 / 2850,
    depositFee: 0.001,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://swamp.finance/polygon/',
    kogefarmComment: ' (pSwamp, Quick)',
    platform: 'Swamp'
  },

  {
    pid: 98,
    lpSymbol: 'BTC-Eth',
    lpAddresses: {
      80001: '',
      137: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x7B6bA2709A597Bcbf7Ff54116c0E88DE5fe2C381',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0xb7b5641442C1762586AA03Fdc4Fa4200CB57D4e5',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken1: tokens.quick,
    rewardToken2: tokens.pswamp,
    rewardPerBlock1: 0 * 2 * 0.96, // 0.8064
    rewardPerBlock2: 0.107205733 * 25 / 2850,
    poolWeightDesignate: 1,
    depositFee: 0.001,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://swamp.finance/polygon',
    kogefarmComment: ' (pSwamp, Quick)',
    platform: 'Swamp'
  },

  {
    pid: 101,
    lpSymbol: 'USDC-Dai',
    lpAddresses: {
      80001: '',
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x1c0a0927105140216425c84399E68F8B31E7510E',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0xCc5579577AD2F499F2d3583FCb4aFD765510A33B',
    },
    token: tokens.usdc,
    quoteToken: tokens.dai,
    rewardToken1: tokens.quick,
    rewardToken2: tokens.pswamp,
    rewardPerBlock1: 0 * 2 * 1 / 0.328472542024626154 * 0.96, // 0.8064
    rewardPerBlock2: 0.107205733 * 50 / 2850,
    poolWeightDesignate: 1,
    depositFee: 0.001,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://swamp.finance/polygon',
    kogefarmComment: ' (pSwamp, Quick)',
    platform: 'Swamp'
  },




  {
    pid: 103,
    lpSymbol: 'Lithium',
    lpAddresses: {
      80001: '',
      137: '0xfE1a200637464FBC9B60Bc7AeCb9b86c0E1d486E',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xfcD73006121333C92D770662745146338E419556',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0x759DCd61C021eDC0365882048C726462fA05F642',
    },
    token: tokens.lithium,
    quoteToken: tokens.lithium,
    rewardPerBlock: 0,
    poolWeightDesignate: 42000 / 113750,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    multiplier: '0X',
    underlyingWebsite: 'https://polywantsacracker.farm/',
    platform: 'PWAC'
  },

  {
    pid: 104,
    lpSymbol: 'Lithium-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x1b9c6d8b372C410426CF803fd20a815aA7B454c2',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xfcD73006121333C92D770662745146338E419556',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xd6a9550Fe158b477bC12af882911CB5e89295D39',
    },
    token: tokens.lithium,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 28000 / 113750,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    multiplier: '0X',
    underlyingWebsite: 'https://polywantsacracker.farm/',
    platform: 'PWAC'
  },

  {
    pid: 105,
    lpSymbol: 'Lithium-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xF47553EB96b8665d9F258E3F4FC9A9e7811C3C2B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xfcD73006121333C92D770662745146338E419556',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x53197CBe1cBeb417089cAAb3B5fB16391EDe0a69',
    },
    token: tokens.lithium,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 9000 / 113750,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    multiplier: '0X',
    underlyingWebsite: 'https://polywantsacracker.farm/',
    platform: 'PWAC'
  },


  {
    pid: 69,
    lpSymbol: 'pWings',
    lpAddresses: {
      80001: '',
      137: '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x01E02c272f0436317B1d05C350ED9C5482777aAb',
    },
    token: tokens.pwings,
    quoteToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 2225 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    platform: 'JetSwap'
  },
  /*
  {
    pid: 64,
    lpSymbol: 'PWINGS-USDC',
    lpAddresses: {
      80001: '',
      137: '0xaf623E96d38191038C48990Df298e07Fb77b56c3',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x32752c391fa2F241F60068e7EA1D8B84BaB88611',
    },
    token: tokens.pwings,
    quoteToken: tokens.usdc,
    rewardPerBlock: 2,
    poolWeightDesignate: 0/10750,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    multiplier: '0X',
  },
  */
  {
    pid: 65,
    lpSymbol: 'PWINGS-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xA0A6e9A5185d5737CF6F7920CB417EA2F07F03B3',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x0D3389DB05bC0d21961fEFd8b54B92558D798Fe2',
    },
    token: tokens.pwings,
    quoteToken: tokens.matic,
    rewardPerBlock: 2,
    poolWeightDesignate: 5500 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    platform: 'JetSwap'
  },

  /*   {
    pid: 70,
    lpSymbol: 'pWings-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0xA39a7640790907D4865a74c1F9715715DBd00431',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0xceE1BaaEAD121DfC60fb292d64714acC0E3147C1',
    },
    token: tokens.pwings,
    quoteToken: tokens.usdt,
    rewardPerBlock: 2,
    poolWeightDesignate: 0/10000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    multiplier: '0X',
  }, */

  {
    pid: 81,
    lpSymbol: 'pForce-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x4461677151ec95b2B4121122Cd07fECcde6b8A28',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      137: '0xdc351171072F753409f52910449af613A2FA202a',
    },
    token: tokens.pforce,
    quoteToken: tokens.matic,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 300 / 11125,
    minutesPerCompound: 5,
    kogefarmFee: 0.015 + 0.03,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 67,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0x4A53119dd905fD39ccC532C68e69505dfB47fc2C',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 16,
    jarAddresses: {
      80001: '',
      137: '0xa8974E37d2B9dF1c9dDD49e7D6363d32D366D976',
    },
    token: tokens.usdc,
    quoteToken: tokens.dai,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 66,
    lpSymbol: 'ETH-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x951E38875a93df95bbd24fe31f409b7933B35BED',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0x277c64Aa105bc4892280050726D3de0848b9C274',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 68,
    lpSymbol: 'USDC-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x5E58e0CeD3a272CAeb8bA00F4A4C2805Df6BE495',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      137: '0x87EaCf1a93469CC73D1b22b3fFeb995cA9825661',
    },
    token: tokens.usdc,
    quoteToken: tokens.matic,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 218,
    lpSymbol: 'BTC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x173E90f2a94Af3b075DeEC7e64Df4d70EfB4Ac3D',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0x11685B6Eb3B71E43077941Be3557048B95b96236',
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 500 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 219,
    lpSymbol: 'BTC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x7641d6b873877007697D526EF3C50908779a6993',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0x11801BfC70d6b049d81DE15b0Aa172CFe704AA09',
    },
    token: tokens.btc,
    quoteToken: tokens.usdt,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 220,
    lpSymbol: 'USDT-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xc7f1B47F4ed069E9B34e6bD59792B8ABf5a66339',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0xACF8cEd23d13Ce791A085f573e70751c2Ba90360',
    },
    token: tokens.usdt,
    quoteToken: tokens.eth,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 221,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0xFEFF91C350bB564cA5Dc7D6F7DcD12ac092F94FF',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0xc1f26fb014eF6EAa600ba95dAa18dDb0FeFaCC91',
    },
    token: tokens.usdc,
    quoteToken: tokens.eth,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },

  {
    pid: 222,
    lpSymbol: 'MATIC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x101640e107C4a72DeC79826768C239F1eB48cc85',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x26637b02F9ccF6BE12b38945698251E4721F0290',
    },
    token: tokens.usdt,
    quoteToken: tokens.matic,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250 / 11125,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
    platform: 'JetSwap'
  },



  /*
  {
    pid: 71,
    lpSymbol: 'BTC-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x7641d6b873877007697D526EF3C50908779a6993',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0x4B9815ba693f46A3B74e42A8767122EfCAa16C88',
    },
    token: tokens.btc,
    quoteToken: tokens.usdt,
    rewardToken: tokens.pwings,
    rewardPerBlock: 2,
    poolWeightDesignate: 250/10000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygon.jetswap.finance/farms',
    isJetSwap: true,
    kogefarmComment: ' (JetSwap)',
  }, */

  /*
  {
    pid: 73,
    lpSymbol: 'GFI-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xb1f3555A7c3753AB4E6DF1d66CFDB25477a36Ce7',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xE6584E2432ef0b82A39C383e895E7e031655F2Bf',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x681354D3aaB77382e1B946E36d8Cd1fF11903aaA',
    },
    token: tokens.gfi,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (legacy)',
    multiplier: '0X',
  }, */

  /*   {
    pid: 74,
    lpSymbol: 'GFI-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x1587663E8F475E69eA2DBb38482C8c4EE9F388Fb',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xEf943A1B9A5E697Eb26B1cfc5e9225D2Aa00395a',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x5D24318318C7219e7283C71A2c037957e1e3bC3E',
    },
    token: tokens.gfi,
    quoteToken: tokens.eth,
    rewardPerBlock: 0,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://gravityfinance.io/',
    kogefarmComment: ' (legacy)',
    multiplier: '0X',
  }, */
  {
    pid: 164,
    lpSymbol: 'Roll',
    lpAddresses: {
      80001: '',
      137: '0xC68e83a305b0FaD69E264A1769a0A070F190D2d6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xa3541eA15556AD3272b9BDe36241F61cCbb60aE8',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x41a3dDd6f2502689Bfd6170026ac45DC810E8037',
    },
    token: tokens.roll,
    quoteToken: tokens.roll,
    rewardToken: tokens.matic,
    rewardPerBlock: 0.029629629629629629,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://polyroll.org',
    kogefarmComment: ' (Matic)',
    platform: 'PolyRoll',
    multiplier: '0X'
  },

  {
    pid: 35,
    lpSymbol: 'Roll',
    lpAddresses: {
      80001: '',
      137: '0xC68e83a305b0FaD69E264A1769a0A070F190D2d6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xa32de2a04f68a17F6289105ce98baaA97f415309',
    },
    token: tokens.roll,
    quoteToken: tokens.roll,
    rewardPerBlock: 11.212426407522420097,
    poolWeightDesignate: 290 / 1090,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://polyroll.org',
    platform: 'PolyRoll'
  },

  {
    pid: 36,
    lpSymbol: 'Roll-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x905DCc700fcce9a49b7D907E371230995a45ebCE',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x8488E2f70055fdc2aCDF511Be789AEb93ae0B1B3',
    },
    token: tokens.roll,
    quoteToken: tokens.matic,
    rewardPerBlock: 11.212426407522420097,
    poolWeightDesignate: 280 / 1090,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://polyroll.org',
    platform: 'PolyRoll'
  },

  {
    pid: 62,
    lpSymbol: 'Roll-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x65C37f48781a555e2AD5542e4306ebAb1Ae93Cd7',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x15113393DB8B1Cd9781E04499b942AE1A3412763',
    },
    token: tokens.roll,
    quoteToken: tokens.matic,
    rewardPerBlock: 11.212426407522420097,
    poolWeightDesignate: 120 / 1090,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    kogefarmComment: ' (Ape)',
    underlyingWebsite: 'https://polyroll.org',
    platform: 'PolyRoll'
  },




  {
    pid: 151,
    lpSymbol: 'myFriends',
    lpAddresses: {
      80001: '',
      137: '0xa509Da749745Ac07E9Ae47E7a092eAd2648B47f2',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xEC56A5a3c43Ef9e60F7baE05254f5bE6eae4bdB5',
    },
    token: tokens.myfriends,
    quoteToken: tokens.myfriends,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.usdc,
    rewardPerBlock1: 0 * 180000 / 398450, // 0.8064
    rewardPerBlock2: 0,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 152,
    lpSymbol: 'Arcadium-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xB5DB659c561Dc84ec9D42d4277a5e01F3B69537b',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0xA6633cE2A7Bb69D3B1d34D56c95Aa0F59FFF6f57',
    },
    token: tokens.arcadium,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 15000 / 398450, // 0.8064
    rewardPerBlock2: 0 * 15000 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 153,
    lpSymbol: 'Arcadium-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x0bbAFa51e13829C9e96AA84b158F51fC80b276E2',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xa807d2892698190207E6f66d35DFbF0a227f51f4',
    },
    token: tokens.arcadium,
    quoteToken: tokens.matic,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 7000 / 398450, // 0.8064
    rewardPerBlock2: 0 * 7000 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 154,
    lpSymbol: 'myFriends-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xf66502FAbC81e64AD6E3A8Fd60bDA4a705A72BD0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x1CFef93D79d0421cf5e21bbeAF8F8f389BA3A5B6',
    },
    token: tokens.myfriends,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 24000 / 398450, // 0.8064
    rewardPerBlock2: 0 * 24000 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 155,
    lpSymbol: 'myFriends-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x3512638F2112098248Eb6Eab947257df82C7C117',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0x96d1DB482032eE964D344Ca44B2AfE4B8f96f8d2',
    },
    token: tokens.myfriends,
    quoteToken: tokens.matic,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 10000 / 398450, // 0.8064
    rewardPerBlock2: 0 * 10000 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 156,
    lpSymbol: 'WMatic',
    lpAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0xa18A9C9527aCFCa8F697c8691687DA254F773f99',
    },
    token: tokens.matic,
    quoteToken: tokens.matic,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 6000 / 398450, // 0.8064
    rewardPerBlock2: 0 * 6000 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    kogefarmComment: ' (Stadium Arcadium)',
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 157,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 22,
    jarAddresses: {
      80001: '',
      137: '0x89030969DB2B51897D7f4C789b7C9d3c2ef05083',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdc,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 10000 / 344500, // 0.8064
    rewardPerBlock2: 0 * 10000 / 344500,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    kogefarmComment: ' (Stadium Arcadium)',
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 158,
    lpSymbol: 'Dai',
    lpAddresses: {
      80001: '',
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 20,
    jarAddresses: {
      80001: '',
      137: '0x67cE36bf3106D782Ca06EEFa937d14f2D054ebe4',
    },
    token: tokens.dai,
    quoteToken: tokens.dai,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 8500 / 398450, // 0.8064
    rewardPerBlock2: 0 * 8500 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    kogefarmComment: ' (Stadium Arcadium)',
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },

  {
    pid: 159,
    lpSymbol: 'USDT',
    lpAddresses: {
      80001: '',
      137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
    },
    masterChefPid: 21,
    jarAddresses: {
      80001: '',
      137: '0xb9F9E41ac77A6B6E90e7EC26D9CDcEdB194F508A',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdt,
    rewardToken1: tokens.arcadium,
    rewardToken2: tokens.myfriends,
    rewardPerBlock1: 0 * 5500 / 398450, // 0.8064
    rewardPerBlock2: 0 * 5500 / 398450,
    poolWeightDesignate: 1,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    kogefarmComment: ' (Stadium Arcadium)',
    underlyingWebsite: 'https://stadiumarcadium.farm/',
    platform: 'SA',
    multiplier: '0X',
  },
  /*
         {
           pid: 160,
           lpSymbol: 'ETH',
           lpAddresses: {
             80001: '',
             137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
           },
           masterChefAddresses: {
             80001: '',
             137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
           },
           masterChefPid: 15,
           jarAddresses: {
             80001: '',
             137: '0x51eEEb529b647EdD27fced366D15F52bf668e419',
           },
           token: tokens.eth,
           quoteToken: tokens.eth,
           rewardToken1: tokens.arcadium,
           rewardToken2: tokens.myfriends,
           rewardPerBlock1: 0*16000/398450, // 0.8064
           rewardPerBlock2: 0*16000/398450,
           poolWeightDesignate: 1,
           minutesPerCompound: 5,
           kogefarmFee: 0.01,
           depositFee: 0.04,
           kogefarmComment: ' (Stadium Arcadium)',
           underlyingWebsite: 'https://stadiumarcadium.farm/',
           platform: 'SA',
           multiplier: '0X',
         },
  */
  /*
         {
           pid: 161,
           lpSymbol: 'BTC',
           lpAddresses: {
             80001: '',
             137: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
           },
           masterChefAddresses: {
             80001: '',
             137: '0x9DD1fe32Aff4060c12E2b42961548876053187c6',
           },
           masterChefPid: 16,
           jarAddresses: {
             80001: '',
             137: '0x2C61069B2e429F132CeF57D28aC58F4fA91B1dE1',
           },
           token: tokens.btc,
           quoteToken: tokens.btc,
           rewardToken1: tokens.arcadium,
           rewardToken2: tokens.myfriends,
           rewardPerBlock1: 0*13500/398450, // 0.8064
           rewardPerBlock2: 0*13500/398450,
           poolWeightDesignate: 1,
           minutesPerCompound: 5,
           kogefarmFee: 0.01,
           depositFee: 0.04,
           kogefarmComment: ' (Stadium Arcadium)',
           underlyingWebsite: 'https://stadiumarcadium.farm/',
           platform: 'SA',
           multiplier: '0X',
         },
  */

  {
    pid: 127,
    lpSymbol: 'Ball',
    lpAddresses: {
      80001: '',
      137: '0x883aBe4168705d2e5dA925d28538B7a6AA9d8419',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0x9762Bb14a5E9a2Fa94eb5FB9D241FA3d4893e6A5',
    },
    token: tokens.ball,
    quoteToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 10000 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    platform: 'PolyPup',
    multiplier: '0X',
  },


  {
    pid: 121,
    lpSymbol: 'Ball-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x0097692463fD591aEf388851FE2d756505f498AC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xFa10DbeFA09f369E191eD385FccC63c7De22bcd0',
    },
    token: tokens.ball,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 11000 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 122,
    lpSymbol: 'Ball-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0xe11eb426206960e9533828031cDFED0B4B61749C',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x93da5BAF95E313C99B76A98974D27d6eb32B2996',
    },
    token: tokens.ball,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 11000 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 123,
    lpSymbol: 'Bone-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x2CC05c660f35E8692CA99dB95922CB744d44ef20',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x043AFFc47423d39445d623c5Ca6E431643F1dd1b',
    },
    token: tokens.bone,
    quoteToken: tokens.usdc,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  /*
         {
           pid: 124,
           lpSymbol: 'Pup-USDC LP',
           lpAddresses: {
             80001: '',
             137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC',
           },
           masterChefAddresses: {
             80001: '',
             137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
           },
           masterChefPid: 3,
           jarAddresses: {
             80001: '',
             137: '0xB38f6067703c924602C6c316E9193bE547cd7a01',
           },
           token: tokens.pup,
           quoteToken: tokens.usdc,
           rewardToken: tokens.ball,
           rewardPerBlock: 0,
           poolWeightDesignate: 1500/69100,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://ball.polypup.finance/',
           kogefarmComment: ' (Ball)',
           platform: 'PolyPup',
           multiplier: '0X',
         },
  */
  {
    pid: 125,
    lpSymbol: 'Mai(miMatic)-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x160532D2536175d65C03B97b0630A9802c274daD',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0xE057c5b2e0eDbE5c336123409B0346d889286DdC',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2000 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 126,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0xC21FA0BE9eB6679bf071FFbA79f0933bE41F2293',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2300 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    depositFee: 0.04,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 128,
    lpSymbol: 'WMatic',
    lpAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0xae39a17C457d7fB75C0D5FAf96F685483aBD570b',
    },
    token: tokens.matic,
    quoteToken: tokens.matic,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2500 / 69100,
    minutesPerCompound: 1,
    depositFee: 0.04,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 129,
    lpSymbol: 'Link',
    lpAddresses: {
      80001: '',
      137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x0dad07D37A8e6E6dB623225c5CC0a114356048d3',
    },
    token: tokens.link,
    quoteToken: tokens.link,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    depositFee: 0.04,
    poolWeightDesignate: 2100 / 69100,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 130,
    lpSymbol: 'Eth',
    lpAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x37E45856616Cf8CeE2E3a69C7C401b6163552afF',
    },
    token: tokens.eth,
    quoteToken: tokens.eth,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2300 / 69100,
    minutesPerCompound: 1,
    depositFee: 0.04,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  /*
         {
           pid: 131,
           lpSymbol: 'Btc',
           lpAddresses: {
             80001: '',
             137: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
           },
           masterChefAddresses: {
             80001: '',
             137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
           },
           masterChefPid: 16,
           jarAddresses: {
             80001: '',
             137: '0xAFBFB2Bc9C0C00781993B203f43605966C8cD637',
           },
           token: tokens.btc,
           quoteToken: tokens.btc,
           rewardToken: tokens.ball,
           rewardPerBlock: 0,
           poolWeightDesignate: 1800/69100,
           minutesPerCompound: 1,
           depositFee: 0.04,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://ball.polypup.finance/',
           kogefarmComment: ' (Ball)',
           platform: 'PolyPup',
           multiplier: '0X',
         },
  */
  {
    pid: 132,
    lpSymbol: 'Dai',
    lpAddresses: {
      80001: '',
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 18,
    jarAddresses: {
      80001: '',
      137: '0x1478883920113b91991a9520252347e3274a6396',
    },
    token: tokens.dai,
    quoteToken: tokens.dai,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2800 / 69100,
    minutesPerCompound: 1,
    depositFee: 0.04,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 133,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xB5F383998d4E58C140c15C441c75bB79170b6b45',
    },
    masterChefPid: 20,
    jarAddresses: {
      80001: '',
      137: '0x0eB72cd5f9911C307a0E3B07426a7FDeb4588600',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdc,
    rewardToken: tokens.ball,
    rewardPerBlock: 0,
    poolWeightDesignate: 2800 / 69100,
    minutesPerCompound: 1,
    depositFee: 0.04,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://ball.polypup.finance/',
    kogefarmComment: ' (Ball)',
    platform: 'PolyPup',
    multiplier: '0X',
  },


  {
    pid: 79,
    lpSymbol: 'Vert',
    lpAddresses: {
      80001: '',
      137: '0x72572CCf5208b59f4BcC14e6653d8c31Cd1fC5a0',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8bE82Ab9B6179bE6EB88431E3E4E0fd93b9E607C',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0xeeb87B59b162B54a7f61DD7C0E7157984A56f506',
    },
    token: tokens.vert,
    quoteToken: tokens.vert,
    rewardPerBlock: 0.05,
    poolWeightDesignate: 10000 / 54000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyvertex.finance',
    platform: 'PolyVertex'
  },

  {
    pid: 80,
    lpSymbol: 'Vert-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x668269d6E5D2c2dE31D132Ac218044211643622B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8bE82Ab9B6179bE6EB88431E3E4E0fd93b9E607C',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x424D5E4000a0795c4CAaa3ee252B1Ae13d4cA39B',
    },
    token: tokens.vert,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.05,
    poolWeightDesignate: 10000 / 54000,
    minutesPerCompound: 5,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyvertex.finance',
    platform: 'PolyVertex'
  },


  {
    pid: 59,
    lpSymbol: 'Bone(Swap)-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0x4026895A93D720083E4469eE675156A8Ff8D3853',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72',
    },
    masterChefPid: 21,
    jarAddresses: {
      80001: '',
      137: '0xa937941C8CC9A21d0c6B866Fd2eEaED78B8C2834',
    },
    token: tokens.boneswap,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.8,
    poolWeightDesignate: 4000 / 30700,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://farm.boneswap.finance',
    platform: 'BoneSwap',
    multiplier: '0X'
  },

  {
    pid: 60,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x1B247E74d5c2D6CeF12C9BEc8115282CbC45c8B5',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdc,
    rewardPerBlock: 1.8,
    poolWeightDesignate: 600 / 30700,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.boneswap,
    kogefarmComment: ' (BoneSwap)',
    depositFee: 0.04,
    underlyingWebsite: 'https://farm.boneswap.finance',
    platform: 'BoneSwap',
    multiplier: '0X'
  },

  {
    pid: 61,
    lpSymbol: 'WMatic',
    lpAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x36DFEAE548Cfc9A8335624Cffc3fCDF80a5141f2',
    },
    token: tokens.matic,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.8,
    poolWeightDesignate: 1000 / 30700,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.boneswap,
    kogefarmComment: ' (BoneSwap)',
    depositFee: 0.04,
    underlyingWebsite: 'https://farm.boneswap.finance',
    platform: 'BoneSwap',
    multiplier: '0X'
  },


  {
    pid: 45,
    lpSymbol: 'Bone-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x2CC05c660f35E8692CA99dB95922CB744d44ef20',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x8b9C797DBcFAD409747962D1FE4718a9660dB94b',
    },
    token: tokens.bone,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 10000 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 46,
    lpSymbol: 'Bone-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0xeb168C9D678dC34D64337F4eA12cf14ed6fbE34B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x846C27ec821F67A9177C56F0cA6FEc4cfc5e5C8E',
    },
    token: tokens.bone,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 10000 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 57,
    lpSymbol: 'Pup-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0xBC68d2A5920c4ffaEa20E2BE48a0E09055481976',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0x379566E654D071E917332F9aA7A10587D09059e9',
    },
    token: tokens.pup,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.bone,
    kogefarmComment: ' (Bone)',
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  /*
  {
    pid: 58,
    lpSymbol: 'Pup-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0xc5CeE98D8B8b273398000f69fC31C6fFD2a37E08',
    },
    token: tokens.pup,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500/46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.bone,
    kogefarmComment: ' (Bone)',
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  */
  {
    pid: 47,
    lpSymbol: 'WMatic-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0xF457000D481Df3c486DFD38d8Fa0C4Fc949a6BbE',
    },
    token: tokens.matic,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.bone,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  /*
  {
    pid: 48,
    lpSymbol: 'WEth-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      137: '0x11F75EF77f15EfFd7ad72F99FC5C5Ab4e97E8Acc',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500/46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    rewardToken: tokens.bone,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },
  */
  {
    pid: 49,
    lpSymbol: 'Bone',
    lpAddresses: {
      80001: '',
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      137: '0xA89414dD5E57b896a3b20137d36B46a3AF12066A',
    },
    token: tokens.bone,
    quoteToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 2500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 50,
    lpSymbol: 'Pup',
    lpAddresses: {
      80001: '',
      137: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0xeAdCb0469f05fa07d4f5178FC762C5C872b6D9c0',
    },
    token: tokens.pup,
    quoteToken: tokens.pup,
    rewardToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Bone)',
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 51,
    lpSymbol: 'WMatic',
    lpAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0xa104c9Aad3EE07676D23159282124dCD3F542c62',
    },
    token: tokens.matic,
    quoteToken: tokens.matic,
    rewardToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 2000 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 52,
    lpSymbol: 'ETH',
    lpAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      137: '0x82e553b4B645A195BEA0E6C78c05483a07cf6116',
    },
    token: tokens.eth,
    quoteToken: tokens.eth,
    rewardToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 53,
    lpSymbol: 'BTC',
    lpAddresses: {
      80001: '',
      137: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x58c12402428ca79Da43Bf14B70CbC59DF5Dfe61a',
    },
    token: tokens.btc,
    quoteToken: tokens.btc,
    rewardToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 1500 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  {
    pid: 54,
    lpSymbol: 'Dai',
    lpAddresses: {
      80001: '',
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0x24Dbf973CC3fe6357cAB6394d94781784A55D930',
    },
    token: tokens.dai,
    quoteToken: tokens.dai,
    rewardToken: tokens.bone,
    rewardPerBlock: 0,
    poolWeightDesignate: 2000 / 46500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Bone)',
    depositFee: 0.04,
    underlyingWebsite: 'https://bone.polypup.finance',
    platform: 'PolyPup',
    multiplier: '0X',
  },

  /*
  {
    pid: 42,
    lpSymbol: 'USDC-DAI LP',
    lpAddresses: {
      80001: '',
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xEd8413eCEC87c3d4664975743c02DB3b574012a7',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x0ef967559fB9a94F8ecD305096E8387Eefb01F23',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.quick,
    rewardPerBlock: 13/24/60/60*2,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: -0.2,
    kogefarmComment: ' (Quick)',
  }, */
  /* We seem to be dramatically underestimating trading fees compared to Quick. A hack to compensate */

  {
    pid: 27,
    lpSymbol: 'CRYSTL',
    lpAddresses: {
      80001: '',
      137: '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x55C08f4F053170009010cF7435064d5e0E6905E3',
    },
    token: tokens.crystl,
    quoteToken: tokens.crystl,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 7000 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },

  {
    pid: 28,
    lpSymbol: 'CRYSTL-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xB8e54c9Ea1616beEBe11505a419DD8dF1000E02a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x58201C1331Bf7f36ed326af0789A33851019875b',
    },
    token: tokens.crystl,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 7000 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },
  /*
     {
       pid: 37,
       lpSymbol: 'WMatic',
       lpAddresses: {
         80001: '',
         137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
       },
       masterChefPid: 2,
       jarAddresses: {
         80001: '',
         137: '0x9c347d804429bC37d65e56aa6c5a07Cb8e0edAbB',
       },
       token: tokens.matic,
       quoteToken: tokens.matic,
       rewardToken: tokens.roll,
       rewardPerBlock: 50,
       poolWeightDesignate: 30/360,
       minutesPerCompound: 1,
       kogefarmFee: 0.01+0.04,
       kogefarmComment: ' (ROLL)',
       depositFee: 0.04,
     },
     {
       pid: 38,
       lpSymbol: 'Eth',
       lpAddresses: {
         80001: '',
         137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
       },
       masterChefPid: 3,
       jarAddresses: {
         80001: '',
         137: '0xbC036A0c3F0bfd81bD1E1708f5005A3Ed9CE771a',
       },
       token: tokens.eth,
       quoteToken: tokens.eth,
       rewardToken: tokens.roll,
       rewardPerBlock: 50,
       poolWeightDesignate: 30/360,
       minutesPerCompound: 1,
       kogefarmFee: 0.01+0.04,
       kogefarmComment: ' (ROLL)',
       depositFee: 0.04,
     },
     {
       pid: 39,
       lpSymbol: 'USDC',
       lpAddresses: {
         80001: '',
         137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
       },
       masterChefPid: 4,
       jarAddresses: {
         80001: '',
         137: '0x32219C86B0317601ea4cEd7586A278ac89B465eB',
       },
       token: tokens.usdc,
       quoteToken: tokens.usdc,
       rewardToken: tokens.roll,
       rewardPerBlock: 50,
       poolWeightDesignate: 30/360,
       minutesPerCompound: 1,
       kogefarmFee: 0.01+0.04,
       kogefarmComment: ' (ROLL)',
       depositFee: 0.04,
     },
     {
       pid: 40,
       lpSymbol: 'USDT',
       lpAddresses: {
         80001: '',
         137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
       },
       masterChefAddresses: {
         80001: '',
         137: '0x3C58EA8D37f4fc6882F678f822E383Df39260937',
       },
       masterChefPid: 5,
       jarAddresses: {
         80001: '',
         137: '0x5AB24bA8183dA4D0E050fD00257dE291CDD17a89',
       },
       token: tokens.usdt,
       quoteToken: tokens.usdt,
       rewardToken: tokens.roll,
       rewardPerBlock: 50,
       poolWeightDesignate: 30/360,
       minutesPerCompound: 1,
       kogefarmFee: 0.01+0.04,
       kogefarmComment: ' (ROLL)',
       depositFee: 0.04,
     }, */

  {
    pid: 32,
    lpSymbol: 'ETH-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x6Cf8654e85AB489cA7e70189046D507ebA233613',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      137: '0x2D03892d0fAE4479aE2B0d945f67675F006F7271',
    },
    token: tokens.eth,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 800 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    depositFee: 0.02,
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },

  {
    pid: 34,
    lpSymbol: 'USDC-DAI LP',
    lpAddresses: {
      80001: '',
      137: '0x5b13B583D4317aB15186Ed660A1E4C65C10da659',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      137: '0x54507Ee8E18FB6d7E4771A6619b04a84635bFf4B',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 10 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    depositFee: 0.05,
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },

  {
    pid: 33,
    lpSymbol: 'Fish-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x64d1393b53E3C4A8B04fB1ddE2C7B40bc0897222',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      137: '0x58FE96934a595Df1C03BddA09F0fdba38063770B',
    },
    token: tokens.fish,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 150 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    underlyingWebsite: 'https://polycat.finance',
    platform: 'PolyCrystal'
  },

  {
    pid: 29,
    lpSymbol: 'BANANA-ETH LP',
    lpAddresses: {
      80001: '',
      137: '0x44b82c02F404Ed004201FB23602cC0667B1D011e',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0xB131089e899a6F2E7726b83b85C32bbE097b138b',
    },
    token: tokens.banana,
    quoteToken: tokens.eth,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 1750 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },

  {
    pid: 30,
    lpSymbol: 'POLYDOGE-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x5D9d66ac0DB91Ec463Fb3e9E5B1513DBFf02fD0F',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0x510D776fEA6469531f8be69e669e553C0De69621',
    },
    token: tokens.polydoge,
    quoteToken: tokens.matic,
    rewardPerBlock: 1.5,
    poolWeightDesignate: 150 / 22385,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    underlyingWebsite: 'https://polycrystal.finance',
    platform: 'PolyCrystal'
  },


  {
    pid: 21,
    lpSymbol: 'Omen',
    lpAddresses: {
      80001: '',
      137: '0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6ad70613d14c34aa69E1604af91c39e0591a132e',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x8a8c784DDE052dE731a4477Bb95B4F594f5B9Bc3',
    },
    token: tokens.omen,
    quoteToken: tokens.omen,
    rewardPerBlock: 17.777,
    poolWeightDesignate: 60000000000000000000 / 358000000000000000000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://augury.finance',
    multiplier: '0X',
    platform: 'Augury'
  },

  {
    pid: 22,
    lpSymbol: 'Omen-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x50409De292f5F821888702e9538Bf15Fa273dFE6',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6ad70613d14c34aa69E1604af91c39e0591a132e',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x6726775952DE79b66c2340fCB4DD1cb3D48944E5',
    },
    token: tokens.omen,
    quoteToken: tokens.usdc,
    rewardPerBlock: 17.777,
    poolWeightDesignate: 100000000000000000000 / 358000000000000000000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://augury.finance',
    multiplier: '0X',
    platform: 'Augury'
  },

  {
    pid: 55,
    lpSymbol: 'Omen-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0xd7217619279F31DA063D738Cf1Bf7435764a07D9',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6ad70613d14c34aa69E1604af91c39e0591a132e',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      137: '0x26C4Cb82c7B7D2e551d5d074f2298686DAc530cA',
    },
    token: tokens.omen,
    quoteToken: tokens.eth,
    rewardPerBlock: 17.777,
    poolWeightDesignate: 50000000000000000000 / 358000000000000000000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://augury.finance',
    multiplier: '0X',
    platform: 'Augury'
  },

  {
    pid: 56,
    lpSymbol: 'Omen-WMatic LP',
    lpAddresses: {
      80001: '',
      137: '0xe9Bb87c33d1607B06fb3988b31E9601BD21Ff3bD',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x6ad70613d14c34aa69E1604af91c39e0591a132e',
    },
    masterChefPid: 18,
    jarAddresses: {
      80001: '',
      137: '0x0e0BCba8269f5d2192Ab8ABED301Ee229DE0F244',
    },
    token: tokens.omen,
    quoteToken: tokens.matic,
    rewardPerBlock: 17.777,
    poolWeightDesignate: 50000000000000000000 / 358000000000000000000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isSushi: true,
    underlyingWebsite: 'https://augury.finance',
    multiplier: '0X',
    platform: 'Augury'
  },

  {
    pid: 24,
    lpSymbol: 'Yeld',
    lpAddresses: {
      80001: '',
      137: '0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2DC11B394BD0f1CC6AC0a269cfe3CC0b333601B4',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xb9A4d32a547a4865E5247D611De7F3D7F3B2d378',
    },
    token: tokens.yeld,
    quoteToken: tokens.yeld,
    rewardPerBlock: 0.01,
    poolWeightDesignate: 0 / 28000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyyeld.finance',
    multiplier: '0X',
    platform: 'Yeld'
  },

  {
    pid: 25,
    lpSymbol: 'Yeld-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xef71F798c15f8C9732488e109BB511144088bECe',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2DC11B394BD0f1CC6AC0a269cfe3CC0b333601B4',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      137: '0x17051bB60771888Bc908B6946F4Fb7850042FE1d',
    },
    token: tokens.yeld,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.01,
    poolWeightDesignate: 0 / 28000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Quick)',
    underlyingWebsite: 'https://polyyeld.finance',
    multiplier: '0X',
    platform: 'Yeld'
  },

  {
    pid: 23,
    lpSymbol: 'Yeld-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xdD650C8d274474FF1af1152B3B27f2702AcA8a98',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2DC11B394BD0f1CC6AC0a269cfe3CC0b333601B4',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      137: '0x2f3E17b34A79F4990153EE5588aC04724E773C6E',
    },
    token: tokens.yeld,
    quoteToken: tokens.matic,
    isSushi: true,
    rewardPerBlock: 0.01,
    poolWeightDesignate: 0 / 28000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://polyyeld.finance',
    multiplier: '0X',
    platform: 'Yeld'
  },

  {
    pid: 41,
    lpSymbol: 'Yeld-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xC1Dd63cA154837AC4356D888F7c10fbBe442407e',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2DC11B394BD0f1CC6AC0a269cfe3CC0b333601B4',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0x97B0262670F3F640A6Be287f403302E2285F5A87',
    },
    token: tokens.yeld,
    quoteToken: tokens.matic,
    isApe: true,
    rewardPerBlock: 0.01,
    poolWeightDesignate: 4000 / 28000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    kogefarmComment: ' (Ape)',
    underlyingWebsite: 'https://polyyeld.finance',
    multiplier: '0X',
    platform: 'Yeld'
  },

  {
    pid: 26,
    lpSymbol: 'Yeld-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xAD8f4c66b28756458Fc419AA67aD2207A21A6997',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x2DC11B394BD0f1CC6AC0a269cfe3CC0b333601B4',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      137: '0xDF47221A2240754245dD3b88e01100C0d1d85Aa9',
    },
    token: tokens.yeld,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.01,
    poolWeightDesignate: 4000 / 28000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polyyeld.finance',
    multiplier: '0X',
    platform: 'Yeld'
  },


  {
    pid: 13,
    lpSymbol: 'WEXPoly',
    lpAddresses: {
      80001: '',
      137: '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x7f9fc5bA0c2d213C9Eee7940fefA1a7a297B2320',
    },
    token: tokens.wexpoly,
    quoteToken: tokens.wexpoly,
    rewardPerBlock: 1256,
    poolWeightDesignate: 60 / 1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.005,
    isWault: true,
    underlyingWebsite: 'https://wault.finance',
    platform: 'Wault'
  },

  {
    pid: 14,
    lpSymbol: 'WEXPoly-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xC46991072C7eAC184F7bd69d3122cd1750300b27',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe',
    },
    masterChefPid: 2,
    jarAddresses: {
      80001: '',
      137: '0x12977EdF05A6718036f4ecc9bE2D26366a97B96b',
    },
    token: tokens.wexpoly,
    quoteToken: tokens.matic,
    rewardPerBlock: 1256,
    poolWeightDesignate: 70 / 1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
    underlyingWebsite: 'https://wault.finance',
    platform: 'Wault'
  },

  {
    pid: 15,
    lpSymbol: 'WEXPoly-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x5DE6a3CcA10d3F788EEdbD4923e31D4658bf6f9a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      137: '0xe1A9ab14B4c0efa25a1EE6f1348ef4C34418c258',
    },
    token: tokens.wexpoly,
    quoteToken: tokens.usdc,
    rewardPerBlock: 1256,
    poolWeightDesignate: 400 / 1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
    underlyingWebsite: 'https://wault.finance',
    platform: 'Wault'
  },

  {
    pid: 7,
    lpSymbol: 'Fish',
    lpAddresses: {
      80001: '',
      137: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8CFD1B9B7478E7B0422916B72d1DB6A9D513D734',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      137: '0x05d83F3Ef95F921971763b035c00298BC42ff008',
    },
    token: tokens.fish,
    quoteToken: tokens.fish,
    rewardPerBlock: 0.8,
    poolWeightDesignate: 0 / 31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    underlyingWebsite: 'https://polycat.finance',
    multiplier: '0X',
    platform: 'PolyCat'
  },

  {
    pid: 8,
    lpSymbol: 'Fish-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x289cf2B63c5Edeeeab89663639674d9233E8668E',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8CFD1B9B7478E7B0422916B72d1DB6A9D513D734',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x2bb510a979fe3f277636A94B86FA304c6631581C',
    },
    token: tokens.fish,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.8,
    poolWeightDesignate: 0 / 31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    kogefarmComment: ' (Quick)',
    underlyingWebsite: 'https://polycat.finance',
    multiplier: '0X',
    platform: 'PolyCat'
  },

  {
    pid: 9,
    lpSymbol: 'Fish-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0xcBF6f78981e63Ef813cb71852d72A060b583EECF',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x8CFD1B9B7478E7B0422916B72d1DB6A9D513D734',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      137: '0xEa2F645691d114f0A7Fa7a759032F8c6f90D58d5',
    },
    token: tokens.fish,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.8,
    poolWeightDesignate: 0 / 31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://polycat.finance',
    multiplier: '0X',
    platform: 'PolyCat'
  },
  /*
  {
   pid: 20,
   lpSymbol: 'Fish-Matic LP',
   lpAddresses: {
     80001: '',
     137: '0x9e2Fbb31fBd68472f6cd54A1635b8cd64d78FC1C',
   },
   masterChefAddresses: {
     80001: '',
     137: '0x8CFD1B9B7478E7B0422916B72d1DB6A9D513D734',
   },
   masterChefPid: 21,
   jarAddresses: {
     80001: '',
     137: '0xf6cF9A3cB64c97D6278A57FA322D9945AA42E417',
   },
   token: tokens.fish,
   quoteToken: tokens.weth,
   rewardPerBlock: 0.8,
   poolWeightDesignate: 0/30960,
   minutesPerCompound: 1,
   kogefarmFee: 0.000,
   isDfyn: true,
   kogefarmComment: ' (Dfyn)',
   underlyingWebsite: 'https://polycat.finance',
   multiplier: '0X',
   platform: 'PolyCat'
  },
  */
  {
    pid: 10,
    lpSymbol: 'Booty',
    lpAddresses: {
      80001: '',
      137: '0xD12DC5319808Bb31ba95AE5764def2627d5966CE',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xA7f3C3f80Ff6a6f31bB7BaB04E3E8AC4E4dAE0c3',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      137: '0xF0db902352dfe1EaF8deb2a2eb5c760568821f58',
    },
    token: tokens.booty,
    quoteToken: tokens.booty,
    rewardPerBlock: 0.05,
    poolWeightDesignate: 3500 / 34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz',
    platform: 'PirateDice'
  },

  {
    pid: 11,
    lpSymbol: 'Booty-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xF2046f95621F349823cC1a12d914B2b5193ABD93',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xA7f3C3f80Ff6a6f31bB7BaB04E3E8AC4E4dAE0c3',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xbFad80456C71BE0fdE53ecd623605662cF808e53',
    },
    token: tokens.booty,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0.05,
    poolWeightDesignate: 12500 / 34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz',
    platform: 'PirateDice'
  },

  {
    pid: 12,
    lpSymbol: 'Booty-Matic LP',
    lpAddresses: {
      80001: '',
      137: '0x57B6A39c06DfF5678266e36dca2Cfa86da675894',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xA7f3C3f80Ff6a6f31bB7BaB04E3E8AC4E4dAE0c3',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      137: '0x0Be469DE6635A71a07Df915D65D5f08Fb4ac007F',
    },
    token: tokens.booty,
    quoteToken: tokens.matic,
    rewardPerBlock: 0.05,
    poolWeightDesignate: 10000 / 34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz',
    platform: 'PirateDice'
  },


  {
    pid: 16,
    lpSymbol: 'Gaj-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x99dADf889520b9cEBD9959d3ca1866DC2517Ea1d',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb03f95E649724dF6bA575C2c6eF062766a7fDb51',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x4929f3D8934640Fd93a21E89Cd22ddb4b2aff8c1',
    },
    token: tokens.gaj,
    quoteToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 10000 / 63250,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygaj.finance',
    multiplier: '0X',
    platform: 'PolyGaj'
  },

  {
    pid: 17,
    lpSymbol: 'Gaj-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x8BaFdF3a3fAEF45A08D2bc065e736D3D8c6FDFE7',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb03f95E649724dF6bA575C2c6eF062766a7fDb51',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      137: '0xE80D7246EcD89Cb8707001c61f652B90eeA0dbc4',
    },
    token: tokens.gaj,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 10000 / 63250,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygaj.finance',
    multiplier: '0X',
    platform: 'PolyGaj'
  },

  /* {
  pid: 5,
  lpSymbol: 'Iron-USDC LP',
  lpAddresses: {
    80001: '',
    137: '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc',
  },
  masterChefAddresses: {
    80001: '',
    137: '0x65430393358e55A658BcdE6FF69AB28cF1CbB77a',
  },
  masterChefPid: 2,
  jarAddresses: {
    80001: '',
    137: '0x3fae5e941B7eb3A7BeE94399bF669224efa9432C',
  },
  token: tokens.iron,
  quoteToken: tokens.usdc,
  rewardPerBlock: 0,
  poolWeightDesignate: 350000/1000000,
  minutesPerCompound: 1,
  kogefarmFee: 0.005,
  rewardToken: tokens.titan,
  kogefarmComment: ' (Quick)',
  multiplier: '0X',
  },
  {
  pid: 6,
  lpSymbol: 'Iron-USDC LP',
  lpAddresses: {
    80001: '',
    137: '0x85dE135fF062Df790A5f20B79120f17D3da63b2d',
  },
  masterChefAddresses: {
    80001: '',
    137: '0x65430393358e55A658BcdE6FF69AB28cF1CbB77a',
  },
  masterChefPid: 1,
  jarAddresses: {
    80001: '',
    137: '0xBDdC52842add45eAe21FeaF06f5c348a157cd148',
  },
  token: tokens.iron,
  quoteToken: tokens.usdc,
  rewardPerBlock: 0,
  poolWeightDesignate: 350000/1000000,
  minutesPerCompound: 1,
  isSushi: true,
  kogefarmFee: 0.005,
  rewardToken: tokens.titan,
  kogefarmComment: ' (Sushi)',
  multiplier: '0X',
  }, */

  {
    pid: 2,
    lpSymbol: 'Titan',
    lpAddresses: {
      80001: '',
      137: '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xa37DD1f62661EB18c338f18Cf797cff8b5102d8e',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x72812112d635873F5fEF2b0bcAb22cC5BBA2E0dD',
    },
    token: tokens.titan,
    quoteToken: tokens.titan,
    rewardToken: tokens.usdc,
    rewardPerBlock: 0,
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    kogefarmComment: ' (HIGH RISK)',
    multiplier: '0X',
    underlyingWebsite: 'https://iron.finance',
    platform: 'Iron'
  },

  {
    pid: 3,
    lpSymbol: 'Titan-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a',
    },
    masterChefAddresses: {
      80001: '',
      137: '0x65430393358e55A658BcdE6FF69AB28cF1CbB77a',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0xaA5237Ff567987445e1AC35D5148c11Ef3703173',
    },
    token: tokens.titan,
    quoteToken: tokens.matic,
    rewardPerBlock: 0,
    poolWeightDesignate: 300000 / 1000000,
    minutesPerCompound: 1,
    isSushi: true,
    kogefarmFee: 0.01,
    kogefarmComment: ' (HIGH RISK)',
    multiplier: '0X',
    underlyingWebsite: 'https://iron.finance',
    platform: 'Iron'
  },

  {
    pid: 4,
    lpSymbol: 'Titan-Iron LP',
    lpAddresses: {
      80001: '',
      137: '0x35c1895DAC1e2432b320e2927b4F71a0D995602F',
    },
    masterChefAddresses: {
      80001: '',
      137: '0xb444d596273C66Ac269C33c30Fbb245F4ba8A79d',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      137: '0x9A48219D7b3106BaAD3F5D6Cf50d94F1Cf747C8D',
    },
    token: tokens.titan,
    quoteToken: tokens.iron,
    rewardPerBlock: 0,
    poolWeightDesignate: 100000 / 100000,
    minutesPerCompound: 1,
    isSushi: true,
    kogefarmFee: 0.01,
    kogefarmComment: ' (HIGH RISK)',
    underlyingWebsite: 'https://iron.finance',
    multiplier: '0X',
    platform: 'Iron'
  },
  //NEXTFARMHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)

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

export const POLYGON_FARMS: FarmConfig[] = farms

export const MOONRIVER_FARMS: FarmConfig[] = [
  {
    pid: 21,
    lpSymbol: 'Solar-Movr LP',
    lpAddresses: {
      80001: '',
      1285: '0x7eDA899b3522683636746a2f3a7814e6fFca75e1',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      1285: '0x0a5E266afB071CB0F69310706154F2893a208D1c',
    },
    token: tokens.solar,
    quoteToken: tokens.movr,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 6000 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 23,
    lpSymbol: 'Solar-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0xdb66BE1005f5Fe1d2f486E75cE3C50B52535F886',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      1285: '0x4c42f8224E16b40d79BeB775bf1df1a63967FC7c',
    },
    token: tokens.solar,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 2300 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 22,
    lpSymbol: 'Movr-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0xe537f70a8b62204832B8Ba91940B77d3f79AEb81',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      1285: '0xaE3BDcf55FE53408EC4ad07480368e04c795575d',
    },
    token: tokens.movr,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 600 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 20,
    lpSymbol: 'USDC-Dai LP',
    lpAddresses: {
      80001: '',
      1285: '0xFE1b71BDAEE495dCA331D28F5779E87bd32FbE53',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      1285: '0x005d1d02e396D4B47DD92e3c068a6Cec153238cd',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 24,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0x384704557F73fBFAE6e9297FD1E6075FC340dbe5',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      1285: '0xFA45b55c3a2bA74B9De476FC01658F9352209390',
    },
    token: tokens.busd,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 25,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      80001: '',
      1285: '0x2a44696DDc050f14429bd8a4A05c750C6582bF3b',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 13,
    jarAddresses: {
      80001: '',
      1285: '0x31645AEFBCF37127f511b7BD9A7bfdA7427AeF8e',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 26,
    lpSymbol: 'Mai-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0x55Ee073B38BF1069D5F1Ed0AA6858062bA42F5A9',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      1285: '0xA1d30Bee6896e07B8713E73b56A6c35a559DEa50',
    },
    token: tokens.mimatic,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 33,
    lpSymbol: 'MIM-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0x9051fB701d6D880800e397e5B5d46FdDfAdc7056',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 19,
    jarAddresses: {
      80001: '',
      1285: '0xAc6DebA557fbeb17de8E0F88bFE92eAB54724018',
    },
    token: tokens.mim,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 27,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      80001: '',
      1285: '0xA0D8DFB2CC9dFe6905eDd5B71c56BA92AD09A3dC',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      1285: '0xB31E2E391251705b53983221AAB3fdB0c728C51f',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 28,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      80001: '',
      1285: '0xfb1d0D6141Fc3305C63f189E39Cc2f2F7E58f4c2',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      1285: '0x6948E97d777Ea8EfD756dFa5E679C0D9be3A4E14',
    },
    token: tokens.bnb,
    quoteToken: tokens.busd,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 29,
    lpSymbol: 'BTC-USDC LP',
    lpAddresses: {
      80001: '',
      1285: '0x83d7a3fc841038E8c8F46e6192BBcCA8b19Ee4e7',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 12,
    jarAddresses: {
      80001: '',
      1285: '0x02C4B3a6FF8b187fb381CD3461229e2c77E0B5f9',
    },
    token: tokens.btc,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 270 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 30,
    lpSymbol: 'Matic-MOVR LP',
    lpAddresses: {
      80001: '',
      1285: '0x29633cc367AbD9b16d327Adaf6c3538b6e97f6C0',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 14,
    jarAddresses: {
      80001: '',
      1285: '0xA5c44621FDDd448032d22987845c24Edf5c2953D',
    },
    token: tokens.matic,
    quoteToken: tokens.movr,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 135 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 31,
    lpSymbol: 'AVAX-MOVR LP',
    lpAddresses: {
      80001: '',
      1285: '0xb9a61ac826196AbC69A3C66ad77c563D6C5bdD7b',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 15,
    jarAddresses: {
      80001: '',
      1285: '0xa5133eE054a02fDEB7A03909B4bfd73b3C7e16A2',
    },
    token: tokens.avax,
    quoteToken: tokens.movr,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 135 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

  {
    pid: 32,
    lpSymbol: 'FTM-MOVR LP',
    lpAddresses: {
      80001: '',
      1285: '0x1eebed8F28A6865a76D91189FD6FC45F4F774d67',
    },
    masterChefAddresses: {
      80001: '',
      1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
    },
    masterChefPid: 18,
    jarAddresses: {
      80001: '',
      1285: '0xa70c8268152D2B06E2313de2273F82D9B031b35a',
    },
    token: tokens.ftm,
    quoteToken: tokens.movr,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95 * 2 / 12, // Fix reward block time
    poolWeightDesignate: 135 / 12120,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },


]

export const FANTOM_FARMS: FarmConfig[] = [
  {
    pid: 28,
    lpSymbol: 'MIM-fUSDT-USDC LP',
    lpAddresses: {
      80001: '',
      250: '0x2dd7C9371965472E5A5fD28fbE165007c61439E1',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x37Cf490255082ee50845EA4Ff783Eb9b6D1622ce',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      250: '0x0a5E266afB071CB0F69310706154F2893a208D1c',
    },
    token: tokens.mim3pool,
    quoteToken: tokens.mim3pool,
    rewardToken: tokens.spell,
    rewardPerBlock: 182.894918981 * 2 / 1.03, // 0.625
    poolWeightDesignate: 3000 / 3000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://abracadabra.money/farm-stand',
    platform: 'Abracadabra',
    kogefarmComment: ' (Curve)'
  },
  {
    pid: 35,
    lpSymbol: 'Beets-USDC LP',
    lpAddresses: {
      80001: '',
      250: '0x03c6B3f09D2504606936b1A4DeCeFaD204687890',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 0,
    jarAddresses: {
      80001: '',
      250: '0xc8A4D5611F31f943eC22cd07C7078b7E4d4B9161',
    },
    token: tokens.beetsusdcx,
    quoteToken: tokens.beetsusdcx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 150 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true,
  },

  {
    pid: 43,
    lpSymbol: 'Beets-wFTM LP',
    lpAddresses: {
      80001: '',
      250: '0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 9,
    jarAddresses: {
      80001: '',
      250: '0xC9f625e17650F69CA877f016aa2e9BfEC17D3Ed5',
    },
    token: tokens.beetsftmx,
    quoteToken: tokens.beetsftmx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 250 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 36,
    lpSymbol: 'wFTM-BTC-ETH LP',
    lpAddresses: {
      80001: '',
      250: '0xd47D2791d3B46f9452709Fa41855a045304D6f9d',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 1,
    jarAddresses: {
      80001: '',
      250: '0xdFdd4e400B429979b774F8f0a1d106A3448350bC',
    },
    token: tokens.ftmbtcethx,
    quoteToken: tokens.ftmbtcethx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 80 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true,
  },

  {
    pid: 37,
    lpSymbol: 'wFTM-Sonata',
    lpAddresses: {
      80001: '',
      250: '0xf0e2c47d4C9FBBbc2F2E19ACdaA3c773A3ECD221',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 3,
    jarAddresses: {
      80001: '',
      250: '0xf58d2F9A4c1F6b469Df1E77DAD99C0B99e82a722',
    },
    token: tokens.sonatax,
    quoteToken: tokens.sonatax,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 70 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 38,
    lpSymbol: 'USDC-Eth LP',
    lpAddresses: {
      80001: '',
      250: '0xA07De66AeF84e2c01D88a48D57D1463377Ee602b',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      250: '0x380DF95878feF749b19E468Ef4C1698a224a8990',
    },
    token: tokens.usdcethx,
    quoteToken: tokens.usdcethx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 32 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 39,
    lpSymbol: 'BTC-USDC LP',
    lpAddresses: {
      80001: '',
      250: '0x22B30B00e6796Daf710fBE5cAFBFc9Cdd1377f2A',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 5,
    jarAddresses: {
      80001: '',
      250: '0x451918789b42814A314Ea2856d94E4ddB4d3430f',
    },
    token: tokens.btcusdcx,
    quoteToken: tokens.btcusdcx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 32 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 40,
    lpSymbol: 'BTC-Eth-USDC LP',
    lpAddresses: {
      80001: '',
      250: '0x6FDC8415B654B0F60475944A0b9421Dc36ee1363',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 6,
    jarAddresses: {
      80001: '',
      250: '0xb7F0b6d865B187D6E8d0FF734D4c6d616650C705',
    },
    token: tokens.btcethusdcx,
    quoteToken: tokens.btcethusdcx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 32 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 41,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0xcdF68a4d525Ba2E90Fe959c74330430A5a6b8226',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 8,
    jarAddresses: {
      80001: '',
      250: '0x184E361C92157bd44A28B6C4bC069588Ec0E97E2',
    },
    token: tokens.usdcftmx,
    quoteToken: tokens.usdcftmx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 100 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 42,
    lpSymbol: 'MIM-fUSDT-USDC LP',
    lpAddresses: {
      80001: '',
      250: '0xD163415BD34EF06f57C58D2AEd5A5478AfB464cC',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      250: '0xE60Ff9b586E645F80Cd761890F0C548B512A55b2',
    },
    token: tokens.mimfusdtusdcx,
    quoteToken: tokens.mimfusdtusdcx,
    rewardToken: tokens.beets,
    rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
    poolWeightDesignate: 25 / 830,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.beethovenx.io/#/farm',
    platform: 'Beethoven-X',
    kogefarmComment: ' (Beets)',
    isBeethoven: true
  },

  {
    pid: 27,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0xe7E90f5a767406efF87Fdad7EB07ef407922EC1D',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 4,
    jarAddresses: {
      80001: '',
      250: '0xD1FDFB2BE4fd5e7Ee5b9D6E91538b2cf073B8AA2',
    },
    token: tokens.ftm,
    quoteToken: tokens.usdc,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 80 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 29,
    lpSymbol: 'fUSDT-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0xd14Dd3c56D9bc306322d4cEa0E1C49e9dDf045D4',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 17,
    jarAddresses: {
      80001: '',
      250: '0xc447E9a3fFbCa924Aa8CF9A2301975515DaE9661',
    },
    token: tokens.ftm,
    quoteToken: tokens.fusdt,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 80 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 30,
    lpSymbol: 'MIM-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 30,
    jarAddresses: {
      80001: '',
      250: '0xfF3349c817B795a0A44c74B823a765B31C226038',
    },
    token: tokens.ftm,
    quoteToken: tokens.mim,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 80 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 31,
    lpSymbol: 'LINK-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0xd061c6586670792331E14a80f3b3Bb267189C681',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 11,
    jarAddresses: {
      80001: '',
      250: '0x02bc4F42b998FC23355c780A756446d9998d78dE',
    },
    token: tokens.link,
    quoteToken: tokens.ftm,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 20 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 32,
    lpSymbol: 'CRV-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0x374C8ACb146407Ef0AE8F82BaAFcF8f4EC1708CF',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 10,
    jarAddresses: {
      80001: '',
      250: '0xB49fecd52B88EFA8248BF2408e4ff08EaFC85b91',
    },
    token: tokens.crv,
    quoteToken: tokens.ftm,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 29 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 33,
    lpSymbol: 'ICE-FTM LP',
    lpAddresses: {
      80001: '',
      250: '0x936D23C83c2469f6a14B9f5bEaec13879598A5aC',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 7,
    jarAddresses: {
      80001: '',
      250: '0xFc68488ca2DdEBBdcd980AafDde2E3374F5AD222',
    },
    token: tokens.ice,
    quoteToken: tokens.ftm,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 20 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },
  {
    pid: 34,
    lpSymbol: 'SPELL-fUSDT LP',
    lpAddresses: {
      80001: '',
      250: '0x31c0385DDE956f95D43Dac80Bd74FEE149961f4c',
    },
    masterChefAddresses: {
      80001: '',
      250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
    },
    masterChefPid: 40,
    jarAddresses: {
      80001: '',
      250: '0x5a94Fd3A5D58fbB97F817223aA2Ea6773fE7dA57',
    },
    token: tokens.fusdt,
    quoteToken: tokens.spell,
    rewardToken: tokens.spirit,
    rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
    poolWeightDesignate: 40 / 1000,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://app.spiritswap.finance/',
    platform: 'SpiritSwap',
    kogefarmComment: ' (Spirit)',
    isSpirit: true,
  },

]

export default farms
