import React, { useEffect, useMemo, useRef, useState } from 'react'
// import Countdown from 'react-countdown';
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text, Skeleton } from 'components/Pancake'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import usePersistState from 'hooks/usePersistState'
import { usePools, useBlock, useFetchCakeVault, useGetApiPrice } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import Balance from 'components/Balance'
import PoolCard from './components/PoolCard'
// import CakeVaultCard from './components/CakeVaultCard'
// import BountyCard from './components/BountyCard'

const NUMBER_OF_POOLS_VISIBLE = 12

const Progress = styled.div<{ progress: number}>`
  background-color: ${({ theme }) => theme.colors.rowHeader};
  height: 4px;
  border-radius: 21px;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.success};
    left: 0;
    top: 0;
    width: 30%;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0;

    .info {
      order: 1;
    }

    .progress {
      order: 0;
      margin-bottom: 20px;
    }
  }
`

const MINTED = 100000;
const TOTAL_SUPPLY = 800000;

const Pools: React.FC = () => {
  useFetchCakeVault()
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  const kogeRemaining = useGetApiPrice('kogeremaining');
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

  // const tvl = farmsList(allFarms).reduce((sum, current) => sum.plus(current.liquidity), new BigNumber(0))
  // const displayTVL = tvl ? (
  //   `$${Number(tvl).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  // ) : (
  //   <Skeleton width={60} />
  // )
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

  const percent = (TOTAL_SUPPLY / MINTED) * 10

  return (
    <Page>
      <StyledFlex
        justifyContent="space-between" 
        flexDirection={['column', null, 'row']}
      >
        <StyledFlex 
          flexDirection="column"
          mr={['8px', 0]}
          width="90%"
          pr="20%"
          className="info"
        >
          <Heading scale="lg" mb="16px">
            {t('Farms to invest')}
          </Heading>
          <Text mb="32px" fontSize="16px">
            {t('Stake KogeCoin LP and KogeCoins to earn. All of our remaining supply are being distributed to holders through this farm.')}
          </Text>
        </StyledFlex>
        <StyledFlex
          alignItems="center"
          flexDirection="column" 
          width="30%"
          className="progress"
        >
          <Flex
            justifyContent="space-between"
            width="100%"
            mb="8px"
          >
            <Text fontWeight="bold">Mined Kogecoin</Text>

            <Flex>
              <Text
                fontWeight="bold"
              >
                100,000/
              </Text>
              <Text>
                800,000
              </Text>
            </Flex>
          </Flex>
          <Progress progress={percent} />
          <Flex
            justifyContent="space-between"
            width="100%"
            mt="20px"
          >
            <Text fontWeight="bold">Vault TVL</Text>
            <Text fontWeight="bold">
              100,000
            </Text>
          </Flex>
        </StyledFlex>
      </StyledFlex>
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
                   {/* <CakeVaultCard pool={cakePoolData} showStakedOnly={stakedOnly} /> */}
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
    </Page>
  )
}

export default Pools
