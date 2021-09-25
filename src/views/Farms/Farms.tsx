import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { Tooltip } from 'react-tippy'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { isDesktop } from "react-device-detect";
import { useWeb3React } from '@web3-react/core'
import {
  Heading,
  RowType,
  Toggle,
  Text,
  Flex,
  Skeleton
} from 'components/Pancake'
import tokens from 'config/constants/tokens'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import CheckBoxMenu from 'components/CheckboxMenu'
import { AutoCompound } from 'components/Pancake/Svg'
import { useFarms, useGetApiPrices, useGetApiPrice } from 'state/hooks'
import { useGetStats } from 'hooks/api'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import usePersistState from 'hooks/usePersistState'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getMetaFarmApr } from 'utils/apr'
import { filter, orderBy, uniqBy } from 'lodash'
import { getAddress } from 'utils/addressHelpers'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import { fetchFarmsPublicDataAsync, setLoadArchivedFarmsData } from 'state/farms'
import Select, { OptionProps } from 'components/Select/Select'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Table from './components/FarmTable/FarmTable'
import SearchInput from './components/SearchInput'
import { RowProps } from './components/FarmTable/Row'
import { DesktopColumnSchema, ViewMode } from './components/types'

const ControlContainer = React.memo(styled.div<{ isDesktop: boolean }>`
display: flex;
width: 100%;
align-items: ${({ isDesktop }) => isDesktop ? "baseline" : "center"};
position: relative;

justify-content: space-between;
flex-direction: column;
margin-bottom: 32px;

${({ theme }) => theme.mediaQueries.sm} {
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0;
}
`)

const Tip = React.memo(styled.div`
background: ${({ theme }) => theme.colors.tertiary};
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
width: 100%;
padding: 24px;
margin-top: 15px;
border-radius: 4px;
width: 300px;
`)

const StyledText = React.memo(styled(Text)`
svg {
  position: relative;
  top: 7px;
  left: -2px;
  margin: 0 4px;

}
`)

const ToggleWrapper = React.memo(styled.div`
display: flex;
align-items: center;

${Text} {
  margin-right: 8px;
}
`)

const Hero = React.memo(styled(Flex)`
a {
  color: #1EA306;
  text-decoration: underline;
}

div {
  display: inline;
}

@media screen and (max-width: 576px) {
  flex-direction: column;
  .stats {
    order: 0;
    margin-bottom: 20px;
  }

  .info {
    order: 1;
  }
}
`)

const LabelWrapper = React.memo(styled.div`
position: relative;
width: 168px;

> ${Text} {
  font-size: 10px;
  position: absolute;
  top: -8px;
  z-index: 1;
  background: ${({ theme }) => theme.colors.background};
  display: inline-block;
  left: 10px;
  padding: 2px 6px;
}

@media screen and (max-width: 576px) {
  width: 100%;
}
`)

const InfoContainer = React.memo(styled.div`
width: 100%;
justify-content: space-between;
display: flex;
margin-top: 26px;
`)

const Price = React.memo(styled(Flex)`
b {
  margin-left: 8px;
}
`)

const VaultTypesContainer = React.memo(styled.div<{ isDesktop: boolean }>`
margin:${props => props.isDesktop ? "0px" : "18px 0px"}
`)

const NUMBER_OF_FARMS_VISIBLE = 5000
const chainId = process.env.REACT_APP_CHAIN_ID;

