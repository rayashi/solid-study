import BadUser from './BadUser.js'
import User from './User.js'
import ErrorHandler from './ErrorHandler.js'

console.log('\nRunning Single Resposability Example ---------------')

const badUser = new BadUser('Bad Beto')
badUser.createPost('\nHello i\'m bad implementation of a user')

const user = new User('Beto', ErrorHandler)
user.createPost('\nHello i\'m good implementation of a user')
