function shelfBook(book, sciFiShelf) {
  if (book.genre.includes("sciFi") === true) {    // determine if genre is the same
      if (sciFiShelf.length < 3) {      //determine if the length is less than number of books it can hold
      return sciFiShelf.unshift(book)  // move book on to shelf, but by adding book into first index
    }
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {    // loop through array of shelves
  if (shelf[i].title === title) {     // determine if titles match
    shelf.splice(i,1)       // remove book
    }
  }
}

function listTitles(shelf) {
  var shelfList = []    // create empty array
  for (var i = 0; i < shelf.length; i++) { // loop through array of shelves
    shelfList.push(shelf[i].title) // push book into the array
  }
  return shelfList.join(", ") // puts strings together, seperated by comma
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++){   // loop through shelves
    if (shelf[i].title === title) {     // determine if titles match
      return true
    }
  } return false
}



module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
