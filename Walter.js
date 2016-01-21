'use strict'

const WALTER_PRICE = 0.53
const TARE_PRICE = 0.08

export default class Walter {

  // input: initialMoney
  // output: [totalWalters, moneyLeft]

  round (f) {
    return Math.round(f * Math.pow(10, 2)) / Math.pow(10, 2)
  }

  theCalculator (initialMoney) {
    if (initialMoney <= 0) {
      return false
    }

    let someWalters = 0

    let bottles = this.numberOfBottles(initialMoney)
    let price = this.thePrice(bottles)
    let theMoneyIStillhave = initialMoney - price
    let theTotal = theMoneyIStillhave + bottles * TARE_PRICE
    let theIteration = this.numberOfBottles(theTotal)

    if (theIteration) {
      [someWalters, theTotal] = this.theCalculator(theTotal)
    }

    return [someWalters + bottles, this.round(theTotal)]

  }

  thePrice (theBottles) {
    return theBottles * WALTER_PRICE
  }

  numberOfBottles (theAmount) {
    return Math.floor(theAmount / WALTER_PRICE)
  }

}