// @ts-ignore
const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const data = useGetStats()
  const { data: farmsLP, userDataLoaded } = useFarms()
  const [query, setQuery] = useState('')
  const [multiSearch, setMultiSearch] = useState(new Set(["all"]))
  const [isSearching, setIsSearching] = useState(false)
  const [current, setCurrent] = useState(0)
  const [platform, setPlatform] = useState('')
  const [viewMode] = usePersistState(ViewMode.TABLE, 'kogefarm_farm_view')
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('')
  const prices = useGetApiPrices()
  const kogePrice = useGetApiPrice('kogecoin');

  const [platformSelectOption, setPlatformSelectOption] = useState<OptionProps>({ label: 'All', value: '' })

  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded
  const userDataReady = !account || (!!account && userDataLoaded)

  const [stakedOnly, setStakedOnly] = useState(!isActive)
  useEffect(() => {
    setStakedOnly(!isActive)
  }, [isActive])

  useEffect(() => {
    // Makes the main scheduled fetching to request archived farms data
    dispatch(setLoadArchivedFarmsData(isArchived))

    // Immediately request data for archived farms so users don't have to wait
    // 60 seconds for public data and 10 seconds for user data
    if (isArchived) {
      dispatch(fetchFarmsPublicDataAsync())
      if (account) {
        dispatch(fetchFarmUserDataAsync(account))
      }
    }
  }, [isArchived, dispatch, account])

  const activeFarms = useMemo(
    () => farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
    , [farmsLP])
  const inactiveFarms = useMemo(
    () => farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
    , [farmsLP])
  const allFarms = useMemo(
    () => farmsLP.filter((farm) => farm.pid !== 0)
    , [farmsLP])
  const archivedFarms = useMemo(
    () => farmsLP.filter((farm) => isArchivedPid(farm.pid))
    , [farmsLP])

  //  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  const stakedOnlyFarms = useMemo(
    () => activeFarms.filter(
      (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
    )
    , [activeFarms])

  const stakedInactiveFarms = useMemo(
    () => inactiveFarms.filter(
      (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
    )
    , [inactiveFarms]
  )

  const stakedArchivedFarms = useMemo(
    () => archivedFarms.filter(
      (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
    )
    , [archivedFarms]
  )

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        /* DZ Hack
        if (!farm.lpTotalInQuoteToken || !prices) {
          return farm
        }

        const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address).toLowerCase()]
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
        const apr = isActive ? getFarmApr(farm.poolWeight, cakePrice, totalLiquidity) : 0
*/
        let decimal = 18
        if (farm.token === farm.quoteToken) {
          decimal = farm.token.decimals
        }
        if (!farm.tokenPriceVsQuote || !prices) {
          return farm
        }
        const quoteTokenPriceUsd = prices[farm.quoteToken.coingeico.toLowerCase()]
        let tokenPriceVsQuote = farm.rewardToken
          ? new BigNumber(prices[farm.rewardToken.coingeico.toLowerCase()]).div(
            new BigNumber(prices[farm.quoteToken.coingeico.toLowerCase()]),
          )
          : new BigNumber(farm.tokenPriceVsQuote)
        if (!farm.rewardToken && farm.token === farm.quoteToken) {
          tokenPriceVsQuote = new BigNumber(1)
        }
        //        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken)
        let totalLiquidity = new BigNumber(farm.quoteTokenAmount).times(2)
        if (farm.token === farm.quoteToken) {
          totalLiquidity = new BigNumber(farm.lpTokenBalanceMC)
          totalLiquidity = totalLiquidity.times(10 ** (18 - decimal))
        }
        const jarLPDeposits = new BigNumber(farm.jarLPDeposits)
        //        const jarRatioNum = new BigNumber(farm.jarRatio)
        let totalDeposits = new BigNumber(farm.totalDeposits).times(new BigNumber(quoteTokenPriceUsd))
        if (farm.token === farm.quoteToken) {
          totalDeposits = new BigNumber(farm.jarLPDeposits).div(10 ** decimal).times(new BigNumber(quoteTokenPriceUsd))
        }
        const farmRatio = new BigNumber(farm.jarRatio).div(10 ** 18)
        let userDeposits
        if (jarLPDeposits > new BigNumber(0)) {
          userDeposits = new BigNumber(farm.userData.stakedBalance)
            .times(farmRatio)
            .times(totalDeposits)
            .div(jarLPDeposits)
        } else {
          userDeposits = new BigNumber(0)
        }
        // If dual rewards: transform reward/block in terms of token price
        let rewardPerBlock = farm.rewardPerBlock
        const masterChefAddress = getAddress(farm.masterChefAddresses)
        // Special case: pSwamp
        let rewardPerBlock1 = farm.rewardPerBlock1
        if (masterChefAddress === '0x1c0a0927105140216425c84399E68F8B31E7510E') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0x7d39705Cc041111275317f55B3A406ACC83615Bc') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 86)[0].lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0x0706b1A8A1Eeb12Ce7fb1FFDC9A4b4cA31920Eae') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 83)[0].lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0x94BE6A449a5c286734522FC6047484ac763c595C') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 82)[0].lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0xd032Cb7a0225c62E5e26455dFE4eE8C87df254e3') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 95)[0].lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0x7B6bA2709A597Bcbf7Ff54116c0E88DE5fe2C381') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 97)[0].lpTokenBalanceMC).toNumber()
        }
        if (masterChefAddress === '0x7Da45e3E3218b3A304A79e86c411F2bfd605A8De') {
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
          rewardPerBlock1 /= new BigNumber(farmsLP.filter((x) => x.pid === 85)[0].lpTokenBalanceMC).toNumber()
        }
        if (farm.rewardToken1) {
          rewardPerBlock = (rewardPerBlock1 * prices[farm.rewardToken1.coingeico.toLowerCase()] + farm.rewardPerBlock2 * prices[farm.rewardToken2.coingeico.toLowerCase()]) / prices[farm.quoteToken.coingeico.toLowerCase()]
          tokenPriceVsQuote = new BigNumber(1)
        }


        const apr = isActive
          ? getMetaFarmApr(farm.poolWeightDesignate, rewardPerBlock, totalLiquidity, tokenPriceVsQuote)
          : 0
        const tradingFeeRate = isActive ? new BigNumber(farm.tradingFeeRate).toNumber() : 0

        return { ...farm, apr, tradingFeeRate, liquidity: totalDeposits, userValue: userDeposits }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPR
    },
    //    [cakePrice, prices, query, isActive],
    [query, prices, isActive, farmsLP],
  )

  const userTvl = useMemo(
    () => farmsList(allFarms).reduce((sum, curr) => sum.plus(curr.userValue ? curr.userValue : 0), new BigNumber(0))
    , [allFarms, farmsList]
  )
  const displayUserTVL = userTvl ? (
    `${Number(userTvl).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
  ) : (
    <Skeleton width={60} />
  )

  const tvl = useMemo(
    () => farmsList(allFarms).reduce((sum, curr) => sum.plus(curr.liquidity ? curr.liquidity : 0), new BigNumber(0))
    , [allFarms, farmsList]
  )
  const displayTVL = tvl ? (
    `${Number(tvl).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
  ) : (
    <Skeleton width={60} />
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)

  const farmsStakedMemoized = useMemo(() => {
    let farmsStaked = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'multi': {
          if (isSearching) {
            // bypass the react-exhaustive-deps for isSearch
          }

          const vaultTypeFilter = multiSearch.has('all') ? farms : filter(farms, f => {
            let isWantedToken = true
            const singleFilter = f.token.address[chainId] === f.quoteToken.address[chainId]
              && !/[-|/]/.exec(f.lpSymbol)
              && !/(atricrypto)/gmi.exec(f.lpSymbol)
            const stableFilter = ([tokens.usdc.address[chainId],
            tokens.dai.address[chainId],
            tokens.usdt.address[chainId],
            tokens.mimatic.address[chainId],
            tokens.ust.address[chainId]]
              .includes(f.token.address[chainId]) || ["DAI", "USDT", "USDT"].reduce((p, c) => p && f.lpSymbol.includes(c), Boolean(true)))
              && !/(-+matic)|(matic-+)/gmi.exec(f.lpSymbol)
              && !/(-+eth)|(eth-+)/gmi.exec(f.lpSymbol)

            const feelessFilter = !f.depositFee

            if (multiSearch.has('single')) { isWantedToken = isWantedToken && singleFilter }
            if (multiSearch.has('stable')) { isWantedToken = isWantedToken && stableFilter }
            if (multiSearch.has('feeless')) { isWantedToken = isWantedToken && feelessFilter }

            return isWantedToken
          })
          if (multiSearch.has('platform')) return filter(vaultTypeFilter, { platform })
          return vaultTypeFilter
        }
        case 'single':
          return filter(farms, f => f.token.address[chainId] === f.quoteToken.address[chainId] && !/[-|/]/.exec(f.lpSymbol))
        case 'stable':
          return filter(farms, f => f.token.address[chainId] === tokens.usdc.address[chainId])
        case 'feeless':
          return filter(farms, f => f.depositFee === 0)
        case 'apr':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apr, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earned':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc',
          )
        case 'platform':
          return filter(farms, { platform })
        case 'liquidity':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        default:
          return farms
      }
    }

    if (isActive) {
      farmsStaked = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
    }
    if (isInactive) {
      farmsStaked = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
    }
    if (isArchived) {
      farmsStaked = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms)
    }

    return sortFarms(farmsStaked).slice(0, numberOfFarmsVisible)
  }, [
    platform,
    sortOption,
    activeFarms,
    farmsList,
    inactiveFarms,
    archivedFarms,
    isActive,
    isInactive,
    isArchived,
    stakedArchivedFarms,
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    numberOfFarmsVisible,
    multiSearch,
    isSearching,
  ])

  useEffect(() => {
    setCurrent(farmsStakedMemoized.length)

    const showMoreFarms = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfFarmsVisible((farmsCurrentlyVisible) => farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMoreFarms, {
        rootMargin: '0px',
        threshold: 0.25,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [farmsStakedMemoized, observerIsSet])

  const rowData = useMemo(() => farmsStakedMemoized.map((farm) => {
    //    const { token, quoteToken } = farm
    //    const tokenAddress = token.address
    //    const quoteTokenAddress = quoteToken.address
    const farmcomment = farm.kogefarmComment ? farm.kogefarmComment.toUpperCase() : ''
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '') + farmcomment

    let farmAPYNum =
      ((1 +
        ((farm.apr + 365 * farm.tradingFeeRate) * (1 - farm.kogefarmFee)) /
        ((100 * 365 * 24 * 60) / farm.minutesPerCompound)) **
        ((365 * 24 * 60) / farm.minutesPerCompound) -
        1) *
      100
    if (farmAPYNum > 10 ** 18) {
      farmAPYNum = Number.POSITIVE_INFINITY
    }

    const row: RowProps = {
      details: {
        ...farm,
      },
      apr: {
        align: 'flex-end',
        value: farm.apr && farm.apr.toLocaleString(undefined, { maximumFractionDigits: 2 }),
        originalValue: farm.apr,
      },
      apy: {
        align: 'flex-end',
        value: farm.apr && farmAPYNum.toLocaleString(undefined, { maximumFractionDigits: 2 }),
        originalValue: farmAPYNum,
      },
      apyd: {
        align: 'flex-end',
        value:
          farm.apr &&
          (
            ((1 +
              ((farm.apr + 365 * farm.tradingFeeRate) * (1 - farm.kogefarmFee)) /
              ((100 * 365 * 24 * 60) / farm.minutesPerCompound)) **
              ((24 * 60) / farm.minutesPerCompound) -
              1) *
            100
          ).toLocaleString('en-US', { maximumFractionDigits: 2 }),
        originalValue:
          ((1 +
            ((farm.apr + 365 * farm.tradingFeeRate) * (1 - farm.kogefarmFee)) /
            ((100 * 365 * 24 * 60) / farm.minutesPerCompound)) **
            ((24 * 60) / farm.minutesPerCompound) -
            1) *
          100,
      },
      farm: {
        image: farm.lpSymbol.split(' ')[0].toLocaleLowerCase(),
        label: lpLabel,
        pid: farm.pid,
      },
      earned: {
        earnings: getBalanceNumber(new BigNumber(farm.userData.earnings)),
        pid: farm.pid,
      },
      liquidity: {
        align: 'flex-end',
        liquidity: farm.liquidity,
      },
      userValue: {
        align: 'flex-end',
        userValue: farm.userValue,
      },
      platform: {
        align: 'flex-start',
        userValue: farm?.platform
      },
      actions: {
        align: 'center'
      }
    }

    return row
  }), [farmsStakedMemoized])

  const renderContent = (): JSX.Element => {
    if (viewMode === ViewMode.TABLE && rowData.length) {
      const columnSchema = DesktopColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        display: column.display,
        align: column.align,
        platform: column.platform,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.original.farm.label.localeCompare(a.original.farm.label)
            case 'apy':
              // special implementation, check createReducer "TOGGLE_SORT" hook for more detail
              return ["original?.apy?.originalValue"]
            case 'userValue':
              if (a.original.userValue.userValue && b.original.userValue.userValue) {
                return Number(a.original.userValue.userValue) - Number(b.original.userValue.userValue)
              }
              return -1
            case 'liquidity':
              if (a.original.liquidity.liquidity && b.original.liquidity.liquidity) {
                return Number(a.original.liquidity.liquidity) - Number(b.original.liquidity.liquidity)
              }
              return -1
            case 'platform':
              return b.original.platform.userValue.localeCompare(a.original.platform.userValue)
            default:
              return -1
          }
        },
        sortable: column.sortable,
      }))

      return (
        <Table
          data={rowData}
          columns={columns}
          userDataReady={userDataReady}
        />
      )
    }

    return (
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {farmsStakedMemoized.map((farm) => (
              <FarmCard key={farm.pid} farm={farm} account={account} removed={false} />
            ))}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsStakedMemoized.map((farm) => (
              <FarmCard key={farm.pid} farm={farm} account={account} removed />
            ))}
          </Route>
          <Route exact path={`${path}/archived`}>
            {farmsStakedMemoized.map((farm) => (
              <FarmCard key={farm.pid} farm={farm} account={account} removed />
            ))}
          </Route>
        </FlexLayout>
      </div>
    )
  }


  const handleItemClick = activeIndex => {
    setMultiSearch(activeIndex)
    setIsSearching(!isSearching)
    setSortOption('multi')
  }

  const handleSortOptionChangeAlt = (option: OptionProps): void => {
    setPlatform(option.value)
    setSortOption('multi')
    if (option.value) {
      setMultiSearch(multiSearch.add('platform'))
    } else {
      const _multiSearch = new Set(multiSearch)
      _multiSearch.delete('platform')
      setMultiSearch(_multiSearch)
    }
  }

  const options = orderBy(
    uniqBy(activeFarms.map(farm => ({
      label: farm.platform,
      value: farm.platform
    })), 'label'),
    "label",
    ['asc']
  )
  return (
    <Page>

      <Hero>
        <Flex width={isDesktop ? "70%" : "100%"} flexDirection="column" mb="30px" className="info">
          <Heading scale="lg" mb="12px">
            Vaults
          </Heading>
          <StyledText fontSize="14px" mb="14px">
            {t('KogeFarm helps you earn more yield by ')}
            {' '}
            {isDesktop ? <AutoCompound /> : null}
            {' '}
            <Tooltip
              trigger="mouseenter"
              position="bottom"
              useContext
              html={(
                <Tip>
                  <Text fontSize="14px">
                    Auto-compounding means that rather than having to manually re-stake your token every so often in order to get the best APY, it will be done for you.
                  </Text>
                </Tip>
              )}>
              <a href="https://koge.gitbook.io/kogefarm/why-autocompound">auto-compounding</a>.
            </Tooltip>
            {' Lowest '}
            <a href="https://koge.gitbook.io/kogefarm/fees">fees</a>
            {' in Polygon. '}
            <a href="https://github.com/Tibereum/obelisk-audits/blob/main/Kogefarm.pdf">Audited</a>
            {' '}
            by Obelisk.
          </StyledText>
        </Flex>
        {!isDesktop &&
          (<Flex width="100%" justifyContent="flex-end" className="stats">
            <Flex flexDirection="column" width="100%">
              <Price alignItems="center" width="100%" justifyContent="space-between" mb="12px" marginRight="12px">
                <Text>Vault TVL {' '}</Text>
                <Text fontWeight="bold">${tvl.isZero() ? '-' : displayTVL} {' '}</Text>
              </Price>
            </Flex>
          </Flex>)}
        {!isDesktop &&
          (<Flex width="100%" justifyContent="flex-end" className="stats">
            <Flex flexDirection="column" width="100%">
              <Price alignItems="center" width="100%" justifyContent="space-between" mb="12px" marginRight="12px">
                <Text>KogeCoin Price {' '}</Text>
                <Text fontWeight="bold">${kogePrice && kogePrice.toLocaleString(undefined, { maximumFractionDigits: 4 })} {' '}</Text>
              </Price>
            </Flex>
          </Flex>)}

        <Flex width={isDesktop ? "30%" : "100%"} justifyContent="right" className="stats">
          <Flex flexDirection="column" width="100%">
            <Price alignItems="center" width="100%" justifyContent="space-between">
              <Text>My Total Value Staked: {' '}</Text>
              {/* <Text fontWeight="bold">${tvl?.}</Text> */}
              <Text fontWeight="bold">${userTvl.isZero() ? '0' : displayUserTVL}</Text>
            </Price>
          </Flex>
        </Flex>
      </Hero>

      <ControlContainer isDesktop={isDesktop}>
        <ToggleWrapper>
          <Text fontSize="12px" bold>{t('Staked only')}</Text>
          <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
        </ToggleWrapper>
        <FarmTabButtons hasStakeInFinishedFarms={stakedInactiveFarms.length > 0} />

        <VaultTypesContainer isDesktop={isDesktop}>
          <CheckBoxMenu onChange={handleItemClick} />
        </VaultTypesContainer>

        <LabelWrapper style={isDesktop ? { marginLeft: 0 } : {}}>
          <Text>Platform</Text>
          <Select
            style={isDesktop ? { width: 170 } : {}}
            options={[
              {
                label: 'All',
                value: '',
              },
              ...options
            ]}
            value={platformSelectOption}
            onChange={(e) => handleSortOptionChangeAlt(e)}
          />
        </LabelWrapper>

        <LabelWrapper style={isDesktop ? { marginLeft: 0 } : { margin: "12px 0px" }}>
          <SearchInput onChange={handleChangeQuery} placeholder="Search by asset" />
        </LabelWrapper>
      </ControlContainer>

      <InfoContainer>
        <Text fontSize="12px">
          Showing {current} of {activeFarms.length} vaults
        </Text>
      </InfoContainer>

      {renderContent()}
      <div ref={loadMoreRef} />
    </Page>
  )
}

export default React.memo(Farms)
