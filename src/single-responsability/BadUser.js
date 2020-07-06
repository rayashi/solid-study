export default class BadUser {
  constructor (name) {
    this.name = name
  }

  createPost (postText) {
    try {
      console.log('Accessing data base...')
      console.log(`${this.name} post "${postText}"`)
    } catch (error) {
      console.error(`Error trying to save post ${error.message}`)
    }
  };
}
