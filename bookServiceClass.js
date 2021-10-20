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

  //returns true if the user was unregistered (unsubscribe)
  unregisterUser(user) {
    const { username } = user;
    if (this.isUserAvailable(username)) {
      delete this.users[username];
      return true;
    }
    return false;
  }

  notify(bookTitle) {
    if (Object.keys(this.users) != []) {
      console.log(`\n${bookTitle}`);
      Object.values(this.users).forEach((user) => {
        user.getNewBookAdded(bookTitle);
      });
    }
  }
}
