import { PaypalAPI } from './Paypal.js'

export default class BadStore {
  constructor (user) {
    this.user = user
    this.paypalAPI = new PaypalAPI()
  }

  purchaseBike (quantity) {
    this.paypalAPI.processPayment(this.user, 100 * quantity)
  }

  purchaseCar (quantity) {
    this.paypalAPI.processPayment(this.user, 3500 * quantity)
  }
}
