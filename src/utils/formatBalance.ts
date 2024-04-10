import {BigNumber} from '@ethersproject/bignumber'
import { formatUnits } from '@ethersproject/units'
import { BIG_TEN } from './bigNumber'

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount : any, decimals = 18) => {
  return BigNumber.from(amount).mul(BIG_TEN.pow(decimals))
}

export const getBalanceAmount = (amount : any, decimals = 18) => {
  return  parseFloat(formatUnits(amount,decimals));
}

/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance : any, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toFixed(2)
}

export const getGasFeeNumber = (balance : any, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toFixed(9)
}

export const getFullDisplayBalance = (balance : any, decimals = 18, decimalsToAppear : any) => {
  return balance.div(BIG_TEN.pow(decimals)).toFixed(decimalsToAppear)
}

export const formatNumber = (number : any, minPrecision = 2, maxPrecision = 2) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}