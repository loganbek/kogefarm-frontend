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
     underlyingWebsite: 'https://kogecoin.io'
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
     rewardPerBlock: 14.1319444444445,
     poolWeightDesignate: 14000/22500,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     isSushi: true,
   },

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
     rewardPerBlock: 14.1319444444445,
     poolWeightDesignate: 1000/22500,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     kogefarmComment: ' (DinoSwap)',
   },

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
     rewardPerBlock: 14.1319444444445,
     poolWeightDesignate: 500/22500,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     kogefarmComment: ' (DinoSwap)',
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
     rewardPerBlock: 14.1319444444445,
     poolWeightDesignate: 500/22500,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     kogefarmComment: ' (DinoSwap)',
   },

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
     rewardPerBlock: 14.1319444444445,
     poolWeightDesignate: 500/22500,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://dinoswap.exchange/',
     kogefarmComment: ' (DinoSwap)',
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
        rewardPerBlock: 15.854895991882293252*2,
        poolWeightDesignate: 100000/150000,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        kogefarmComment: ' (Iron)',
        underlyingWebsite: 'https://app.iron.finance/',
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
        rewardPerBlock: 15.854895991882293252*2,
        poolWeightDesignate: 25000/150000,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isDfyn: true,
        kogefarmComment: ' (Dfyn)',
        underlyingWebsite: 'https://app.iron.finance/'
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
        rewardPerBlock: 15.854895991882293252*2,
        poolWeightDesignate: 25000/150000,
        minutesPerCompound: 5,
        kogefarmFee: 0.01,
        isFirebird: true,
        kogefarmComment: ' (Firebird)',
        underlyingWebsite: 'https://app.iron.finance/'
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
        poolWeightDesignate: 1000/1950,
        minutesPerCompound: 5,
        kogefarmFee: 0.01,
        depositFee: 0.001,
        underlyingWebsite: 'https://swamp.finance/polygon/',
      },

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
        rewardPerBlock: 0.107205733,
        poolWeightDesignate: 500/1950,
        minutesPerCompound: 5,
        depositFee: 0.001,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://swamp.finance/polygon/',
      },

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
        poolWeightDesignate: 1000/1950,
        minutesPerCompound: 5,
        kogefarmFee: 0.01,
        depositFee: 0.001,
        kogefarmComment: ' (legacy)',
        underlyingWebsite: 'https://swamp.finance/polygon/',
        multiplier: '0X',
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
        poolWeightDesignate: 1000/1950,
        minutesPerCompound: 5,
        kogefarmFee: 0.01,
        depositFee: 0.001,
        underlyingWebsite: 'https://swamp.finance/polygon/',
        kogefarmComment: ' (legacy)',
        multiplier: '0X',
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
        poolWeightDesignate: 500/1950,
        minutesPerCompound: 5,
        depositFee: 0.001,
        kogefarmFee: 0.01,
        kogefarmComment: ' (legacy)',
        underlyingWebsite: 'https://swamp.finance/polygon/',
        multiplier: '0X',
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
        poolWeightDesignate: 500/1950,
        minutesPerCompound: 5,
        depositFee: 0.001,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://swamp.finance/polygon/',
        kogefarmComment: ' (legacy)',
        multiplier: '0X',
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
         rewardPerBlock1: 0.000798611111111111*2*1.7/65.047, // 0.8064
         rewardPerBlock2: 0.107205733*25/2050,
         depositFee: 0.001,
         poolWeightDesignate: 1,
         minutesPerCompound: 5,
         kogefarmFee: 0.01,
         underlyingWebsite: 'https://swamp.finance/polygon/',
         kogefarmComment: ' (pSwamp)',
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
     poolWeightDesignate: 125/375,
     minutesPerCompound: 1,
     kogefarmFee: 0.005,
     depositFee: 0.005,
     underlyingWebsite: 'https://mai.finance'
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
     poolWeightDesignate: 250/375,
     minutesPerCompound: 1,
     kogefarmFee: 0.01+0.005,
     depositFee: 0.005,
     underlyingWebsite: 'https://mai.finance'
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
     rewardPerBlock: 0.000462962962962962*2,
     poolWeightDesignate: 1,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://quickswap.exchange/',
     kogefarmComment: ' (QuickSwap)',
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
     rewardPerBlock: 0.000798611111111111*2,
     poolWeightDesignate: 1,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://quickswap.exchange',
     kogefarmComment: ' (QuickSwap)',
   },


