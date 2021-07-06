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


export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    .send({ from: account, gas: 400000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const stakeKoge = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(KOGE_TOKEN_DECIMAL).toString())
    .send({ from: account, gas: 400000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const depositJar = async (jarContract, amount, account) => {
  let decimals = DEFAULT_TOKEN_DECIMAL
  if (jarContract.options.address==="0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657"){
    decimals = KOGE_TOKEN_DECIMAL
  }
  if (jarContract.options.address==="0x32219C86B0317601ea4cEd7586A278ac89B465eB"){
    decimals = new BigNumber(10**6)
  }
  if (jarContract.options.address==="0x5AB24bA8183dA4D0E050fD00257dE291CDD17a89"){
    decimals = new BigNumber(10**6)
  }
  if (jarContract.options.address==="0x58c12402428ca79Da43Bf14B70CbC59DF5Dfe61a"){
    decimals = new BigNumber(10**8)
  }
  return jarContract.methods
    .deposit(new BigNumber(amount).times(decimals).toString())
    .send({ from: account, gas: 800000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 400000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeBnb = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 400000, gasPrice:'5000000000', value: new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
      .send({ from: account, gas: 400000, gasPrice:'5000000000' })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    .send({ from: account, gas: 400000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const withdrawalJar = async (jarContract, amount, account) => {
  let decimals = DEFAULT_TOKEN_DECIMAL
  if (jarContract.options.address==="0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657"){
    decimals = KOGE_TOKEN_DECIMAL
  }
  if (jarContract.options.address==="0x32219C86B0317601ea4cEd7586A278ac89B465eB"){
    decimals = new BigNumber(10**6)
  }
  if (jarContract.options.address==="0x5AB24bA8183dA4D0E050fD00257dE291CDD17a89"){
    decimals = new BigNumber(10**6)
  }
  if (jarContract.options.address==="0x58c12402428ca79Da43Bf14B70CbC59DF5Dfe61a"){
    decimals = new BigNumber(10**8)
  }
  return jarContract.methods
    .withdraw(new BigNumber(amount).times(decimals).toString())
    .send({ from: account, gas: 800000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}


export const sousUnstake = async (sousChefContract, amount, decimals, account) => {
  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 800000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const masterChefUnstake = async (masterChefContract, pid, amount, decimals, account) => {
  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 800000, gasPrice:'5000000000' })
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
    .send({ from: account, gas: 800000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}


export const harvest = async (masterChefContract, pid, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking('0')
      .send({ from: account, gas: 400000, gasPrice:'5000000000' })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: 400000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account, gas: 400000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const masterchefHarvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: 400000, gasPrice:'5000000000' })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}


export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 400000, gasPrice:'5000000000', value: BIG_ZERO })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
