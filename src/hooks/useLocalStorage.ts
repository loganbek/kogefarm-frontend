export enum LocaleStorageKey {
    chain = "chain"
}

export const useLocalStorage = <T>(key: LocaleStorageKey) => {
    const get = (): T => JSON.parse(localStorage.getItem(key))
    const set = (data: T) => localStorage.setItem(key, JSON.stringify(data))
    const del = () => localStorage.removeItem(key)

    return { get, set, del }
}
export default useLocalStorage