import BadStore from './BadStore.js'
import Store from './Store.js'
import StripeProcessor from './Stripe.js'
import PaypalProcessor from './Paypal.js'

const badStore = new BadStore('Bad Beto')
const stripeStore = new Store(new StripeProcessor('Beto'))
const paypalStore = new Store(new PaypalProcessor('Mike'))

console.log('\n Dependency Inversion Principle')
console.log('\n Bad implementation')
badStore.purchaseBike(2)
badStore.purchaseCar(1)

console.log('\n Good implementation')
stripeStore.purchaseBike(2)
stripeStore.purchaseCar(1)

paypalStore.purchaseBike(3)
paypalStore.purchaseCar(2)
