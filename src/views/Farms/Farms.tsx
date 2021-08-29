import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { Tooltip } from 'react-tippy'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text, Flex, Box } from 'components/Pancake'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { AutoCompound } from 'components/Pancake/Svg'
import { useFarms, useGetApiPrices, useGetApiPrice } from 'state/hooks'
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

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
  width: 300px;
`

const StyledText = styled(Text)`
  svg {
    position: relative;
    top: 7px;
    left: -2px;
    margin: 0 4px;

  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Text} {
    margin-right: 8px;
  }
`

const Hero = styled(Flex)`
  a {
    color: #1EA306;
    text-decoration: underline;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 10px;
    position: relative;
    top: 9px;
    z-index: 1;
    background: ${({ theme }) => theme.colors.background};
    display: inline-block;
    left: 10px;
    padding: 2px 6px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const InfoContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-top: 26px;
`

const Price = styled(Flex)`
  b {
    margin-left: 8px;
  }
`

const NUMBER_OF_FARMS_VISIBLE = 12

// @ts-ignore
const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { data: farmsLP, userDataLoaded } = useFarms()
  const [query, setQuery] = useState('')
  const [current, setCurrent] = useState(0)
  const [platform, setPlatform] = useState('')
  const [viewMode] = usePersistState(ViewMode.TABLE, 'kogefarm_farm_view')
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')
  const prices = useGetApiPrices()
  const kogePrice = useGetApiPrice('kogecoin');

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

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
  const archivedFarms = farmsLP.filter((farm) => isArchivedPid(farm.pid))

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedArchivedFarms = archivedFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
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
        let decimals = 18
        if (farm.token === farm.quoteToken) {
          decimals = farm.token.decimals
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
          totalLiquidity = totalLiquidity.times(10 ** (18-decimals))
        }
        const jarLPDeposits = new BigNumber(farm.jarLPDeposits)
        //        const jarRatioNum = new BigNumber(farm.jarRatio)
        let totalDeposits = new BigNumber(farm.totalDeposits).times(new BigNumber(quoteTokenPriceUsd))
        if (farm.token === farm.quoteToken) {
          totalDeposits = new BigNumber(farm.jarLPDeposits).div(10 ** decimals).times(new BigNumber(quoteTokenPriceUsd))
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
        // Special case: pSwamp
        const masterChefAddress = getAddress(farm.masterChefAddresses)
        let rewardPerBlock1 = farm.rewardPerBlock1
        if (masterChefAddress==='0x7d39705Cc041111275317f55B3A406ACC83615Bc' || masterChefAddress==='0x0706b1A8A1Eeb12Ce7fb1FFDC9A4b4cA31920Eae' || masterChefAddress==='0x9C515E2489749E2befA0B054EfCb3b34B2c7F432' || masterChefAddress==='0x94BE6A449a5c286734522FC6047484ac763c595C' || masterChefAddress==='0xd032Cb7a0225c62E5e26455dFE4eE8C87df254e3' || masterChefAddress==='0x7B6bA2709A597Bcbf7Ff54116c0E88DE5fe2C381' || masterChefAddress==='0x1c0a0927105140216425c84399E68F8B31E7510E'){
          rewardPerBlock1 *= new BigNumber(farm.lpTokenBalanceMC).toNumber()
        }

        if (farm.rewardToken1){
          rewardPerBlock = (rewardPerBlock1*prices[farm.rewardToken1.coingeico.toLowerCase()] + farm.rewardPerBlock2*prices[farm.rewardToken2.coingeico.toLowerCase()])/prices[farm.quoteToken.coingeico.toLowerCase()]
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
    [query, prices, isActive],
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const loadMoreRef = useRef<HTMLDivElement>(null)
  const handleCurrent = c => setCurrent(c)

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)

  const farmsStakedMemoized = useMemo(() => {
    let farmsStaked = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
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
  ])

  useEffect(() => {
    const showMoreFarms = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfFarmsVisible((farmsCurrentlyVisible) => farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMoreFarms, {
        rootMargin: '0px',
        threshold: 1,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [farmsStakedMemoized, observerIsSet])

  const rowData = farmsStakedMemoized.map((farm) => {
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
        value: farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 }),
        originalValue: farm.apr,
      },
      apy: {
        align: 'flex-end',
        value: farm.apr && farmAPYNum.toLocaleString('en-US', { maximumFractionDigits: 2 }),
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
  })

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
              return b.id - a.id
            case 'apr':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'apy':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'earned':
              return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      }))

      return (
        <Table
          data={rowData}
          columns={columns}
          userDataReady={userDataReady}
          handleCurrent={handleCurrent}
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

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  const handleSortOptionChangeAlt = (option: OptionProps): void => {
    setPlatform(option.value)
    setSortOption('platform')
  }

  const options = uniqBy(activeFarms.map(farm => ({
    label: farm.platform,
    value: farm.platform
  })), 'label')

  return (
    <Page>
      <Hero>
        <Flex width="70%" flexDirection="column" mb="30px">
          <Heading scale="lg" mb="16px">
            Vaults to stake
          </Heading>
          <StyledText mb="16px">
            {t('KogeFarm helps you earn more yield by ')}
            {' '}
            <AutoCompound />
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
            {' '}
            <a href="https://github.com/Tibereum/obelisk-audits/blob/main/Kogefarm.pdf">Audited</a>
            {' '}
            by Obelisk.
          </StyledText>
        </Flex>
        <Flex width="30%" justifyContent="flex-end">
          <Flex flexDirection="column" width="100%">
            <Price alignItems="center" width="100%" justifyContent="space-between" mb="12px">
              <Text fontSize="14px" fontWeight="bold">KogeCoin Price</Text>
              <Text fontSize="14px" fontWeight="bold">${kogePrice?.toFixed(4) ?? 0}</Text>
            </Price>
            <Price alignItems="center" width="100%" justifyContent="space-between">
              <Text fontSize="14px" fontWeight="bold">Vault TVL</Text>
              <Text fontSize="14px" fontWeight="bold">${kogePrice?.toFixed(4) ?? 0}</Text>
            </Price>
          </Flex>
        </Flex>
      </Hero>
      <ControlContainer>
        <ViewControls>
          <ToggleWrapper>
            <Text> {t('Staked only')}</Text>
            <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
          </ToggleWrapper>
          <FarmTabButtons hasStakeInFinishedFarms={stakedInactiveFarms.length > 0} />
        </ViewControls>
        <FilterContainer>
          <LabelWrapper style={{ marginLeft: 16 }}>
            <Text fontSize="10px">Search by asset</Text>
            <SearchInput onChange={handleChangeQuery} />
          </LabelWrapper>
          <LabelWrapper style={{ marginLeft: 24 }}>
            <Text fontSize="10px">Sort By</Text>
            <Select
              options={[
                {
                  label: 'Hot',
                  value: 'hot',
                },
                {
                  label: 'Total Staked',
                  value: 'liquidity',
                },
                {
                  label: 'APY',
                  value: 'apr',
                },
              ]}
              onChange={handleSortOptionChange}
            />
          </LabelWrapper>
          <LabelWrapper style={{ marginLeft: 24 }}>
            <Text>Platform</Text>
            <Select
              options={[
                {
                  label: '',
                  value: '',
                },
                ...options
              ]}
              onChange={(e) => handleSortOptionChangeAlt(e)}
            />
          </LabelWrapper>
        </FilterContainer>
      </ControlContainer>
    
      <InfoContainer>
        <Text fontSize="12px">
          Showing {current} of {activeFarms.length} vaults
        </Text>
      </InfoContainer>

      {renderContent()}
      <div ref={loadMoreRef} />
      <Text color="text" textAlign="center" fontSize="125%">
        {t(
          'No more sleep deprived degens with KogeFarm! We compound your farming rewards every 5 minutes so you can play more.',
        )}
      </Text>
      <Text color="text" textAlign="center" fontSize="125%">
        {t('Please Note: Farms with a high annual percentage yield (APY) are inherently ')}{' '}
        <u>
          <a href="https://koge.gitbook.io/kogefarm/faqs/why-is-the-apy-so-high-and-what-are-its-risks">
            risky
          </a>
        </u>
        {t('. Always DYOR.')}
      </Text>
      <Text color="text" textAlign="center" fontSize="125%">
        {'\n'}
        {t('Fee Disclosure: Our vaults have NO deposit or withdrawal fees, and only a 1% ')}{' '}
        <u>
          <a href="https://koge.gitbook.io/kogefarm/fees">fee</a>
        </u>
        {t(' on rewards.')}
      </Text>
      <StyledImage src="/images/koalaGold-sm.png" alt="KogeCoin Illustration" width={150} height={150} />
    </Page>
  )
}

export default Farms
