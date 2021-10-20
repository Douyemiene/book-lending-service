class BookService {
  constructor() {
    this.books = {};
    this.borrowers = {};
    this.users = {};
    this.usersAndBooksCollected = {};
  }

  //returns true if the user was registered (Subscribe)
  registerUser(user) {
    const { username } = user;
    if (!this.isUserAvailable(username)) {
      this.users[username] = user;
      return true;
    }
    return false;
  }
}
