import { SUPPORTED_CHAINS } from "config/index"
import { useLocalStorage, LocaleStorageKey } from "./useLocalStorage"

const useNetworkSwitcher = () => {
    const { get, set } = useLocalStorage<SUPPORTED_CHAINS>(LocaleStorageKey.chain)

    const getCurrentNetwork = () => get() ?? SUPPORTED_CHAINS.MATIC
    const setCurrentNetwork = (data: SUPPORTED_CHAINS) => set(data)

    return { getCurrentNetwork, setCurrentNetwork }

}
export default useNetworkSwitcher