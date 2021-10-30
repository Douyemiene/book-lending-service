//This class is used to save books in the BookService
class Book {
  //isbn is a unique book identifier
  constructor(isbn, title, author, year) {
    (this.isbn = isbn), (this.title = title);
    this.author = author;
    this.year = year;
  }
}
