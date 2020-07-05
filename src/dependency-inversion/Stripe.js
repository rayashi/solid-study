class StripeAPI {
  constructor (user) {
    this.user = user
  }

  precessPayment (amountInCents) {
    console.log(`${this.user} has paid $${amountInCents / 100} with Stripe`)
  }
}

export default class StripeProcessor {
  constructor (user) {
    this.user = user
    this.stripeAPI = new StripeAPI(user)
  }

  pay (amountInDollars) {
    this.stripeAPI.precessPayment(amountInDollars * 100)
  }
}
