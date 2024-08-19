const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBook(author, title, pages, read) {
  myLibrary.unshift(new Book(author, title, pages, read));
}

addBook("Dune", "Frank Hubert", 600, true);
addBook("Dune2", "Frank Hubert2", 6002, true);
addBook("Dune3", "Frank Hubert3", 6003, true);
console.log(myLibrary);
