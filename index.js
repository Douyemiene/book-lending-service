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
