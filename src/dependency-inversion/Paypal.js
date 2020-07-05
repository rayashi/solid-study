export class PaypalAPI {
  processPayment (user, amountInDollars) {
    console.log(`${user} has paid $${amountInDollars} with Paypal`)
  }
}

export default class PaypalProcessor {
  constructor (user) {
    this.user = user
    this.paypalAPI = new PaypalAPI()
  }

  pay (amountInDollars) {
    this.paypalAPI.processPayment(this.user, amountInDollars)
  }
}
