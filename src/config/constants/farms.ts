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
     isSushi: true
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
     rewardPerBlock: 40.036567537489797621,
     poolWeightDesignate: 130/720,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
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
     rewardPerBlock: 40.036567537489797621,
     poolWeightDesignate: 280/720,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isSushi: true,
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
     rewardPerBlock: 40.036567537489797621,
     poolWeightDesignate: 120/720,
     minutesPerCompound: 1,
     kogefarmFee: 0.01,
     isApe: true,
     kogefarmComment: ' (Ape)'
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
        rewardPerBlock: 3,
        poolWeightDesignate: 6000/21551,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
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
        rewardPerBlock: 3,
        poolWeightDesignate: 6000/21551,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
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
        rewardPerBlock: 3,
        poolWeightDesignate: 1000/21700,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        depositFee: 0.02,
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
        rewardPerBlock: 3,
        poolWeightDesignate: 150/21551,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
        depositFee: 0.05,
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
        rewardPerBlock: 3,
        poolWeightDesignate: 1750/21551,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
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
        poolWeightDesignate: 150/21551,
        minutesPerCompound: 1,
        kogefarmFee: 0.01,
        isApe: true,
        rewardToken: tokens.crystl,
        kogefarmComment: ' (Crystl)',
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
           poolWeightDesignate: 60000000000000000000/338000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
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
           poolWeightDesignate: 100000000000000000000/338000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
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
           poolWeightDesignate: 40000000000000000000/338000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           isSushi: true,
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
           poolWeightDesignate: 40000000000000000000/338000000000000000000 ,
           minutesPerCompound: 1,
           kogefarmFee: 0.01,
           isSushi: true,
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
    poolWeightDesignate: 90/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.005,
    isWault: true,
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
    poolWeightDesignate: 490/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
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
    poolWeightDesignate: 100/1500,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isWault: true,
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
    kogefarmComment: ' (Quick)'
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
    kogefarmComment: ' (Sushi)'
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
    kogefarmComment: ' (Dfyn)'
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
    poolWeightDesignate: 250/21551,
    minutesPerCompound: 1,
    kogefarmFee: 0.01,
    isApe: true,
    rewardToken: tokens.crystl,
    kogefarmComment: ' (Crystl)',
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
