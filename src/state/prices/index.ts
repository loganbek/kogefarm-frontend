/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PriceApiResponse, PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import { PriceApiThunk, PriceState, GeicoApiList } from 'state/types'
import multicall from 'utils/multicall'
import erc20 from 'config/abi/erc20.json'

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
  const data ={"usdc":{"usd":"1.0"}} as GeicoApiList

  // Fetch KogeCoin price from LP pool
  const kogecoinAddr = '0x13748d548D95D78a3c83fe3F32604B4796CFfa23'
  const maticAddr ='0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
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
/*  const usdtAddr = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
  const usdtUSDCLP = '0x2cF7252e74036d1Da831d11089D326296e64a728'
*/
  const curveCalls = [
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
  ]

  const calls = [
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
  ]
  const [maticBalanceUM, usdcBalanceUM, kogeBalanceLP, maticTokenBalanceLP, ethBalance, ethMaticBalance, quickBalance, quickMaticBalance, totalLPSupply, titanBalanceLP, maticBalanceLP, ironBalanceLP, usdcBalanceIron, bootyBalanceLP, maticBalanceBooty, fishBalance,maticFish, wexBalanceLP,usdcWex,miMaticQidaoUSDC,usdcmiMaticQidao, miMaticQidao,qidaoMiMatic, omenBalance, omenUSDCBalance, yeldBalance, yeldUSDCBalance, crystlBalance, crystalMaticBalance, pyqBalance, pyqUSDCBalance, rollBalance, rollMaticBalance, boneBalance, boneMaticBalance, pupBalance, pupMaticBalance, btcBalance, btcUSDCBalance, boneswapBalance, boneswapMaticBalance, pwingsBalance, pwingsMaticBalance, gfiBalance, gfiEthBalance, iceBalance, iceUSDCBalance, crvBalance, crvWETHBalance, vertBalance, vertUSDCBalance, dinoBalance, dinoUSDCBalance] = await multicall(erc20, calls)

  const [curve3poolSupply, amDaiCurve, amUSDCCurve, amUSDTCurve, iron3poolSupply, daiIron, usdcIron, usdtIron, btcrenbtcSupply, amWBTCCurve, amRenBTCCurve, atricryptoSupply, amWBTCatricrypto, amWETHatricrypto, am3CRVatricrypto] = await multicall(erc20, curveCalls)
  // Curve ratio
  const curveRatio = (amDaiCurve/10**18 + amUSDCCurve/10**6 + amUSDTCurve/10**6)/(curve3poolSupply/10**18)
  const curveBtcRenBtcRatio = (amWBTCCurve/10**8 + amRenBTCCurve/10**8)/(btcrenbtcSupply/10**18)
  const ironRatio = (daiIron/10**18 + usdcIron/10**6 + usdtIron/10**6)/(iron3poolSupply/10**18)
  // Get prices in matic/USDC
  const kogeMatic = kogeBalanceLP/maticTokenBalanceLP*10**9
  const titanMatic = titanBalanceLP/maticBalanceLP
  const ethMatic = ethBalance/ethMaticBalance
  const quickMatic = quickBalance/quickMaticBalance
  const bootyMatic = bootyBalanceLP/maticBalanceBooty
  const fishMatic = fishBalance/maticFish
  const ironUSDC = ironBalanceLP/(usdcBalanceIron*10**12)
  const wexUSDC = wexBalanceLP/(usdcWex*10**12)
  const miMaticUSDC = miMaticQidaoUSDC/(usdcmiMaticQidao*10**12)
  const qidaomiMatic = miMaticQidao/qidaoMiMatic
  const omenUSDC = omenBalance/(omenUSDCBalance*10**12)
  const yeldUSDC = yeldBalance/(yeldUSDCBalance*10**12)
  const crystlMatic = crystlBalance/crystalMaticBalance
  const pyqUSDC = pyqBalance/(pyqUSDCBalance*10**12)
  const rollMatic = rollBalance/rollMaticBalance
  const boneMatic = boneBalance/boneMaticBalance
  const pupMatic = pupBalance/pupMaticBalance
  const btcUSDC = btcBalance*10**(18-8)/(btcUSDCBalance*10**12)
  const boneswapMatic = boneswapBalance/boneswapMaticBalance
  const pwingsMatic = pwingsBalance/pwingsMaticBalance
  const gfiEth = gfiBalance/gfiEthBalance
  const gfiMatic = gfiEth*ethMatic
  const iceUSDC = iceBalance/(iceUSDCBalance*10**12)
  const vertUSDC = vertBalance/(vertUSDCBalance*10**12)
  const crvWETH = crvBalance/crvWETHBalance
  const dinoUSDC = dinoBalance/(dinoUSDCBalance*10**12)

  // Get Matic price
  const maticUSD = (usdcBalanceUM*10**12)/maticBalanceUM
  const usdcUSD = parseFloat(data.usdc.usd)
  // Get Koge price in USD
  const kogeUSD = maticUSD/kogeMatic
  const titanUSD = maticUSD/titanMatic
  const bootyUSD = maticUSD/bootyMatic
  const ethUSD = maticUSD/ethMatic
  const quickUSD = maticUSD/quickMatic
  const fishUSD = maticUSD/fishMatic
  const ironUSD = usdcUSD/ironUSDC
  const wexUSD = usdcUSD/wexUSDC
  const miMaticUSD = usdcUSD/miMaticUSDC
  const qidaoUSD = qidaomiMatic/miMaticUSD
  const omenUSD = usdcUSD/omenUSDC
  const yeldUSD = usdcUSD/yeldUSDC
  const crystlUSD = maticUSD/crystlMatic
  const pyqUSD = usdcUSD/pyqUSDC
  const rollUSD = maticUSD/rollMatic
  const boneUSD = maticUSD/boneMatic
  const pupUSD = maticUSD/pupMatic
  const btcUSD = usdcUSD/btcUSDC
  const boneswapUSD = maticUSD/boneswapMatic
  const pwingsUSD = maticUSD/pwingsMatic
  const gfiUSD = maticUSD/gfiMatic
  const iceUSD = usdcUSD/iceUSDC
  const crvUSD = ethUSD/crvWETH
  const vertUSD = usdcUSD/vertUSDC
  const dinoUSD = usdcUSD/dinoUSDC
  // Curve stuff
  const curve3poolUSD = curveRatio
  const curveBtcRenBtcUSD = curveBtcRenBtcRatio*btcUSD
  const iron3poolUSD = ironRatio
  const atricryptoValue = amWBTCatricrypto/10**8*btcUSD + amWETHatricrypto/10**18*ethUSD + am3CRVatricrypto/10**18*curveRatio
  const atricryptoUSD = atricryptoValue/(atricryptoSupply/10**18)
  // Get Koge LP price
  const kogeMaticLPUSD = maticTokenBalanceLP*2*maticUSD/totalLPSupply
  // Get Koge price and Koge LP price
  data['matic-network'] = {"usd":maticUSD.toString()}
  data.kogecoin = {"usd":kogeUSD.toString()}
  data.kogematiclp = {"usd":kogeMaticLPUSD.toString()}
  data.titan = {"usd":titanUSD.toString()}
  data.eth = {"usd":ethUSD.toString()}
  data.quick = {"usd":quickUSD.toString()}
  data.booty = {"usd":bootyUSD.toString()}
  data.iron = {"usd":ironUSD.toString()}
  data.fish = {"usd":fishUSD.toString()}
  data.wexpoly = {"usd":wexUSD.toString()}
  data.mimatic = {"usd":miMaticUSD.toString()}
  data.qidao = {"usd":qidaoUSD.toString()}
  data.omen = {"usd":omenUSD.toString()}
  data.yeld = {"usd":yeldUSD.toString()}
  data.crystl = {"usd":crystlUSD.toString()}
  data.pyq = {"usd":pyqUSD.toString()}
  data.roll = {"usd":rollUSD.toString()}
  data.bone = {"usd":boneUSD.toString()}
  data.pup = {"usd":pupUSD.toString()}
  data.btc = {"usd":btcUSD.toString()}
  data.dai = {"usd":usdcUSD.toString()}
  data.boneswap = {"usd":boneswapUSD.toString()}
  data.pwings = {"usd":pwingsUSD.toString()}
  data.gfi = {"usd":gfiUSD.toString()}
  data.ice = {"usd":iceUSD.toString()}
  data.usdt = {"usd":"1.0"}
  data.crv = {"usd":crvUSD.toString()}
  data.curve3pool = {"usd":curve3poolUSD.toString()}
  data.btcrenbtc = {"usd":curveBtcRenBtcUSD.toString()}
  data.atricrypto = {"usd":atricryptoUSD.toString()}
  data.iron3pool = {"usd":iron3poolUSD.toString()}
  data.vert = {"usd":vertUSD.toString()}
  data.dino = {"usd":dinoUSD.toString()}
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
