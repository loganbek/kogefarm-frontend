import React, { lazy } from 'react'
import ScrollToTop from "react-scroll-to-top";
// import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { ResetCSS } from 'components/Pancake'
import { ArrowUpIcon } from 'components/Pancake/Svg'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
// import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import { useFetchPriceList, useFetchPublicData } from 'state/hooks'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher';
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import history from './routerHistory'
import { setupNetwork } from 'utils/wallet';
// import PrivacyPolicy from './views/PrivacyPolicy'
// import TermsOfUse from './views/TermsOfUse';

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
// const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Collectibles = lazy(() => import('./views/Collectibles'))
// const Teams = lazy(() => import('./views/Teams'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const Profile = lazy(() => import('./views/Profile'))
// const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
// const Predictions = lazy(() => import('./views/Predictions'))
const PrivacyPolicy = lazy(() => import('./views/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('./views/TermsOfUse'))


// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { getCurrentNetwork } = useNetworkSwitcher()
  useEagerConnect(getCurrentNetwork())
  useFetchPublicData(getCurrentNetwork)
  useFetchPriceList(getCurrentNetwork)

  React.useEffect(() => {
    setupNetwork(getCurrentNetwork())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Redirect exact from="/" to="vaults" />
            <Route path="/vaults">
              <Farms />
            </Route>
            <Route path="/farms">
              <Pools />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms" >
              <TermsOfUse />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <ToastListener />
      <ScrollToTop
        smooth
        color="#ffffff"
        style={{
          backgroundColor: "#1EA306",
          borderRadius: "4px",
        }}
        component={<ArrowUpIcon color="white" />}
      />
    </Router>
  )
}

export default React.memo(App)
