import { getWeb3NoAccount } from 'utils/web3'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, KOGE_TOKEN_DECIMAL } from 'config'
import { ethers } from 'ethers'
import { BIG_TEN, BIG_ZERO } from './bigNumber'


export const approve = async (lpContract, masterChefContract, account) => {
    return lpContract.methods
        .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
        .send({ from: account })
}

export const jarApprove = async (lpContract, jarContractAddress, account) => {
    return lpContract.methods
        .approve(jarContractAddress, ethers.constants.MaxUint256)
        .send({ from: account })
}


export const stake = async (masterChefContract, pid, amount, account, library) => {
    const [gasLimit] = await estimateGas(masterChefContract.methods.deposit(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()), account, library)

    return masterChefContract.methods
        .deposit(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
        .send({ from: account, gas: gasLimit })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const stakeKoge = async (masterChefContract, pid, amount, account, library) => {
    const [gasLimit] = await estimateGas(masterChefContract.methods.deposit(pid, new BigNumber(amount).times(KOGE_TOKEN_DECIMAL).toString()), account, library)

    return masterChefContract.methods
        .deposit(pid, new BigNumber(amount).times(KOGE_TOKEN_DECIMAL).toString())
        .send({ from: account, gas: gasLimit })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const depositJar = async (jarContract, amount, account, library) => {
    let decimals = DEFAULT_TOKEN_DECIMAL
    if (jarContract.options.address === "0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657") {
        decimals = KOGE_TOKEN_DECIMAL
    }
    if (jarContract.options.address === "0x32219C86B0317601ea4cEd7586A278ac89B465eB") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x5AB24bA8183dA4D0E050fD00257dE291CDD17a89") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x1B247E74d5c2D6CeF12C9BEc8115282CbC45c8B5" || jarContract.options.address === "0x0eB72cd5f9911C307a0E3B07426a7FDeb4588600" || jarContract.options.address === "0x89030969DB2B51897D7f4C789b7C9d3c2ef05083" || jarContract.options.address === "0xb9F9E41ac77A6B6E90e7EC26D9CDcEdB194F508A") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x58c12402428ca79Da43Bf14B70CbC59DF5Dfe61a" || jarContract.options.address === "0xAFBFB2Bc9C0C00781993B203f43605966C8cD637" || jarContract.options.address === "0x2C61069B2e429F132CeF57D28aC58F4fA91B1dE1") {
        decimals = new BigNumber(10 ** 8)
    }

    /*  if (jarContract.options.address==="0xA2C2473ccE81aF668f25C8d798f7A1C0F9172Cb9"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0x7F75a9924066Fff7c97B150cB5119D5F9C8FD0E4"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0xcB57482aF988A2A00F14fa796920c50C4eb932A1"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0x95a56528Dcf6e8eC4c020Af18f869eA77b76E265"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0xCc72AF943EF649B540021590fF349A454b5E2e9a"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0xf5bc9A2251A1Ae5AEeb0286CC9562608E8bDb824"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0x5781135c882d4Fc8c61D0C826123761F20F67153"){
        gasLimit = 3000000
      }
      if (jarContract.options.address==="0x52fd74517b9728E4a8c6A44a6D5efeECB49e2aC5"){
        gasLimit = 3000000
      } */
    const [gasLimit, gasPrice] = await estimateGas(jarContract.methods.deposit(new BigNumber(amount).times(decimals).toString()), account, library)

    return jarContract.methods
        .deposit(new BigNumber(amount).times(decimals).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(sousChefContract.methods.deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString()), account, library)

    return sousChefContract.methods
        .deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const sousStakeBnb = async (sousChefContract, amount, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(sousChefContract.methods.deposit(), account, library)

    return sousChefContract.methods
        .deposit()
        .send({ from: account, gas: gasLimit, gasPrice, value: new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString() })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const unstake = async (masterChefContract, pid, amount, account, library) => {
    if (pid === 0) {
        const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.leaveStaking(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()), account, library)

        return masterChefContract.methods
            .leaveStaking(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
            .send({ from: account, gas: gasLimit, gasPrice })
            .on('transactionHash', (tx) => {
                return tx.transactionHash
            })
    }
    const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()), account, library)

    return masterChefContract.methods
        .withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const withdrawalJar = async (jarContract, amount, account, library) => {
    let decimals = DEFAULT_TOKEN_DECIMAL
    if (jarContract.options.address === "0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657") {
        decimals = KOGE_TOKEN_DECIMAL
    }
    if (jarContract.options.address === "0x32219C86B0317601ea4cEd7586A278ac89B465eB") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x5AB24bA8183dA4D0E050fD00257dE291CDD17a89") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x1B247E74d5c2D6CeF12C9BEc8115282CbC45c8B5" || jarContract.options.address === "0x0eB72cd5f9911C307a0E3B07426a7FDeb4588600" || jarContract.options.address === "0x89030969DB2B51897D7f4C789b7C9d3c2ef05083" || jarContract.options.address === "0xb9F9E41ac77A6B6E90e7EC26D9CDcEdB194F508A") {
        decimals = new BigNumber(10 ** 6)
    }
    if (jarContract.options.address === "0x58c12402428ca79Da43Bf14B70CbC59DF5Dfe61a" || jarContract.options.address === "0xAFBFB2Bc9C0C00781993B203f43605966C8cD637" || jarContract.options.address === "0x2C61069B2e429F132CeF57D28aC58F4fA91B1dE1") {
        decimals = new BigNumber(10 ** 8)
    }

    const [gasLimit, gasPrice] = await estimateGas(jarContract.methods.withdraw(new BigNumber(amount).times(decimals).toString()), account, library)
    return jarContract.methods
        .withdraw(new BigNumber(amount).times(decimals).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}


export const sousUnstake = async (sousChefContract, amount, decimals, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(sousChefContract.methods.withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString()), account, library)

    return sousChefContract.methods
        .withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const masterChefUnstake = async (masterChefContract, pid, amount, decimals, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.withdraw(pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString()), account, library)

    return masterChefContract.methods
        .withdraw(pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const sousEmergencyUnstake = async (sousChefContract, account) => {
    return sousChefContract.methods
        .emergencyWithdraw()
        .send({ from: account })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const masterChefEmergencyUnstake = async (masterChefContract, pid, account) => {
    return masterChefContract.methods
        .emergencyWithdraw(pid)
        .send({ from: account, gas: 800000, gasPrice: '5000000000' })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}


export const harvest = async (masterChefContract, pid, account, library) => {
    if (pid === 0) {
        const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.leaveStaking('0'), account, library)

        return masterChefContract.methods
            .leaveStaking('0')
            .send({ from: account, gas: gasLimit, gasPrice })
            .on('transactionHash', (tx) => {
                return tx.transactionHash
            })
    }
    const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.deposit(pid, '0'), account, library)

    return masterChefContract.methods
        .deposit(pid, '0')
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const soushHarvest = async (sousChefContract, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(sousChefContract.methods.deposit('0'), account, library)

    return sousChefContract.methods
        .deposit('0')
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const masterchefHarvest = async (masterChefContract, pid, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(masterChefContract.methods.deposit(pid, '0'), account, library)

    return masterChefContract.methods
        .deposit(pid, '0')
        .send({ from: account, gas: gasLimit, gasPrice })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}


export const soushHarvestBnb = async (sousChefContract, account, library) => {
    const [gasLimit, gasPrice] = await estimateGas(sousChefContract.methods.deposit(), account, library)

    return sousChefContract.methods
        .deposit()
        .send({ from: account, gas: gasLimit, gasPrice, value: BIG_ZERO })
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

export const estimateGas = async (callObject, account, library) => {
    let gasLimit = await callObject.estimateGas({ from: account })

    // estimateGas is not super accurate, so doubling it to be safe
    gasLimit *= 2

    // Matic has gasLimit of 20M per block, so want to set to 15M if estimate is higher
    if (gasLimit > 15000000) {
        gasLimit = 15000000
    }

    const web3 = library ? new Web3(library) : getWeb3NoAccount()

    const gasPrice = await web3.eth.getGasPrice();
    const gasPriceEstimate = (parseInt(gasPrice) * 2).toString();

    return [gasLimit, gasPriceEstimate]
}