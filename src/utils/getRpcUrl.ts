import random from 'lodash/random'
import { CHAINS, SUPPORTED_CHAINS } from 'config/index'

export const getRandomRpcNode = (nodes: string[]) => nodes?.[random(0, nodes?.length - 1)]

// todo get dynamically node based on current network
export const getNodeUrl = (chain: SUPPORTED_CHAINS) => getRandomRpcNode(CHAINS[chain]?.rpcUrls ?? [])


