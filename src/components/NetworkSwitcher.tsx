import { CHAINS, SUPPORTED_CHAINS } from "config/index"
import useAuth from "hooks/useAuth"
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
    const { logout } = useAuth(getCurrentNetwork())

    const networks = React.useMemo(
        () => [
            { ...CHAINS[SUPPORTED_CHAINS.MATIC], SUPPORTED_CHAIN: SUPPORTED_CHAINS.MATIC },
            { ...CHAINS[SUPPORTED_CHAINS.MOONRIVER], SUPPORTED_CHAIN: SUPPORTED_CHAINS.MOONRIVER },
        ]
            .map(n => ({
                label: n.chainNameAbbr,
                value: n.SUPPORTED_CHAIN,
                icon: <img key={n.logoUrl} src={n.logoUrl} alt={n.chainNameAbbr} style={{ width: 20, height: 20 }} />
            }))
        , [])

    const [value, setValue] = React.useState(networks.find(v => v.value === getCurrentNetwork()))

    const changeNetwork = (v: OptionProps) => {
        dispatch(setFarms(CHAINS[v.value].farms ?? []))
        setCurrentNetwork(v.value)
        setValue(v)
        logout()
        window.localStorage.removeItem(connectorLocalStorageKey);
        setupNetwork(v.value)
    }

    return <Select value={value} options={networks} onChange={changeNetwork} />

}

export default React.memo(NetworkSwitcher)