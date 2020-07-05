import Store from './Store.js'
import StripeProcessor from './Stripe.js'
import PaypalProcessor from './Paypal.js'

const stripeStore = new Store(new StripeProcessor('Beto'))
const paypalStore = new Store(new PaypalProcessor('Mike'))

stripeStore.purchaseBike(2)
stripeStore.purchaseCar(1)

paypalStore.purchaseBike(3)
paypalStore.purchaseCar(2)