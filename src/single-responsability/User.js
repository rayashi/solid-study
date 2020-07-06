export default class BadUser {
  constructor (name, ErrorHandler) {
    this.name = name
    this.errorHandler = new ErrorHandler()
  }

  createPost (postText) {
    try {
      console.log('Accessing data base...')
      console.log(`${this.name} post "${postText}"`)
    } catch (error) {
      this.errorHandler.log(error.message)
    }
  };
}