/*
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
     rewardPerBlock1: 0.000462962962962962*2*1.49/61.543, // 0.8064
     rewardPerBlock2: 0.107205733*25/2050,
     poolWeightDesignate: 1,
     depositFee: 0.001,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://swamp.finance/polygon',
     kogefarmComment: ' (pSwamp)',
   },
*/
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
     rewardPerBlock1: 0.8066, // 0.8064
     rewardPerBlock2: 0.295,
     poolWeightDesignate: 1,
     minutesPerCompound: 1,
     kogefarmFee: 0,
     kogefarmComment: ' (Curve)',
     underlyingWebsite: 'https://polygon.curve.fi',
   },

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
     rewardPerBlock1: 0.4575, // 0.4575
     rewardPerBlock2: 0.2899, // 0.2901
     poolWeightDesignate: 1,
     minutesPerCompound: 1,
     kogefarmFee: 0.005,
     kogefarmComment: ' (Curve)',
     underlyingWebsite: 'https://polygon.curve.fi',
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
    rewardPerBlock1: 0.208, // 0.22
    rewardPerBlock2: 0.1316, // 0.1315
    poolWeightDesignate: 1,
    minutesPerCompound: 1,
    kogefarmFee: 0,
    kogefarmComment: ' (Curve)',
    underlyingWebsite: 'https://polygon.curve.fi',
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
     rewardPerBlock: 0.462962962962962962*2,
     poolWeightDesignate: 1,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
     underlyingWebsite: 'https://polyquity.org'
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
     rewardPerBlock: 1.26839167935058346*2,
     poolWeightDesignate: 1,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
     underlyingWebsite: 'https://polyquity.org'
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
     poolWeightDesignate: 2025/10750,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true,
   },

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

   {
     pid: 65,
     lpSymbol: 'PWINGS-Matic',
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
     poolWeightDesignate: 5500/10750,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true
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
     lpSymbol: 'pForce-Matic',
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
     poolWeightDesignate: 500/10750,
     minutesPerCompound: 5,
     kogefarmFee: 0.015+0.03,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true,
     kogefarmComment: ' (JetSwap)',
   },

   {
     pid: 67,
     lpSymbol: 'USDC-Dai',
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
     poolWeightDesignate: 250/10125,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true,
     kogefarmComment: ' (JetSwap)',
   },

   {
     pid: 66,
     lpSymbol: 'ETH-Matic',
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
     poolWeightDesignate: 250/10125,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true,
     kogefarmComment: ' (JetSwap)',
   },

   {
     pid: 68,
     lpSymbol: 'USDC-Matic',
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
     poolWeightDesignate: 250/10125,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polygon.jetswap.finance/farms',
     isJetSwap: true,
     kogefarmComment: ' (JetSwap)',
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
     poolWeightDesignate: 160092359.945236650070580187/72244873.856090664051044687,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://gravityfinance.io/',
   },
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
   },

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
     rewardPerBlock: 32.058534803679637546,
     poolWeightDesignate: 145/715,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
     underlyingWebsite: 'https://polyroll.org'
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
     rewardPerBlock: 32.058534803679637546,
     poolWeightDesignate: 280/720,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
     underlyingWebsite: 'https://polyroll.org'
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
     rewardPerBlock: 32.058534803679637546,
     poolWeightDesignate: 120/720,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isApe: true,
     kogefarmComment: ' (Ape)',
     underlyingWebsite: 'https://polyroll.org'
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
     poolWeightDesignate: 10000/54000,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polyvertex.finance'
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
     poolWeightDesignate: 10000/54000,
     minutesPerCompound: 5,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polyvertex.finance'
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
     poolWeightDesignate: 4000/30700,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
     underlyingWebsite: 'https://farm.boneswap.finance'
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
     poolWeightDesignate: 600/30700,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.boneswap,
     kogefarmComment: ' (BoneSwap)',
     depositFee: 0.04,
     underlyingWebsite: 'https://farm.boneswap.finance'
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
     poolWeightDesignate: 1000/30700,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.boneswap,
     kogefarmComment: ' (BoneSwap)',
     depositFee: 0.04,
     underlyingWebsite: 'https://farm.boneswap.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 10000/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 10000/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.bone,
     kogefarmComment: ' (Bone)',
     underlyingWebsite: 'https://bone.polypup.finance'
   },

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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.bone,
     kogefarmComment: ' (Bone)',
     underlyingWebsite: 'https://bone.polypup.finance'
   },

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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.bone,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
   },

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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     rewardToken: tokens.bone,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
   },

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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 2500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Bone)',
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 2000/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 1500/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
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
     rewardPerBlock: 0.025,
     poolWeightDesignate: 2000/46500,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Bone)',
     depositFee: 0.04,
     underlyingWebsite: 'https://bone.polypup.finance'
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
        rewardPerBlock: 2,
        poolWeightDesignate: 7000/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        underlyingWebsite: 'https://polycrystal.finance'
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
        rewardPerBlock: 2,
        poolWeightDesignate: 7000/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        underlyingWebsite: 'https://polycrystal.finance'
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
        rewardPerBlock: 2,
        poolWeightDesignate: 800/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        depositFee: 0.02,
        underlyingWebsite: 'https://polycrystal.finance'
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
        rewardPerBlock: 2,
        poolWeightDesignate: 150/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        depositFee: 0.05,
        underlyingWebsite: 'https://polycrystal.finance'
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
        rewardPerBlock: 2,
        poolWeightDesignate: 1750/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        underlyingWebsite: 'https://polycrystal.finance'
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
        rewardPerBlock: 3,
        poolWeightDesignate: 100/23005,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        underlyingWebsite: 'https://polycrystal.finance'
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
           poolWeightDesignate: 60000000000000000000/358000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://augury.finance'
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
           poolWeightDesignate: 100000000000000000000/358000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           underlyingWebsite: 'https://augury.finance'
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
           poolWeightDesignate: 50000000000000000000/358000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           isSushi: true,
           underlyingWebsite: 'https://augury.finance'
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
           poolWeightDesignate: 50000000000000000000/358000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           isSushi: true,
           underlyingWebsite: 'https://augury.finance'
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
     poolWeightDesignate: 2500/28000,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polyyeld.finance'
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
     poolWeightDesignate: 0/28000,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Quick)',
     underlyingWebsite: 'https://polyyeld.finance',
     multiplier: '0X',
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
     poolWeightDesignate: 4000/28000,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Sushi)',
     underlyingWebsite: 'https://polyyeld.finance'
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
     poolWeightDesignate: 4000/28000,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     kogefarmComment: ' (Ape)',
     underlyingWebsite: 'https://polyyeld.finance'
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
     poolWeightDesignate: 4000/28000,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     underlyingWebsite: 'https://polyyeld.finance'
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
    rewardPerBlock: 1500,
    poolWeightDesignate: 60/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.005,
    isWault: true,
    underlyingWebsite: 'https://wault.finance'
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
    rewardPerBlock: 1500,
    poolWeightDesignate: 460/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
    underlyingWebsite: 'https://wault.finance'
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
    rewardPerBlock: 1500,
    poolWeightDesignate: 92/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
    underlyingWebsite: 'https://wault.finance'
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
    poolWeightDesignate: 3500/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    underlyingWebsite: 'https://polycat.finance'
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
    poolWeightDesignate: 5000/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    kogefarmComment: ' (Quick)',
    underlyingWebsite: 'https://polycat.finance'
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
    poolWeightDesignate: 5000/31110,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    isSushi: true,
    kogefarmComment: ' (Sushi)',
    underlyingWebsite: 'https://polycat.finance'
  },

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
    poolWeightDesignate: 5000/30960,
    minutesPerCompound: 1,
    kogefarmFee: 0.000,
    isDfyn: true,
    kogefarmComment: ' (Dfyn)',
    underlyingWebsite: 'https://polycat.finance'
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
    rewardPerBlock: 3,
    poolWeightDesignate: 250/23005,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
    underlyingWebsite: 'https://polycat.finance'
  },

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
    rewardPerBlock: 0.25,
    poolWeightDesignate: 3500/34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz'
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
    rewardPerBlock: 0.25,
    poolWeightDesignate: 12500/34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz'
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
    rewardPerBlock: 0.25,
    poolWeightDesignate: 10000/34500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://piratedice.xyz'
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
    rewardPerBlock: 0.5,
    poolWeightDesignate: 10000/63250,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygaj.finance'
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
    rewardPerBlock: 0.5,
    poolWeightDesignate: 10000/63250,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://polygaj.finance'
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
   underlyingWebsite: 'https://iron.finance'
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
  poolWeightDesignate: 300000/1000000,
  minutesPerCompound: 1,
  isSushi: true,
  kogefarmFee: 0.01,
  kogefarmComment: ' (HIGH RISK)',
  multiplier: '0X',
  underlyingWebsite: 'https://iron.finance'
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
  poolWeightDesignate: 100000/100000,
  minutesPerCompound: 1,
  isSushi: true,
  kogefarmFee: 0.01,
  kogefarmComment: ' (HIGH RISK)',
  underlyingWebsite: 'https://iron.finance',
  multiplier: '0X',
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
