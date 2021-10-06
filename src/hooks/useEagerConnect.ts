import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from 'components/Pancake'
import useAuth from 'hooks/useAuth'
import { SUPPORTED_CHAINS } from 'config/index'

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc

        resolve()
      },
    }),
  )

const useEagerConnect = (chain: SUPPORTED_CHAINS) => {
  const { login } = useAuth(chain)

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

    if (connectorId) {
      const isConnectorBinanceChain = connectorId === ConnectorNames.BSC
      const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

      // Currently BSC extension doesn't always inject in time.
      // We must check to see if it exists, and if not, wait for it before proceeding.
      if (isConnectorBinanceChain && !isBinanceChainDefined) {
        _binanceChainListener().then(() => login(connectorId))

        return
      }

      login(connectorId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useEagerConnect
