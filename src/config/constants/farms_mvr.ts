import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 20,
    lpSymbol: 'USDC-Dai',
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
      1285: '0x2a5d9C979deB9da7F5Bb208b94C704e31B18e423',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
    rewardToken: tokens.solar,
    rewardPerBlock: 3.95,
    poolWeightDesignate: 270 / 11445,
    minutesPerCompound: 60,
    kogefarmFee: 0.01,
    underlyingWebsite: 'https://solarbeam.io/',
    platform: 'SolarBeam'
  },

]

export default farms
