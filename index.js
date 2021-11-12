const { Book, BookServiceUser } = require("./helperClasses");
const BookServiceSingleton = require("./bookServiceSingleton");

/*create a new BookService User and then register it,
because only registered users can use the service*/
const douyeszn = new BookServiceUser("douyeszn");
BookServiceSingleton.registerUser(douyeszn);
//another user
const deen = new BookServiceUser("deen");
BookServiceSingleton.registerUser(deen);
//another user
const jon = new BookServiceUser("jon");
BookServiceSingleton.registerUser(jon);
console.log("---------------------------");

console.log("All users", Object.keys(BookServiceSingleton.users));
console.log("---------------------------");
//add new books
console.log(
  "Using the observer pattern, all registered users gets notified by BookService when a new book is added\n"
);
//add "The great gatsby"
const addGatsby = BookServiceSingleton.addBook(
  new Book("0001", "The great Gatsby", "J. Rowling", "2003")
);

//add "Song of Ice and Fire"
const addSongOfIce = BookServiceSingleton.addBook(
  new Book("0002", "A song of ice and fire", "George R. R. Martin", "2004")
);

//add "Tale of Two Cities"
const taleOfTwoCities = BookServiceSingleton.addBook(
  new Book("0003", "A Tale of Two Cities", " Charles Dickens", "1995")
);

//Added so output can be easily seen
console.log("---------------------------");
console.log("Available books", BookServiceSingleton.books);
console.log("---------------------------");
const isRemoved = BookServiceSingleton.removeBook("0001");
console.log("remove gatsby: ", isRemoved);
//Added so output can be easily seen
console.log("---------------------------");
console.log("Available books", BookServiceSingleton.books);
console.log("---------------------------");
console.log(
  "is Gatsby Available:",
  BookServiceSingleton.isBookAvailable("0001")
);

console.log("unregister jon: ", BookServiceSingleton.unregisterUser(jon));
console.log("---------------------------");
console.log("All users", Object.keys(BookServiceSingleton.users));
console.log("---------------------------");
console.log("Before lending\n");
console.log("Douyeszn lend:", BookServiceSingleton.hasUserLend("douyeszn"));
console.log("Deen lend:", BookServiceSingleton.hasUserLend("deen"));

console.log(
  "Users and Books Collected (initially empty):",
  BookServiceSingleton.usersAndBooksCollected
);
console.log("---------------------------");
console.log("Users lend books\n");
console.log(
  "douyeszn lends A tale of two cities",
  BookServiceSingleton.lendBook("douyeszn", "0003")
);
console.log(
  "douyeszn lends Song of Ice and Fire",
  BookServiceSingleton.lendBook("douyeszn", "0002")
);
console.log("deen lends Song of Ice and Fire", deen.lendBook("0002"));
console.log("Douyeszn lend:", BookServiceSingleton.hasUserLend("douyeszn"));
console.log(
  "Users and Books Collected (After users lend)\n",
  BookServiceSingleton.usersAndBooksCollected
);
