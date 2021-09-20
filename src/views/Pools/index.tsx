import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import numeral from 'numeral'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text } from 'components/Pancake'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import usePersistState from 'hooks/usePersistState'
import { usePools, useBlock, useFetchCakeVault, useGetApiPrice } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import PoolCard from './components/PoolCard'

const NUMBER_OF_POOLS_VISIBLE = 12

const Progress = styled.div<{ progress: number }>`
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
    width: ${({ progress }) => progress ?? 0}%;
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

const format = num => numeral(num).format('0,0.00')

// @ts-ignore
const Pools: React.FC = ({ ...rest }) => {
  useFetchCakeVault()
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  const [stakedOnly] = usePersistState(false, 'pancake_pool_staked')
  const [numberOfPoolsVisible, setNumberOfPoolsVisible] = useState(NUMBER_OF_POOLS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const kogeRemaining = useGetApiPrice('kogeremaining') ?? 0;
  const kogeInitial = 45101793;

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

  const percent = ((kogeInitial - kogeRemaining) / kogeInitial) * 100

  return (
    <Page>
      <StyledFlex
        justifyContent="space-between"
        flexDirection={['column', null, 'row']}
      >
        <StyledFlex
          flexDirection="column"
          mr={['8px', 0]}
          width="50%"
          className="info"
        >
          <Heading scale="lg" mb="16px">
            {t('KogeCoin Farms')}
          </Heading>
          <Text mb="32px" fontSize="16px">
            {t('Stake KogeCoin-Matic LP and KogeCoin to earn more KogeCoin. All of our remaining supply is being distributed to holders through these farms.')}
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
            <Text fontWeight="bold">KogeCoin Distributed</Text>

            <Flex>
              <Text
                fontWeight="bold"
              >
                {format(kogeInitial - kogeRemaining)} /
              </Text>
              <Text>
                {format(kogeInitial)}
              </Text>
            </Flex>
          </Flex>
          <Progress progress={percent} />
          <Flex
            justifyContent="space-between"
            width="100%"
            mt="20px"
          />
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
