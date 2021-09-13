import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from 'react-router-dom'
import styled, { css } from "styled-components";
import BigNumber from 'bignumber.js'
import throttle from "lodash/throttle";
import { Box } from "components/Pancake";
import { useTranslation } from 'contexts/Localization'
import { latinise } from 'utils/latinise'
import { getAddress } from 'utils/addressHelpers'
import { getMetaFarmApr } from 'utils/apr'
import { Farm } from 'state/types'
import { useFarms, useGetApiPrices, useGetApiPrice } from 'state/hooks'
import { FarmWithStakedValue } from '../../../views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from "../hooks";
import Skeleton from '../Skeleton/Skeleton'
import Text from '../Text/Text'
import Logo from "./components/Logo";
import { Wordmark } from "./icons";
import Panel from "./components/Panel";
import Avatar from "./components/Avatar";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  flex-shrink: 0;

  @media screen and (max-width: 576px) {
    width: auto;
  }
`

const Stat = styled(Text)`
  span {
    color: #1EA306;
    font-weight: 600;
  }
`

const InfoContainer = styled.div`
  display: flex;
  padding-left: 24px;

  > div:first-of-type {
    margin-right: 24px;
  }
`

// const StyledNav = styled.nav<{ showMenu: boolean }>`
//   position: fixed;
//   top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
//   left: 0;
//   transition: top 0.2s;
//   display: flex;
//   align-items: center;
//   padding-left: 8px;
//   padding-right: 16px;
//   width: 100%;
//   height: ${MENU_HEIGHT}px;
//   background-color: ${({ theme }) => theme.nav.background};
//   background-image: url('/images/header-bg.png');
//   background-repeat: no-repeat;
//   background-position: center top;
//   z-index: 20;
//   transform: translate3d(0, 0, 0);

//   @media screen and (max-width: 576px) {
//     background-image: none;
//   }
// `;


const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.2s;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  background-image: url('/images/header-bg.png');
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 20;
  transform: translate3d(0, 0, 0);

  @media screen and (max-width: 576px) {
    background-image: none;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Menu: React.FC<NavProps> = ({
  account,
  profile,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  kogePriceUSD,
  links,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const { pathname } = useLocation()
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const [query] = useState('')
  const refPrevOffset = useRef(window.pageYOffset);
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()
  const prices = useGetApiPrices()

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived
  const allFarms = farmsLP.filter((farm) => farm.pid !== 0)
  const kogePrice = useGetApiPrice('kogecoin');

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
    [query, prices, isActive],
  )


  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const tvl = farmsList(allFarms).reduce((sum, current) => sum.plus(current.liquidity), new BigNumber(0))
  const displayTVL = tvl ? (
    `$${Number(tvl).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  ) : (
    <Skeleton width={60} />
  )


  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <LogoContainer>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <Box ml="10px">
            <Wordmark isDark={isDark} />
          </Box>
        </LogoContainer>

        { !isMobile ? (
          <InfoContainer>
            <Stat>
              KogeCoin Price
              {" "}
              <span>${ kogePrice?.toFixed(4) ?? 0}</span>
            </Stat>
            <Stat>
              {t('Vault TVL ')}
              {" "}
              <span>{displayTVL !== '$NaN' && displayTVL}</span>
            </Stat>
          </InfoContainer>
        ) : null}

        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>

      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={kogePriceUSD}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
