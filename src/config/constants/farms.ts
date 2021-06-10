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
    pid: 1,
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
    rewardPerBlock: 14.797916666666666666,
    poolWeightDesignate: 300000/1000000,
    minutesPerCompound: 1,
    isSushi: true,
    kogefarmFee: 0.01,
  },

  {
    pid: 2,
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
    rewardPerBlock: 2.219675925925926,
    poolWeightDesignate: 100000/100000,
    minutesPerCompound: 1,
    isSushi: true,
    kogefarmFee: 0.01,
  },

  {
    pid: 3,
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
    rewardPerBlock: 14.797916666666666,
    poolWeightDesignate: 350000/1000000,
    minutesPerCompound: 1,
    kogefarmFee: 0.005,
    kogefarmComment: ' (Quick)',
    rewardToken: tokens.titan,
  },

  {
    pid: 4,
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
    rewardPerBlock: 14.797916666666666,
    poolWeightDesignate: 350000/1000000,
    minutesPerCompound: 1,
    isSushi: true,
    kogefarmFee: 0.005,
    kogefarmComment: ' (Sushi)',
    rewardToken: tokens.titan,
  },

  {
    pid: 5,
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
    poolWeightDesignate: 3500/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
  },

  {
    pid: 6,
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
    poolWeightDesignate: 5000/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    kogefarmComment: ' (Quick)'
  },

  {
    pid: 7,
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
    poolWeightDesignate: 5000/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    isSushi: true,
    kogefarmComment: ' (Sushi)'
  },

  {
    pid: 8,
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
    rewardPerBlock: 0.75,
    poolWeightDesignate: 3500/34000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
  },

  {
    pid: 9,
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
    rewardPerBlock: 0.75,
    poolWeightDesignate: 12500/34000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
  },

  {
    pid: 10,
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
    rewardPerBlock: 0.75,
    poolWeightDesignate: 10000/34000,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
  },


  {
    pid: 11,
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
    rewardPerBlock: 0.5,
    poolWeightDesignate: 10000/43650,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
  },

  {
    pid: 12,
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
    rewardPerBlock: 0.5,
    poolWeightDesignate: 10000/43650,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
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
