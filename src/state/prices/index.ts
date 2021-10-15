/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PriceApiResponse, PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import { PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import multicall from 'utils/multicall'
import erc20 from 'config/abi/erc20.json'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'
import { SUPPORTED_CHAINS } from 'config/index'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'

const initialState: PriceState = {
  isLoading: false,
  lastUpdated: null,
  data: null,
}
// https://api.coingecko.com/api/v3/simple/price?ids=usd-coin%2Cmatic-network&vs_currencies=usd


// Thunks
export const fetchPrices = createAsyncThunk<PriceApiThunk>('prices/fetch', async () => {
  //  const response = await fetch('https://api.pancakeswap.info/api/v2/tokens')
  //  const data = (await response.json()) as PriceApiResponse
  //  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
  const data = { "usdc": { "usd": "1.0" } } as GeicoApiList

  /**
   * POLYGON ADDRESSES
   */
  // Fetch KogeCoin price from LP pool
  const kogecoinAddr = '0x13748d548D95D78a3c83fe3F32604B4796CFfa23'
  const maticAddr = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  const usdcAddr = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
  const ethAddr = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
  const ethMaticLP = '0xadbF1854e5883eB8aa7BAf50705338739e558E5b'
  const quickAddr = '0x831753DD7087CaC61aB5644b308642cc1c33Dc13'
  const quickMaticLP = '0x019ba0325f1988213D448b3472fA1cf8D07618d7'
  const maticUSDCLP = '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827'
  const kogeMaticLP = '0x3885503aEF5E929fCB7035FBDcA87239651C8154'
  const titanAddr = '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'
  const titanMaticLP = '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a'
  const bootyAddr = '0xd12dc5319808bb31ba95ae5764def2627d5966ce'
  const bootyMaticLP = '0x57B6A39c06DfF5678266e36dca2Cfa86da675894'
  const ironAddr = '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'
  const ironUSDCLP = '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc'
  const fishAddr = '0x3a3df212b7aa91aa0402b9035b098891d276572b'
  const fishMaticLP = '0x289cf2B63c5Edeeeab89663639674d9233E8668E'
  const wexAddr = '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB'
  const wexUSDCLP = '0x5DE6a3CcA10d3F788EEdbD4923e31D4658bf6f9a'
  const miMaticAddr = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
  const qidaoAddr = '0x580A84C73811E1839F75d86d75d88cCa0c241fF4'
  const miMaticUSDCLP = '0x160532D2536175d65C03B97b0630A9802c274daD'
  const miMaticQidaoLP = '0x7AfcF11F3e2f01e71B7Cc6b8B5e707E42e6Ea397'
  const omenAddr = '0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E'
  const omenUSDCLP = '0x50409De292f5F821888702e9538Bf15Fa273dFE6'
  const yeldAddr = '0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891'
  const yeldUSDCLP = '0xAD8f4c66b28756458Fc419AA67aD2207A21A6997'
  const crystlAddr = '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64'
  const crystlMaticLP = '0xB8e54c9Ea1616beEBe11505a419DD8dF1000E02a'
  const rollAddr = '0xC68e83a305b0FaD69E264A1769a0A070F190D2d6'
  const rollMaticLP = '0x905DCc700fcce9a49b7D907E371230995a45ebCE'
  const pyqAddr = '0x5a3064CbDCCF428ae907796cF6aD5a664CD7F3d8'
  const pyqUSDCLP = '0xd3924Ad8F881514efF89503Be9027B877E9e2bd0'
  const boneAddr = '0x6bb45cEAC714c52342Ef73ec663479da35934bf7'
  const boneMaticLP = '0xeb168C9D678dC34D64337F4eA12cf14ed6fbE34B'
  const pupAddr = '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59'
  const pupMaticLP = '0xBC68d2A5920c4ffaEa20E2BE48a0E09055481976'
  const btcAddr = '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6'
  const btcUSDCLP = '0xF6a637525402643B0654a54bEAd2Cb9A83C8B498'
  const boneswapAddr = '0x80244C2441779361F35803b8C711C6c8fC6054a3'
  const boneswapMaticLP = '0x4026895A93D720083E4469eE675156A8Ff8D3853'
  const pwingsAddr = '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25'
  const pwingsMaticLP = '0xA0A6e9A5185d5737CF6F7920CB417EA2F07F03B3'
  const gfiAddr = '0x874e178A2f3f3F9d34db862453Cd756E7eAb0381'
  const gfiEthLP = '0x1587663E8F475E69eA2DBb38482C8c4EE9F388Fb'
  const iceAddr = '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef'
  const iceUSDCLP = '0x34832D9AC4127a232C1919d840f7aaE0fcb7315B'
  const crvAddr = '0x172370d5Cd63279eFa6d502DAB29171933a610AF'
  const crvWETHAddr = '0x396E655C309676cAF0acf4607a868e0CDed876dB'
  const vertAddr = '0x72572CCf5208b59f4BcC14e6653d8c31Cd1fC5a0'
  const vertUSDCLP = '0x668269d6E5D2c2dE31D132Ac218044211643622B'
  const dinoAddr = '0xAa9654BECca45B5BDFA5ac646c939C62b527D394'
  const dinoUSDCLP = '0x3324af8417844e70b81555A6D1568d78f4D4Bf1f'
  const pswampAddr = '0x5f1657896B38c4761dbc5484473c7A7C845910b6'
  const pswampMaticLP = '0x1A477272f6030EAB135Cb3BA40646f3eb26b382a'
  const lithiumAddr = '0xfE1a200637464FBC9B60Bc7AeCb9b86c0E1d486E'
  const lithiumMaticLP = '0xF47553EB96b8665d9F258E3F4FC9A9e7811C3C2B'
  const linkAddr = '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'
  const linkEthLP = '0x5cA6CA6c3709E1E6CFe74a50Cf6B2B6BA2Dadd67'
  const sushiAddr = '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a'
  const sushiEthLP = '0xb5846453B67d0B4b4Ce655930Cf6E4129F4416D7'
  const ballAddr = '0x883aBe4168705d2e5dA925d28538B7a6AA9d8419'
  const ballMaticLP = '0xe11eb426206960e9533828031cDFED0B4B61749C'
  const bananaAddr = '0x5d47bAbA0d66083C52009271faF3F50DCc01023C'
  const bananaMaticLP = '0x034293F21F1cCE5908BC605CE5850dF2b1059aC0'
  const myfriendsAddr = '0xa509Da749745Ac07E9Ae47E7a092eAd2648B47f2'
  const myfriendsUSDCLP = '0xf66502FAbC81e64AD6E3A8Fd60bDA4a705A72BD0'
  const arcadiumAddr = '0x3F374ed3C8e61A0d250f275609be2219005c021e'
  const arcadiumUSDCLP = '0xB5DB659c561Dc84ec9D42d4277a5e01F3B69537b'
  const shieldAddr = '0xF239E69ce434c7Fb408b05a0Da416b14917d934e'
  const shieldMaticLP = '0x982c1F90381e31e7b7dbbA8708126532B7cb7dF6'
  const irisAddr = '0xdaB35042e63E93Cc8556c9bAE482E5415B5Ac4B1'
  const irisMaticLP = '0x86ad6271809f350522085F95F5A67d46ff7ed3AB'
  const alphaAddr = '0x0B048D6e01a6b9002C291060bF2179938fd8264c'
  const alphaMaticLP = '0x79b368B3Aa34fF2044F7869024b5367A284D3b0E'
  const spadeAddr = '0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19'
  const spadeUSDCLP = '0x8f2172568Ad3b2024b8CB29b03279E4b3d4849c8'
  const elkAddr = '0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C'
  const elkMaticLP = '0x7Cb0703aa37601a02798BDFF63A18aF2dD082572'
  const collarAddr = '0x8DF26a1BD9bD98e2eC506fc9d8009954716A05DC'
  const collarMaticLP = '0xbBe5F4998Cc537A91e7b90C7925D1c7C5bAb7ee0'
  const pbrewAddr = '0xb5106A3277718eCaD2F20aB6b86Ce0Fee7A21F09'
  const pbrewMaticLP = '0x4f03233c742Ea20e73b46d5E33242b7770274ab8'
  const pawAddr = '0xBC5b59EA1b6f8Da8258615EE38D40e999EC5D74F'
  const pawMaticLP = '0xCdf59DE1d771E265aD8A1571532181e137258f44'
  const betaAddr = '0xaC3090B7042FCA2cDBF233022e4a9823a032600c'
  const betaMaticLP = '0x2F2C4A52616663D15E3fACe26Db6305AFe549EDc'
  // dQuick
  const dQuickAddr = '0xf28164A485B0B2C90639E47b0f377b4a438a16B1'
  //LPTOKENADDRESSHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)
  //HARVESTTOKENADDRESSESHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)
  // Curve
  const amDai = '0x27f8d03b3a2196956ed754badc28d73be8830a6e'
  const amUSDC = '0x1a13f4ca1d028320a707d99520abfefca3998b7f'
  const amUSDT = '0x60d55f02a771d515e077c9c2403a1ef324885cec'
  const swap3pool = '0x445FE580eF8d70FF569aB36e80c647af338db351'
  const am3crvLP = '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171'
  // Iron
  const daiAddr = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
  const usdtAddr = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
  const iron3poolLP = '0xb4d09ff3dA7f9e9A2BA029cb0A81A989fd7B8f17'
  const ironSwap = '0x837503e8A8753ae17fB8C8151B8e6f586defCb57'
  const ironToken = '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'
  const ironMetaPoolSwap = '0xCaEb732167aF742032D13A9e76881026f91Cd087'
  const ironMetaPoolLP = '0x985D40feDAA3208DAbaCDFDCA00CbeAAc9543949'
  // btcrenbtc
  const amWBTC = '0x5c2ed810328349100A66B82b78a1791B101C9D61'
  const renBTC = '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501'
  const swapBtcRenBtc = '0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67'
  const btcrenbtcLP = '0xf8a57c1d3b9629b77b6726a042ca48990A84Fb49'
  // atricrypto
  const amWETH = '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390'
  const am3CRV = '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171'
  const poolATriCrypto = '0x751B1e21756bDbc307CBcC5085c042a0e9AaEf36'
  const atricryptoLP = '0x8096ac61db23291252574D49f036f0f9ed8ab390'
  const poolATriCrypto2 = '0x92577943c7aC4accb35288aB2CC84D75feC330aF'
  const atricrypto2LP = '0xbece5d20A8a104c54183CC316C8286E3F00ffC71'
  const poolATriCrypto3 = '0x92215849c439E1f8612b6646060B4E3E5ef822cC'
  const atricrypto3LP = '0xdAD97F7713Ae9437fa9249920eC8507e5FbB23d3'
  // polysage
  const sageAddr = "0x2ed945Dc703D85c80225d95ABDe41cdeE14e1992"
  const sageMaticLp = "0x70c096187F8a9ac03E34a0e7ed41bCd516878158"
  //LPTOKENADDRESSHERE
  // kogeremaining
  const kogeFund = '0x6A82FdE3033a969cf1ECe48D76aA942E9Fc567Db'
  /*  const usdtAddr = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
    const usdtUSDCLP = '0x2cF7252e74036d1Da831d11089D326296e64a728'
  */

  /**
   * MOONRIVER ADDRESSES
   */
  const movr = "0x98878B06940aE243284CA214f92Bb71a2b032B8A"
  const movrUSDCLP = "0xe537f70a8b62204832B8Ba91940B77d3f79AEb81"
  const movrDai = "0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844"
  const movrUsdc = "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d"
  const movrUsdcDaiLp = "0xFE1b71BDAEE495dCA331D28F5779E87bd32FbE53"
  const solar = "0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B"
  const solarUSDCLP = "0xdb66BE1005f5Fe1d2f486E75cE3C50B52535F886"

  /**
   * FANTOM ADDRESSES
   */

  const ftmFtm = "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
  const ftmUsdcLp = "0xe7E90f5a767406efF87Fdad7EB07ef407922EC1D"
  const ftmUSDC = '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75'
  const fUSDT = "0x049d68029688eAbF473097a2fC38ef61633A3C7A"
  const ftmMIM = "0x82f0B8B456c1A451378467398982d4834b6829c1"
  const mim3pool = "0x2dd7C9371965472E5A5fD28fbE165007c61439E1"
  const ftmSpell = "0x468003B688943977e6130F4F68F23aad939a1040"
  const spellfUSDTLP = "0x31c0385DDE956f95D43Dac80Bd74FEE149961f4c"
  const wftm = "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
  const spirit = "0x5Cc61A78F164885776AA610fb0FE1257df78E59B"
  const wftmSpiritLp = "0x30748322B6E34545DBe0788C421886AEB5297789"
  const fusdtFtmLp = "0xd14Dd3c56D9bc306322d4cEa0E1C49e9dDf045D4"

  /**
   * POLYGON CALLS
   */
  const polygonCurveCalls = [
    // Curve
    {
      address: am3crvLP,
      name: 'totalSupply'
    },
    {
      address: amDai,
      name: 'balanceOf',
      params: [swap3pool],
    },
    {
      address: amUSDC,
      name: 'balanceOf',
      params: [swap3pool],
    },
    {
      address: amUSDT,
      name: 'balanceOf',
      params: [swap3pool],
    },
    // Iron
    {
      address: iron3poolLP,
      name: 'totalSupply'
    },
    {
      address: daiAddr,
      name: 'balanceOf',
      params: [ironSwap],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [ironSwap],
    },
    {
      address: usdtAddr,
      name: 'balanceOf',
      params: [ironSwap],
    },
    {
      address: ironMetaPoolLP,
      name: 'totalSupply'
    },
    {
      address: iron3poolLP,
      name: 'balanceOf',
      params: [ironMetaPoolSwap],
    },
    {
      address: ironToken,
      name: 'balanceOf',
      params: [ironMetaPoolSwap],
    },
    // BTC
    {
      address: btcrenbtcLP,
      name: 'totalSupply'
    },
    {
      address: amWBTC,
      name: 'balanceOf',
      params: [swapBtcRenBtc],
    },
    {
      address: renBTC,
      name: 'balanceOf',
      params: [swapBtcRenBtc],
    },
    // atriCrypto
    {
      address: atricryptoLP,
      name: 'totalSupply'
    },
    {
      address: amWBTC,
      name: 'balanceOf',
      params: [poolATriCrypto],
    },
    {
      address: amWETH,
      name: 'balanceOf',
      params: [poolATriCrypto],
    },
    {
      address: am3CRV,
      name: 'balanceOf',
      params: [poolATriCrypto],
    },
    // atriCrypto 2
    {
      address: atricrypto2LP,
      name: 'totalSupply'
    },
    {
      address: amWBTC,
      name: 'balanceOf',
      params: [poolATriCrypto2],
    },
    {
      address: amWETH,
      name: 'balanceOf',
      params: [poolATriCrypto2],
    },
    {
      address: am3CRV,
      name: 'balanceOf',
      params: [poolATriCrypto2],
    },
    // atriCrypto 3
    {
      address: atricrypto3LP,
      name: 'totalSupply'
    },
    {
      address: amWBTC,
      name: 'balanceOf',
      params: [poolATriCrypto3],
    },
    {
      address: amWETH,
      name: 'balanceOf',
      params: [poolATriCrypto3],
    },
    {
      address: am3CRV,
      name: 'balanceOf',
      params: [poolATriCrypto3],
    },
    // Koge fund
    {
      address: kogecoinAddr,
      name: 'balanceOf',
      params: [kogeFund],
    },
  ]

  const polygonCalls = [
    // Matic Price
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [maticUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [maticUSDCLP],
    },

    // KogeCoin Price
    {
      address: kogecoinAddr,
      name: 'balanceOf',
      params: [kogeMaticLP],
    },
    // Balance of quote token on LP contract
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [kogeMaticLP],
    },
    // ETH Price
    {
      address: ethAddr,
      name: 'balanceOf',
      params: [ethMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [ethMaticLP],
    },
    // Quick Price
    {
      address: quickAddr,
      name: 'balanceOf',
      params: [quickMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [quickMaticLP],
    },
    // Total LP tokens minted
    {
      address: kogeMaticLP,
      name: 'totalSupply',
    },
    // Titan
    {
      address: titanAddr,
      name: 'balanceOf',
      params: [titanMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [titanMaticLP],
    },
    // Iron
    {
      address: ironAddr,
      name: 'balanceOf',
      params: [ironUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [ironUSDCLP],
    },
    // Booty
    {
      address: bootyAddr,
      name: 'balanceOf',
      params: [bootyMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [bootyMaticLP],
    },
    // Fish
    {
      address: fishAddr,
      name: 'balanceOf',
      params: [fishMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [fishMaticLP],
    },
    // WexPoly
    {
      address: wexAddr,
      name: 'balanceOf',
      params: [wexUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [wexUSDCLP],
    },
    // Qidao
    {
      address: miMaticAddr,
      name: 'balanceOf',
      params: [miMaticUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [miMaticUSDCLP],
    },
    {
      address: miMaticAddr,
      name: 'balanceOf',
      params: [miMaticQidaoLP],
    },
    {
      address: qidaoAddr,
      name: 'balanceOf',
      params: [miMaticQidaoLP],
    },
    // Omen
    {
      address: omenAddr,
      name: 'balanceOf',
      params: [omenUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [omenUSDCLP],
    },
    // Yeld
    {
      address: yeldAddr,
      name: 'balanceOf',
      params: [yeldUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [yeldUSDCLP],
    },
    // Crystl
    {
      address: crystlAddr,
      name: 'balanceOf',
      params: [crystlMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [crystlMaticLP],
    },
    // PYQ
    {
      address: pyqAddr,
      name: 'balanceOf',
      params: [pyqUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [pyqUSDCLP],
    },
    // ROLL
    {
      address: rollAddr,
      name: 'balanceOf',
      params: [rollMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [rollMaticLP],
    },
    // Bone
    {
      address: boneAddr,
      name: 'balanceOf',
      params: [boneMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [boneMaticLP],
    },
    // Pup
    {
      address: pupAddr,
      name: 'balanceOf',
      params: [pupMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [pupMaticLP],
    },
    // Btc
    {
      address: btcAddr,
      name: 'balanceOf',
      params: [btcUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [btcUSDCLP],
    },
    // BoneSwap
    {
      address: boneswapAddr,
      name: 'balanceOf',
      params: [boneswapMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [boneswapMaticLP],
    },
    // PWINGS
    {
      address: pwingsAddr,
      name: 'balanceOf',
      params: [pwingsMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [pwingsMaticLP],
    },
    // GFI
    {
      address: gfiAddr,
      name: 'balanceOf',
      params: [gfiEthLP],
    },
    {
      address: ethAddr,
      name: 'balanceOf',
      params: [gfiEthLP],
    },
    // Iron (Ice)
    {
      address: iceAddr,
      name: 'balanceOf',
      params: [iceUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [iceUSDCLP],
    },
    // CRV
    {
      address: crvAddr,
      name: 'balanceOf',
      params: [crvWETHAddr],
    },
    {
      address: ethAddr,
      name: 'balanceOf',
      params: [crvWETHAddr],
    },
    // Vert
    {
      address: vertAddr,
      name: 'balanceOf',
      params: [vertUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [vertUSDCLP],
    },
    // Dino
    {
      address: dinoAddr,
      name: 'balanceOf',
      params: [dinoUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [dinoUSDCLP],
    },
    // pSwamp
    {
      address: pswampAddr,
      name: 'balanceOf',
      params: [pswampMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [pswampMaticLP],
    },
    // Lithium
    {
      address: lithiumAddr,
      name: 'balanceOf',
      params: [lithiumMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [lithiumMaticLP],
    },
    // Link
    {
      address: linkAddr,
      name: 'balanceOf',
      params: [linkEthLP],
    },
    {
      address: ethAddr,
      name: 'balanceOf',
      params: [linkEthLP],
    },
    // Sushi
    {
      address: sushiAddr,
      name: 'balanceOf',
      params: [sushiEthLP],
    },
    {
      address: ethAddr,
      name: 'balanceOf',
      params: [sushiEthLP],
    },
    // Ball
    {
      address: ballAddr,
      name: 'balanceOf',
      params: [ballMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [ballMaticLP],
    },
    // Banana
    {
      address: bananaAddr,
      name: 'balanceOf',
      params: [bananaMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [bananaMaticLP],
    },
    // MyFriends
    {
      address: myfriendsAddr,
      name: 'balanceOf',
      params: [myfriendsUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [myfriendsUSDCLP],
    },
    // Arcadium
    {
      address: arcadiumAddr,
      name: 'balanceOf',
      params: [arcadiumUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [arcadiumUSDCLP],
    },
    // Shield
    {
      address: shieldAddr,
      name: 'balanceOf',
      params: [shieldMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [shieldMaticLP],
    },
    // Iris
    {
      address: irisAddr,
      name: 'balanceOf',
      params: [irisMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [irisMaticLP],
    },
    // Alpha
    {
      address: alphaAddr,
      name: 'balanceOf',
      params: [alphaMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [alphaMaticLP],
    },
    // Spade
    {
      address: spadeAddr,
      name: 'balanceOf',
      params: [spadeUSDCLP],
    },
    {
      address: usdcAddr,
      name: 'balanceOf',
      params: [spadeUSDCLP],
    },
    // Elk
    {
      address: elkAddr,
      name: 'balanceOf',
      params: [elkMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [elkMaticLP],
    },
    // Collar
    {
      address: collarAddr,
      name: 'balanceOf',
      params: [collarMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [collarMaticLP],
    },
    // pBrew
    {
      address: pbrewAddr,
      name: 'balanceOf',
      params: [pbrewMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [pbrewMaticLP],
    },
    // Paw
    {
      address: pawAddr,
      name: 'balanceOf',
      params: [pawMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [pawMaticLP],
    },
    // Beta
    {
      address: betaAddr,
      name: 'balanceOf',
      params: [betaMaticLP],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [betaMaticLP],
    },
    // Quick
    {
      address: quickAddr,
      name: 'balanceOf',
      params: [dQuickAddr],
    },
    {
      address: dQuickAddr,
      name: 'totalSupply',
    },
    // Polysage
    {
      address: sageAddr,
      name: 'balanceOf',
      params: [sageMaticLp],
    },
    {
      address: maticAddr,
      name: 'balanceOf',
      params: [sageMaticLp],
    },
    //NEWCALLHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)
  ]

  /**
   * MOONRIVER CALLS
   */
  const moonriverCalls = [
    // Dai
    {
      address: movrDai,
      name: 'balanceOf',
      params: [movrUsdcDaiLp],
    },
    {
      address: movrUsdc,
      name: 'balanceOf',
      params: [movrUsdcDaiLp],
    },
    // Solar
    {
      address: solar,
      name: 'balanceOf',
      params: [solarUSDCLP],
    },
    {
      address: movrUsdc,
      name: 'balanceOf',
      params: [solarUSDCLP],
    },
    // Movr
    {
      address: movr,
      name: 'balanceOf',
      params: [movrUSDCLP],
    },
    {
      address: movrUsdc,
      name: 'balanceOf',
      params: [movrUSDCLP],
    },
  ]


  /**
   * FANTOM CALLS
   */
  const fantomCalls = [
    // ftm
    {
      address: ftmFtm,
      name: 'balanceOf',
      params: [ftmUsdcLp],
    },

    {
      address: ftmUSDC,
      name: 'balanceOf',
      params: [ftmUsdcLp],
    },
    // spell
    {
      address: ftmSpell,
      name: 'balanceOf',
      params: [spellfUSDTLP],
    },

    {
      address: fUSDT,
      name: 'balanceOf',
      params: [spellfUSDTLP],
    },

    // Curve
    {
      address: mim3pool,
      name: 'totalSupply'
    },
    {
      address: fUSDT,
      name: 'balanceOf',
      params: [mim3pool],
    },
    {
      address: ftmUSDC,
      name: 'balanceOf',
      params: [mim3pool],
    },
    {
      address: ftmMIM,
      name: 'balanceOf',
      params: [mim3pool],
    },
    // Spirit
    {
      address: wftm,
      name: 'balanceOf',
      params: [wftmSpiritLp],
    },
    {
      address: spirit,
      name: 'balanceOf',
      params: [wftmSpiritLp],
    },
    // fusdt
    {
      address: fUSDT,
      name: 'balanceOf',
      params: [fusdtFtmLp],
    },

    {
      address: ftmFtm,
      name: 'balanceOf',
      params: [fusdtFtmLp],
    },
  ]

  const currentChain = useNetworkSwitcher().getCurrentNetwork()

  if (currentChain === SUPPORTED_CHAINS.MATIC) {
    const [maticBalanceUM, usdcBalanceUM, kogeBalanceLP, maticTokenBalanceLP, ethBalance, ethMaticBalance, quickBalance, quickMaticBalance, totalLPSupply, titanBalanceLP, maticBalanceLP, ironBalanceLP, usdcBalanceIron, bootyBalanceLP, maticBalanceBooty, fishBalance, maticFish, wexBalanceLP, usdcWex, miMaticQidaoUSDC, usdcmiMaticQidao, miMaticQidao, qidaoMiMatic, omenBalance, omenUSDCBalance, yeldBalance, yeldUSDCBalance, crystlBalance, crystalMaticBalance, pyqBalance, pyqUSDCBalance, rollBalance, rollMaticBalance, boneBalance, boneMaticBalance, pupBalance, pupMaticBalance, btcBalance, btcUSDCBalance, boneswapBalance, boneswapMaticBalance, pwingsBalance, pwingsMaticBalance, gfiBalance, gfiEthBalance, iceBalance, iceUSDCBalance, crvBalance, crvWETHBalance, vertBalance, vertUSDCBalance, dinoBalance, dinoUSDCBalance, pswampBalance, pswampMaticBalance, lithiumBalance, lithiumMaticBalance, linkBalance, linkEthBalance, sushiBalance, sushiEthBalance, ballBalance, ballMaticBalance, bananaBalance, bananaMaticBalance, myfriendsBalance, myfriendsUSDCBalance, arcadiumBalance, arcadiumUSDCBalance, shieldBalance, shieldMaticBalance, irisBalance, irisMaticBalance, alphaBalance, alphaMaticBalance, spadeBalance, spadeUSDCBalance, elkBalance, maticBalanceElk, collarBalance, collarMaticBalance, pbrewBalance, pbrewMaticBalance, pawBalance, pawMaticBalance, betaBalance, betaMaticBalance, quickdQuickBalance, dQuickSupply, sageBalance, sageMaticBalance] = await multicall(erc20, polygonCalls)

    const [curve3poolSupply, amDaiCurve, amUSDCCurve, amUSDTCurve, iron3poolSupply, daiIron, usdcIron, usdtIron, iron4poolSupply, i3usdIron4pool, ironIron4pool, btcrenbtcSupply, amWBTCCurve, amRenBTCCurve, atricryptoSupply, amWBTCatricrypto, amWETHatricrypto, am3CRVatricrypto, atricrypto2Supply, amWBTCatricrypto2, amWETHatricrypto2, am3CRVatricrypto2, atricrypto3Supply, amWBTCatricrypto3, amWETHatricrypto3, am3CRVatricrypto3, kogeBal] = await multicall(erc20, polygonCurveCalls)
    // Curve ratio
    const curveRatio = (amDaiCurve / 10 ** 18 + amUSDCCurve / 10 ** 6 + amUSDTCurve / 10 ** 6) / (curve3poolSupply / 10 ** 18)
    const curveBtcRenBtcRatio = (amWBTCCurve / 10 ** 8 + amRenBTCCurve / 10 ** 8) / (btcrenbtcSupply / 10 ** 18)
    const ironRatio = (daiIron / 10 ** 18 + usdcIron / 10 ** 6 + usdtIron / 10 ** 6) / (iron3poolSupply / 10 ** 18)
    const iron4PoolRatio = (i3usdIron4pool / 10 ** 18 * ironRatio + ironIron4pool / 10 ** 18) / (iron4poolSupply / 10 ** 18)
    // Get prices in matic/USDC
    const kogeMatic = kogeBalanceLP / maticTokenBalanceLP * 10 ** 9
    const titanMatic = titanBalanceLP / maticBalanceLP
    const ethMatic = ethBalance / ethMaticBalance
    const quickMatic = quickBalance / quickMaticBalance
    const bootyMatic = bootyBalanceLP / maticBalanceBooty
    const fishMatic = fishBalance / maticFish
    const ironUSDC = ironBalanceLP / (usdcBalanceIron * 10 ** 12)
    const wexUSDC = wexBalanceLP / (usdcWex * 10 ** 12)
    const miMaticUSDC = miMaticQidaoUSDC / (usdcmiMaticQidao * 10 ** 12)
    const qidaomiMatic = miMaticQidao / qidaoMiMatic
    const omenUSDC = omenBalance / (omenUSDCBalance * 10 ** 12)
    const yeldUSDC = yeldBalance / (yeldUSDCBalance * 10 ** 12)
    const crystlMatic = crystlBalance / crystalMaticBalance
    const pyqUSDC = pyqBalance / (pyqUSDCBalance * 10 ** 12)
    const rollMatic = rollBalance / rollMaticBalance
    const boneMatic = boneBalance / boneMaticBalance
    const pupMatic = pupBalance / pupMaticBalance
    const btcUSDC = btcBalance * 10 ** (18 - 8) / (btcUSDCBalance * 10 ** 12)
    const boneswapMatic = boneswapBalance / boneswapMaticBalance
    const pwingsMatic = pwingsBalance / pwingsMaticBalance
    const gfiEth = gfiBalance / gfiEthBalance
    const gfiMatic = gfiEth * ethMatic
    const iceUSDC = iceBalance / (iceUSDCBalance * 10 ** 12)
    const vertUSDC = vertBalance / (vertUSDCBalance * 10 ** 12)
    const crvWETH = crvBalance / crvWETHBalance
    const dinoUSDC = dinoBalance / (dinoUSDCBalance * 10 ** 12)
    const pswampMatic = pswampBalance / pswampMaticBalance
    const lithiumMatic = lithiumBalance / lithiumMaticBalance
    const linkMatic = linkBalance / linkEthBalance * ethMatic
    const sushiMatic = sushiBalance / sushiEthBalance * ethMatic
    const ballMatic = ballBalance / ballMaticBalance
    const bananaMatic = bananaBalance / bananaMaticBalance
    const myfriendsUSDC = myfriendsBalance / (myfriendsUSDCBalance * 10 ** 12)
    const arcadiumUSDC = arcadiumBalance / (arcadiumUSDCBalance * 10 ** 12)
    const shieldMatic = shieldBalance / shieldMaticBalance
    const irisMatic = irisBalance / irisMaticBalance
    const alphaMatic = alphaBalance / alphaMaticBalance
    const spadeUSDC = spadeBalance / (spadeUSDCBalance * 10 ** 12)
    const elkMatic = elkBalance / maticBalanceElk
    const collarMatic = collarBalance / collarMaticBalance
    const pbrewMatic = pbrewBalance / pbrewMaticBalance
    const pawMatic = pawBalance / pawMaticBalance
    const betaMatic = betaBalance / betaMaticBalance
    const sageMatic = sageBalance / sageMaticBalance
    const kogeRemaining = kogeBal / 10 ** 9;
    //MATICUSDCPRICEHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)

    // Get Matic price
    const maticUSD = (usdcBalanceUM * 10 ** 12) / maticBalanceUM
    const usdcUSD = parseFloat(data.usdc.usd)
    // Get Koge price in USD
    const kogeUSD = maticUSD / kogeMatic
    const titanUSD = maticUSD / titanMatic
    const bootyUSD = maticUSD / bootyMatic
    const ethUSD = maticUSD / ethMatic
    const quickUSD = maticUSD / quickMatic
    const fishUSD = maticUSD / fishMatic
    const ironUSD = usdcUSD / ironUSDC
    const wexUSD = usdcUSD / wexUSDC
    const miMaticUSD = usdcUSD / miMaticUSDC
    const qidaoUSD = qidaomiMatic / miMaticUSD
    const omenUSD = usdcUSD / omenUSDC
    const yeldUSD = usdcUSD / yeldUSDC
    const crystlUSD = maticUSD / crystlMatic
    const pyqUSD = usdcUSD / pyqUSDC
    const rollUSD = maticUSD / rollMatic
    const boneUSD = maticUSD / boneMatic
    const pupUSD = maticUSD / pupMatic
    const btcUSD = usdcUSD / btcUSDC
    const boneswapUSD = maticUSD / boneswapMatic
    const pwingsUSD = maticUSD / pwingsMatic
    const gfiUSD = maticUSD / gfiMatic
    const iceUSD = usdcUSD / iceUSDC
    const crvUSD = ethUSD / crvWETH
    const vertUSD = usdcUSD / vertUSDC
    const dinoUSD = usdcUSD / dinoUSDC
    const pswampUSD = maticUSD / pswampMatic
    const lithiumUSD = maticUSD / lithiumMatic
    const linkUSD = maticUSD / linkMatic
    const sushiUSD = maticUSD / sushiMatic
    const ballUSD = maticUSD / ballMatic
    const bananaUSD = maticUSD / bananaMatic
    const myfriendsUSD = usdcUSD / myfriendsUSDC
    const arcadiumUSD = usdcUSD / arcadiumUSDC
    const shieldUSD = maticUSD / shieldMatic
    const irisUSD = maticUSD / irisMatic
    const alphaUSD = maticUSD / alphaMatic
    const spadeUSD = usdcUSD / spadeUSDC
    const elkUSD = maticUSD / elkMatic
    const collarUSD = maticUSD / collarMatic
    const pbrewUSD = maticUSD / pbrewMatic
    const pawUSD = maticUSD / pawMatic
    const betaUSD = maticUSD / betaMatic
    const sageUSD = maticUSD / sageMatic

    // Curve stuff
    const curve3poolUSD = curveRatio
    const curveBtcRenBtcUSD = curveBtcRenBtcRatio * btcUSD
    const iron3poolUSD = ironRatio
    const iron4poolUSD = iron4PoolRatio
    const atricryptoValue = amWBTCatricrypto / 10 ** 8 * btcUSD + amWETHatricrypto / 10 ** 18 * ethUSD + am3CRVatricrypto / 10 ** 18 * curveRatio
    const atricryptoUSD = atricryptoValue / (atricryptoSupply / 10 ** 18)
    const atricrypto2Value = amWBTCatricrypto2 / 10 ** 8 * btcUSD + amWETHatricrypto2 / 10 ** 18 * ethUSD + am3CRVatricrypto2 / 10 ** 18 * curveRatio
    const atricrypto2USD = atricrypto2Value / (atricrypto2Supply / 10 ** 18)
    const atricrypto3Value = amWBTCatricrypto3 / 10 ** 8 * btcUSD + amWETHatricrypto3 / 10 ** 18 * ethUSD + am3CRVatricrypto3 / 10 ** 18 * curveRatio
    const atricrypto3USD = atricrypto3Value / (atricrypto3Supply / 10 ** 18)
    // Get Koge LP price
    const kogeMaticLPUSD = maticTokenBalanceLP * 2 * maticUSD / totalLPSupply
    // Ratio quickdQuickBalance, dQuickSupply
    const dQuickUSD = quickdQuickBalance / dQuickSupply * quickUSD
    // Get Koge price and Koge LP price
    data['matic-network'] = { "usd": maticUSD.toString() }
    data.kogecoin = { "usd": kogeUSD.toString() }
    data.kogematiclp = { "usd": kogeMaticLPUSD.toString() }
    data.titan = { "usd": titanUSD.toString() }
    data.eth = { "usd": ethUSD.toString() }
    data.quick = { "usd": quickUSD.toString() }
    data.booty = { "usd": bootyUSD.toString() }
    data.iron = { "usd": ironUSD.toString() }
    data.fish = { "usd": fishUSD.toString() }
    data.wexpoly = { "usd": wexUSD.toString() }
    data.mimatic = { "usd": miMaticUSD.toString() }
    data.qidao = { "usd": qidaoUSD.toString() }
    data.omen = { "usd": omenUSD.toString() }
    data.yeld = { "usd": yeldUSD.toString() }
    data.crystl = { "usd": crystlUSD.toString() }
    data.pyq = { "usd": pyqUSD.toString() }
    data.roll = { "usd": rollUSD.toString() }
    data.bone = { "usd": boneUSD.toString() }
    data.pup = { "usd": pupUSD.toString() }
    data.btc = { "usd": btcUSD.toString() }
    data.dai = { "usd": usdcUSD.toString() }
    data.boneswap = { "usd": boneswapUSD.toString() }
    data.pwings = { "usd": pwingsUSD.toString() }
    data.gfi = { "usd": gfiUSD.toString() }
    data.ice = { "usd": iceUSD.toString() }
    data.usdt = { "usd": "1.0" }
    data.ust = { "usd": "1.0" }
    data.crv = { "usd": crvUSD.toString() }
    data.curve3pool = { "usd": curve3poolUSD.toString() }
    data.btcrenbtc = { "usd": curveBtcRenBtcUSD.toString() }
    data.atricrypto = { "usd": atricryptoUSD.toString() }
    data.atricrypto2 = { "usd": atricrypto2USD.toString() }
    data.atricrypto3 = { "usd": atricrypto3USD.toString() }
    data.iron3pool = { "usd": iron3poolUSD.toString() }
    data.iron4pool = { "usd": iron4poolUSD.toString() }
    data.vert = { "usd": vertUSD.toString() }
    data.dino = { "usd": dinoUSD.toString() }
    data.pswamp = { "usd": pswampUSD.toString() }
    data.lithium = { "usd": lithiumUSD.toString() }
    data.link = { "usd": linkUSD.toString() }
    data.sushi = { "usd": sushiUSD.toString() }
    data.ball = { "usd": ballUSD.toString() }
    data.banana = { "usd": bananaUSD.toString() }
    data.myfriends = { "usd": myfriendsUSD.toString() }
    data.arcadium = { "usd": arcadiumUSD.toString() }
    data.shield = { "usd": shieldUSD.toString() }
    data.iris = { "usd": irisUSD.toString() }
    data.alpha = { "usd": alphaUSD.toString() }
    data.spade = { "usd": spadeUSD.toString() }
    data.elk = { "usd": elkUSD.toString() }
    data.collar = { "usd": collarUSD.toString() }
    data.pbrew = { "usd": pbrewUSD.toString() }
    data.paw = { "usd": pawUSD.toString() }
    data.beta = { "usd": betaUSD.toString() }
    data.dquick = { "usd": dQuickUSD.toString() }
    data.sage = { "usd": sageUSD.toString() }
    data.kogeremaining = { "usd": kogeRemaining.toString() }
  }
  if (currentChain === SUPPORTED_CHAINS.MOONRIVER) {
    // Get LP pool composition
    const [daiBalance, daiUSDCBalance, solarBalance, solarUSDCBalance, movrBalance, movrUSDCBalance] = await multicall(erc20, moonriverCalls)

    // Get implied prices by quote token
    const daiUSDC = daiBalance / (daiUSDCBalance * 10 ** 12)
    const solarUSDC = solarBalance / (solarUSDCBalance * 10 ** 12)
    const movrUSDC = movrBalance / (movrUSDCBalance * 10 ** 12)
    // Convert to USD
    const usdcUSD = parseFloat(data.usdc.usd)
    const daiUSD = usdcUSD / daiUSDC
    const solarUSD = usdcUSD / solarUSDC
    const movrUSD = usdcUSD / movrUSDC

    // Get dollar prices
    data.dai = { "usd": daiUSD.toString() }
    data.solar = { "usd": solarUSD.toString() }
    data.movr = { "usd": movrUSD.toString() }
    data.busd = { "usd": "1.0" }
  }

  if (currentChain === SUPPORTED_CHAINS.FANTOM) {
    // Balancer calls
    const beethovenX = '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce';

    const beetsUSDCPoolId = tokens.beetsusdcx.poolid;
    const beetsUSDCLP = getAddress(tokens.beetsusdcx.address);
    const ftmBtcEthPoolId = tokens.ftmbtcethx.poolid;
    const ftmBtcEthLP = getAddress(tokens.ftmbtcethx.address);
    const ftmSonataPoolId = tokens.sonatax.poolid;
    const ftmSonataLP = getAddress(tokens.sonatax.address);
    const usdcETHPoolId = tokens.usdcethx.poolid;
    const usdcEthLP =   getAddress(tokens.usdcethx.address);

    const btcUSDCPoolId = tokens.btcusdcx.poolid;
    const btcUSDCLP =   getAddress(tokens.btcusdcx.address);
    const btcEthUSDCPoolId = tokens.btcethusdcx.poolid;
    const btcEthUSDCLP =   getAddress(tokens.btcethusdcx.address);
    const mimFusdUsdtPoolId = tokens.mimfusdtusdcx.poolid;
    const mimFusdUsdtLP =   getAddress(tokens.mimfusdtusdcx.address);
    const beetsFtmPoolId = tokens.beetsftmx.poolid;
    const beetsFtmLP =   getAddress(tokens.beetsftmx.address);
    const usdcFtmPoolId = tokens.usdcftmx.poolid;
    const usdcFtmLP =   getAddress(tokens.usdcftmx.address);

    const balancerCalls = [
      // Beets-USDC
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [beetsUSDCPoolId],
      },
      {
        address: beetsUSDCLP,
        name: 'totalSupply',
      },
      // Ftm-Btc-Eth
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [ftmBtcEthPoolId],
      },
      {
        address: ftmBtcEthLP,
        name: 'totalSupply',
      },
      // Ftm-Sonata
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [ftmSonataPoolId],
      },
      {
        address: ftmSonataLP,
        name: 'totalSupply',
      },
      // USDC-ETH
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [usdcETHPoolId],
      },
      {
        address: usdcEthLP,
        name: 'totalSupply',
      },
      // Btc-Usdc
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [btcUSDCPoolId],
      },
      {
        address: btcUSDCLP,
        name: 'totalSupply',
      },
      // Btc-Eth-Usdc
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [btcEthUSDCPoolId],
      },
      {
        address: btcEthUSDCLP,
        name: 'totalSupply',
      },
      // mim3pool
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [mimFusdUsdtPoolId],
      },
      {
        address: mimFusdUsdtLP,
        name: 'totalSupply',
      },
      // beetsFtmPoolId
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [beetsFtmPoolId],
      },
      {
        address: beetsFtmLP,
        name: 'totalSupply',
      },
      // usdcFtmPoolId
      {
        address: beethovenX,
        name: 'getPoolTokens',
        params: [usdcFtmPoolId],
      },
      {
        address: usdcFtmLP,
        name: 'totalSupply',
      },
    ]

    // Get LP pool composition
    const [ftmBalance, usdcBalance, spellBalance, spellUSDTBalance, mim3poolSupply, fUSDT3poolBal, ftmUSDC3poolBal, ftmMIM3poolBal, wftmBalance, wftmSpiritBalance, fusdtBalance, fusdtFtmBalance] = await multicall(erc20, fantomCalls)
    const [beetsUSDCPool, beetsUSDCSupply, ftmBtcEthPool, ftmBtcEthSupply, ftmSonataPool, ftmSonataSupply, usdcEthPool, usdcEthSupply, btcUsdcPool, btcUsdcSupply, btcEthUsdcPool, btcEthUsdcSupply, mimFusdUsdtPool, mimFusdUsdtSupply, beetsFtmPool, beetsFtmSupply, usdcFtmPool, usdcFtmSupply] = await multicall(erc20, balancerCalls)

    // Get implied prices by quote token
    const ftmUsdc = ftmBalance / (usdcBalance * 10 ** 12)
    const spellUSDT = spellBalance / (spellUSDTBalance * 10 ** 12)
    const curveRatio = (ftmMIM3poolBal / 10 ** 18 + fUSDT3poolBal / 10 ** 6 + ftmUSDC3poolBal / 10 ** 6) / (mim3poolSupply / 10 ** 18)
    const wftmSpirit = wftmSpiritBalance / wftmBalance
    const fusdtUsdc = fusdtFtmBalance / (fusdtBalance * 10 ** 12)

    // Convert to USD
    const usdcUSD = parseFloat(data.usdc.usd)
    const ftmUSD = usdcUSD / ftmUsdc
    const spellUSD = usdcUSD / spellUSDT
    const mim3poolUSD = curveRatio
    const spiritUSD = ftmUSD / wftmSpirit
    const fusdtUSD = usdcUSD / fusdtUsdc
    const beetsUSDCusdc = beetsUSDCPool.balances[0] * 10**12 / 0.2 / beetsUSDCSupply
    const beetsUSD = beetsUSDCPool.balances[0] * 10**12 / beetsUSDCPool.balances[1] * 0.8 / 0.2
    const ftmbtcethUSD = ftmUSD * ftmBtcEthPool.balances[0] / 0.3333 / ftmBtcEthSupply
    const ftmSonataUSD =  ftmSonataPool.balances[0] * 10**12 / 0.1 /  ftmSonataSupply
    const usdcEthUSD =  usdcEthPool.balances[0] * 10**12 / 0.4 /  usdcEthSupply
    const btcUsdcUSD = btcUsdcPool.balances[0] * 10**12 / 0.4 / btcUsdcSupply
    const btcEthUsdcUsd = btcEthUsdcPool.balances[0] * 10**12 / 0.2 / btcEthUsdcSupply
    const mimFusdUsdtUsd = mimFusdUsdtPool.balances[0] * 10**12 / mimFusdUsdtSupply + mimFusdUsdtPool.balances[1] * 10**12 / mimFusdUsdtSupply + mimFusdUsdtPool.balances[2] / mimFusdUsdtSupply
    const beetsFtmUsd = ftmUSD * beetsFtmPool.balances[0] / 0.2 / beetsFtmSupply
    const usdcFtmUsd = usdcFtmPool.balances[0] * 10**12 / 0.3 / usdcFtmSupply

    // beetsFtmPool, beetsFtmSupply, usdcFtmPool, usdcFtmSupply
//  btcUsdcPool, btcUsdcSupply, btcEthUsdcPool, btcEthUsdcSupply, mimFusdUsdtPool, mimFusdUsdtSupply, beetsFtmPool, beetsFtmSupply, usdcFtmPool, usdcFtmSupply
//  console.log(usdcEth)
    // Get dollar prices
    data.ftm = { "usd": ftmUSD.toString() }
    data.spirit = { "usd": ftmUSD.toString() }
    data.spell = { "usd": spellUSD.toString() }
    data.mim3pool = { "usd": mim3poolUSD.toString() }
    data.spirit = { "usd": spiritUSD.toString() }
    data.fusdt = { "usd": fusdtUSD.toString() }
    data.beetsusdcx = { "usd": beetsUSDCusdc.toString() }
    data.beets = { "usd": beetsUSD.toString() }
    data.ftmbtcethx = { "usd": ftmbtcethUSD.toString() }
    data.sonatax = { "usd": ftmSonataUSD.toString() }
    data.usdcethx = { "usd": usdcEthUSD.toString() }
    data.btcusdcx = { "usd": btcUsdcUSD.toString() }
    data.btcethusdcx = { "usd": btcEthUsdcUsd.toString() }
    data.mimfusdtusdcx = { "usd": mimFusdUsdtUsd.toString() }
    data.beetsftmx = { "usd": beetsFtmUsd.toString() }
    data.usdcftmx = { "usd": usdcFtmUsd.toString() }

  }


  // Return normalized token names
  return {
    //    updated_at: data.updated_at,
    data: Object.keys(data).reduce((accum, token) => {
      return {
        ...accum,
        [token.toLowerCase()]: parseFloat(data[token].usd),
      }
    }, {}),
  }

})

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPrices.fulfilled, (state, action: PayloadAction<PriceApiThunk>) => {
      state.isLoading = false
      //      state.lastUpdated = action.payload.updated_at
      state.data = action.payload.data
    })
  },
})

export default pricesSlice.reducer
