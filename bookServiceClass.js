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

  isBookAvailable(bookIsbn) {
    if (this.books.hasOwnProperty(bookIsbn)) {
      return true;
    }
    return false;
  }

  //confirms that a user exists
  isUserAvailable(username) {
    if (this.users.hasOwnProperty(username)) {
      return true;
    }
    return false;
  }

  //confirms if a user has borrowed a book before
  hasUserLend(username) {
    if (
      this.isUserAvailable(username) &&
      username in this.usersAndBooksCollected
    ) {
      return true;
    }
    return false;
  }

  //returns true if the book was added, and false otherwise
  addBook(book) {
    const {isbn,title} = book
    //add book if it's not already available
    if (!this.isBookAvailable(isbn)) {
      this.books[isbn] = book;
      //notify subscribers
      this.notify(title)
      return true;
    }
    return false;
  }

  //get the name of a book using the isbn
  getBookName(bookIsbn) {
    if (bookIsbn in this.books) {
      return this.books[bookIsbn];
    }
    return null;
  }
  //returns true if the book was removed, and false otherwise
  removeBook(bookIsbn) {
    if (this.isBookAvailable(bookIsbn)) {
      delete this.books[bookIsbn];
      return true;
    }
    return false;
  }
}
