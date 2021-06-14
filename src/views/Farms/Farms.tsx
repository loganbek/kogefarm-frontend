import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text, Skeleton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import { useFarms, useGetApiPrices } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import usePersistState from 'hooks/usePersistState'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
// import { getFarmApr } from 'utils/apr'
import { getMetaFarmApr } from 'utils/apr'
import { orderBy } from 'lodash'
// import { getAddress } from 'utils/addressHelpers'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import PageHeader from 'components/PageHeader'
import { fetchFarmsPublicDataAsync, setLoadArchivedFarmsData } from 'state/farms'
import Select, { OptionProps } from 'components/Select/Select'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Table from './components/FarmTable/FarmTable'
// import FarmTabButtons from './components/FarmTabButtons'
import SearchInput from './components/SearchInput'
import { RowProps } from './components/FarmTable/Row'
import ToggleView from './components/ToggleView/ToggleView'
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
    padding: 16px 32px;
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
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
const NUMBER_OF_FARMS_VISIBLE = 12

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { data: farmsLP, userDataLoaded } = useFarms()
//  const cakePrice = usePriceCakeBusd()
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = usePersistState(ViewMode.TABLE, 'kogefarm_farm_view')
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')
  const prices = useGetApiPrices()

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

        if (!farm.tokenPriceVsQuote || !prices) {
          return farm
        }
        const quoteTokenPriceUsd = prices[farm.quoteToken.coingeico.toLowerCase()]
        let tokenPriceVsQuote = farm.rewardToken? new BigNumber(prices[farm.rewardToken.coingeico.toLowerCase()]).div(new BigNumber(prices[farm.quoteToken.coingeico.toLowerCase()])) : new BigNumber(farm.tokenPriceVsQuote)
        if (!farm.rewardToken && farm.token===farm.quoteToken) {
          tokenPriceVsQuote = new BigNumber(1)
        }
//        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken)
        let totalLiquidity = new BigNumber(farm.quoteTokenAmount).times(2)
        if (farm.token===farm.quoteToken){
          totalLiquidity = new BigNumber(farm.lpTokenBalanceMC)
        }
        const jarLPDeposits = new BigNumber(farm.jarLPDeposits)
//        const jarRatioNum = new BigNumber(farm.jarRatio)
        let totalDeposits = new BigNumber(farm.totalDeposits).times(new BigNumber(quoteTokenPriceUsd))
        if (farm.token===farm.quoteToken){
          totalDeposits = new BigNumber(farm.jarLPDeposits).div(10**18).times(new BigNumber(quoteTokenPriceUsd))
        }
        const farmRatio = new BigNumber(farm.jarRatio).div(10**18)
        let userDeposits
        if (jarLPDeposits>new BigNumber(0)){
          userDeposits = new BigNumber(farm.userData.stakedBalance).times(farmRatio).times(totalDeposits).div(jarLPDeposits);
        } else{
          userDeposits = new BigNumber(0);
        }

        const apr = isActive ? getMetaFarmApr(farm.poolWeightDesignate, farm.rewardPerBlock, totalLiquidity, tokenPriceVsQuote) : 0
        const tradingFeeRate = isActive ? new BigNumber(farm.tradingFeeRate).toNumber() : 0

        return { ...farm, apr, tradingFeeRate, liquidity: totalDeposits, userValue: userDeposits}
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
    const farmcomment = farm.kogefarmComment? farm.kogefarmComment.toUpperCase(): ''
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '') + farmcomment

    const row: RowProps = {
      apr: {
        value: farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 }),
