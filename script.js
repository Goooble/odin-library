const myLibrary = [];

function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  myLibrary.unshift(new Book(title, author, pages, read));
}

const dialog = document.querySelector("dialog");
const addBookBut = document.querySelector(".add");
const main = document.querySelector("main");
const removeBut = document.querySelector(".remove");
var cardList = null;

printCards();
//card display functions
function printCards() {
  myLibrary.forEach((book, index) => {
    var readingStatus;
    book.read ? (readingStatus = "read-true") : (readingStatus = "read-false");
    var cardHTML = `<div class="card${index} card" >
            <div class="details">
                <p class="title">${book.title}</p>
                <p class="author">by ${book.author}</p>
                <p class="pages">${book.pages} pages</p>
            </div>
            <div class="buttons">
                <button class="read ${readingStatus}"> Read</button>
                <button class="card${index} remove">Remove</button>
            </div> 
        </div>`;
    main.insertAdjacentHTML("beforeend", cardHTML);
  });
  //to update the cards in dom
  cardList = document.querySelectorAll("main>div");
  cardList.forEach((card) => {
    console.log("called");
    card.addEventListener("mouseover", (e)=>{
      e.currentTarget.querySelector(".remove").classList.toggle("remove-hide");
    })
    card.addEventListener("mouseout", (e)=>{
      e.currentTarget.querySelector(".remove").classList.toggle("remove-hide");
    })
  })

}
function updateCards() {
  cardList.forEach((e) => {
    main.removeChild(e);
  });
  printCards();
}
//remove
main.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    var index = getIndex(e.target);
    myLibrary.splice(index, 1);
    updateCards();
  }
});
// main.addEventListener("mouseover", (e) => {
//   console.log(e.composedPath());
// })


//read status toggling
main.addEventListener("click", (e) => {
  if (e.target.classList.contains("read")) {
    toggleReadStat(e.target);
    if (e.target.classList.contains("read-false")) {
      myLibrary[getIndex(e.target.nextElementSibling)].read = false;
    } else {
      myLibrary[getIndex(e.target.nextElementSibling)].read = true;
    }
    
  }
});

function getIndex(removeBut) {
  return removeBut.classList.item(0).slice(4);
}

function toggleReadStat(button) {
  button.classList.toggle("read-false");
}

//dialog
const inTitle = document.querySelector("#title");
const inAuthor = document.querySelector("#author");
const inPages = document.querySelector("#pages");
const inRead = document.querySelector("#read-box");
dialog.returnValue = null;

addBookBut.addEventListener("click", () => dialog.showModal());

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "submit") {
    addBook(inTitle.value, inAuthor.value, inPages.value, inRead.checked);
    updateCards();
  }
  inTitle.value = "";
  inAuthor.value = "";
  inPages.value = "";
  inRead.checked = true;
});
