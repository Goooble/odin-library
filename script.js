const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBook(author, title, pages, read) {
  myLibrary.unshift(new Book(title, author, pages, read));
}

addBook("Dune", "Frank Hubert", 600, true);
addBook("Dune2", "Frank Hubert2", 6002, true);
addBook("Dune3", "Frank Hubert3", 6003);
console.log(myLibrary);


const dialog = document.querySelector("dialog");
const addBookBut = document.querySelector(".add");
const main = document.querySelector("main");


//cards
printCards();
function printCards(){
    myLibrary.forEach((book, index)=>{
        var cardHTML = `<div>
            <div class="details">
                <p class="title">${book.title}</p>
                <p class="author">by ${book.author}</p>
                <p class="pages">${book.pages} pages</p>
            </div>
            <div class="buttons">
                <button class="read read-status"> Read</button>
                <button class="remove">Remove</button>
            </div> 
        </div>`;
        main.insertAdjacentHTML("beforeend", cardHTML);
    })
}

//read status toggling
const readBut = Array.from(document.querySelectorAll(".read"));
main.addEventListener("click", (e) => {
    if(e.target.classList.contains("read")){
        toggleReadStat(e.target);
    }
})

function toggleReadStat(button){
    button.classList.toggle("read-status");
}



//dialog
addBookBut.addEventListener("click", () => dialog.showModal());