//        multiplier: farm.multiplier,
//        lpLabel,
//        tokenAddress,
//        quoteTokenAddress,
//        cakePrice,
        originalValue: farm.apr,
      },
      apy: {
        // (1+800/(100*365*24*60))^(365*24*60)-1
        value: farm.apr && (((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(365*24*60/farm.minutesPerCompound) - 1)*100).toLocaleString('en-US', { maximumFractionDigits: 2 }),
//        multiplier: farm.multiplier,
//        lpLabel,
//        tokenAddress,
//        quoteTokenAddress,
//        cakePrice,
        originalValue: (((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(365*24*60/farm.minutesPerCompound) - 1)*100),
      },
      apyd: {
        // (1+800/(100*365*24*60))^(365*24*60)-1
        value: farm.apr && (((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(24*60/farm.minutesPerCompound) - 1)*100).toLocaleString('en-US', { maximumFractionDigits: 2 }),
//        multiplier: farm.multiplier,
//        lpLabel,
//        tokenAddress,
//        quoteTokenAddress,
//        cakePrice,
        originalValue: (((1+(farm.apr+365*farm.tradingFeeRate)*(1-farm.kogefarmFee)/(100*365*24*60/farm.minutesPerCompound))**(24*60/farm.minutesPerCompound) - 1)*100),
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
        liquidity: farm.liquidity,
      },
      userValue: {
          userValue: farm.userValue,
      },
/*      multiplier: {
        multiplier: farm.multiplier,
      }, */
      details: farm,
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

      return <Table data={rowData} columns={columns} userDataReady={userDataReady} />
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

  const tvl = rowData.reduce((sum,current) =>  sum.plus(current.liquidity.liquidity) , new BigNumber(0) );
  const displayTVL = tvl ? (
    `$${Number(tvl).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  ) : (
    <Skeleton width={60} />
  )

  return (
    <>
      <PageHeader>
{/*        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('Farms')}
        </Heading> */}
        <Heading scale="lg" color="text" textAlign="center">
          {t('KogeFarm helps you earn more yield by ')} <u><a href='https://kogecoin-io.gitbook.io/kogefarm/why-autocompound'>auto-compounding</a></u>{t(' high APR farms. ')}<u><a href='https://github.com/Tibereum/obelisk-audits/blob/main/Kogefarm.pdf'>Audited</a></u>{t(' by Obelisk.')}
        </Heading>
        <Heading scale="lg" color="brown" textAlign="center">
        {t('Vault TVL: ')} {displayTVL!=='$NaN' && displayTVL}
        </Heading>
      </PageHeader>
      <Page>
        <ControlContainer>
          <ViewControls>
            <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />
            <ToggleWrapper>
              <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
              <Text> {t('Staked only')}</Text>
            </ToggleWrapper>
  {/*          <FarmTabButtons hasStakeInFinishedFarms={stakedInactiveFarms.length > 0} /> */}
          </ViewControls>
          <FilterContainer>
            <LabelWrapper>
              <Text>SORT BY</Text>
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
//                  {
//                    label: 'Multiplier',
//                    value: 'multiplier',
//                  },
//                  {
//                    label: 'Earned',
//                    value: 'earned',
//                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text>SEARCH</Text>
              <SearchInput onChange={handleChangeQuery} />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
        <div ref={loadMoreRef} />
        <Text color="text" textAlign="center" fontSize="125%">
        {t('No more sleep deprived degens with KogeFarm! We compound your farming rewards every minute so you can play more.')}
        </Text>
        <Text color="text" textAlign="center" fontSize="125%">
          {t('Please Note: Farms with a high annual percentage yield (APY) are inherently ')} <u><a href='https://kogecoin-io.gitbook.io/kogefarm/faqs/why-is-the-apy-so-high-and-what-are-its-risks'>risky</a></u>
          {t('. Always DYOR.')}
        </Text>
        <Text color="text" textAlign="center" fontSize="125%">
          {"\n"}
          {t('Fee Disclosure: Our vaults have NO deposit or withdrawal fees. We do charge a 0-1% ')} <u><a href='https://kogecoin-io.gitbook.io/kogefarm/fees'>fee</a></u>{t(' on rewards.')}
        </Text>
        <StyledImage src="/images/koalaGold-sm.png" alt="KogeCoin Illustration" width={150} height={150} />
      </Page>
    </>
  )
}

export default Farms
