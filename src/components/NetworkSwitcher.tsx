import { CHAINS, SUPPORTED_CHAINS } from "config/index"
import useNetworkSwitcher from "hooks/useNetworkSwitcher"
import React from "react"
import { setFarms } from "state/farms"
import { useAppDispatch } from "state/index"
import { setupNetwork } from "utils/wallet"
import { connectorLocalStorageKey } from "./Pancake"
import Select, { OptionProps } from "./Select/Select"


function NetworkSwitcher() {
    const dispatch = useAppDispatch()
    const { getCurrentNetwork, setCurrentNetwork } = useNetworkSwitcher()

    const networks = React.useMemo(
        () => [
            { ...CHAINS[SUPPORTED_CHAINS.MATIC], SUPPORTED_CHAIN: SUPPORTED_CHAINS.MATIC },
            { ...CHAINS[SUPPORTED_CHAINS.MOONRIVER], SUPPORTED_CHAIN: SUPPORTED_CHAINS.MOONRIVER },
            { ...CHAINS[SUPPORTED_CHAINS.FANTOM], SUPPORTED_CHAIN: SUPPORTED_CHAINS.FANTOM },
        ]
            .map(n => ({
                label: n.chainNameAbbr,
                value: n.SUPPORTED_CHAIN,
                icon: <img key={n.logoUrl} src={n.logoUrl} alt={n.chainNameAbbr} style={{ width: 20, height: 20 }} />
            }))
        , [])

    const [value, setValue] = React.useState<OptionProps>(networks.find(v => v.value === getCurrentNetwork()))

    const changeNetwork = async (v: OptionProps) => {
        window.localStorage.removeItem(connectorLocalStorageKey);
        setValue(v)
        setCurrentNetwork(v.value)
        await setupNetwork(v.value)
        dispatch(setFarms([]))
        dispatch(setFarms(CHAINS[v.value].farms ?? []))
    }

    return <Select value={value} options={networks} onChange={changeNetwork} />

}

export default React.memo(NetworkSwitcher)