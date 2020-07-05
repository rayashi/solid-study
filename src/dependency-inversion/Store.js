export default class Store {
  constructor (paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  purchaseBike (quantity) {
    this.paymentProcessor.pay(100 * quantity)
  }

  purchaseCar (quantity) {
    this.paymentProcessor.pay(35000 * quantity)
  }
}
