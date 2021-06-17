import React, { useEffect, useMemo, useRef, useState } from 'react'
// import Countdown from 'react-countdown';
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Image } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import usePersistState from 'hooks/usePersistState'
import { usePools, useBlock, useFetchCakeVault, useGetApiPrice } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
// import Balance from 'components/Balance'
import PoolCard from './components/PoolCard'
// import CakeVaultCard from './components/CakeVaultCard'
import PoolTabButtons from './components/PoolTabButtons'
// import BountyCard from './components/BountyCard'

const NUMBER_OF_POOLS_VISIBLE = 12

const Pools: React.FC = () => {
  useFetchCakeVault()
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  const [stakedOnly, setStakedOnly] = usePersistState(false, 'pancake_pool_staked')
  const [numberOfPoolsVisible, setNumberOfPoolsVisible] = useState(NUMBER_OF_POOLS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || currentBlock > pool.endBlock),
    [currentBlock, pools],
  )
  const stakedOnlyFinishedPools = useMemo(
    () => finishedPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [finishedPools],
  )
  const stakedOnlyOpenPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )
//  const hasStakeInFinishedPools = stakedOnlyFinishedPools.length > 0

  // This pool is passed explicitly to the cake vault
//  const cakePoolData = useMemo(() => openPools.find((pool) => pool.sousId === 0), [openPools])

  useEffect(() => {
    const showMorePools = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfPoolsVisible((poolsCurrentlyVisible) => poolsCurrentlyVisible + NUMBER_OF_POOLS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMorePools, {
        rootMargin: '0px',
        threshold: 1,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [observerIsSet])
//  const Completionist = () => <span>now</span>;

  const kogePrice = useGetApiPrice('kogecoin');

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('KogeCoin Farms')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Stake KogeCoin LP and KogeCoins to earn. All of our remaining supply are being distributed to holders through this farm.')}
            </Heading>
            <Heading scale="md" color="brown">
            {t('KogeCoin Price: $')}{kogePrice && kogePrice.toFixed(4)}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <PoolTabButtons
          stakedOnly={stakedOnly}
          setStakedOnly={setStakedOnly}
//          hasStakeInFinishedPools={hasStakeInFinishedPools}
        />
        <FlexLayout>
          <Route exact path={`${path}`}>
            <>
              {stakedOnly
                ? orderBy(stakedOnlyOpenPools, ['sortOrder'])
                    .slice(0, numberOfPoolsVisible)
                    .map((pool) => <PoolCard key={pool.sousId} pool={pool} account={account} />)
                : orderBy(openPools, ['sortOrder'])
                    .slice(0, numberOfPoolsVisible)
                    .map((pool) => <PoolCard key={pool.sousId} pool={pool} account={account} />)}
{/*                    <CakeVaultCard pool={cakePoolData} showStakedOnly={stakedOnly} /> */}
            </>
          </Route>
          <Route path={`${path}/history`}>
            {stakedOnly
              ? orderBy(stakedOnlyFinishedPools, ['sortOrder'])
                  .slice(0, numberOfPoolsVisible)
                  .map((pool) => <PoolCard key={pool.sousId} pool={pool} account={account} />)
              : orderBy(finishedPools, ['sortOrder'])
                  .slice(0, numberOfPoolsVisible)
                  .map((pool) => <PoolCard key={pool.sousId} pool={pool} account={account} />)}
          </Route>
        </FlexLayout>
        <div ref={loadMoreRef} />
        <Image
          mx="auto"
          mt="12px"
          src="/images/koalaGold-sm.png"
          alt="KogeCoin Illustration"
          width={150}
          height={150}
        />
      </Page>
    </>
  )
}

export default Pools
