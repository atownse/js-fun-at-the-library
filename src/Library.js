//function, parameters: Name of town library
function createLibrary(townLib) {
  return {          // creates object containing the name of library and book types
      name: townLib,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
    },
  }
}

// function, parameters: libaray name, book object (struggled to make this pretty, gave up)
function addBook(townLib, bookTitle) {
  if (bookTitle.genre === "fantasy") {  // if statements looking for matching genre
    return townLib.shelves.fantasy.unshift(bookTitle)  // adds book to specific shelf
  }
  else if (bookTitle.genre === "nonFiction") {
    return townLib.shelves.nonFiction.unshift(bookTitle)
  }
  else if (bookTitle.genre === "fiction") {
    return townLib.shelves.fiction.unshift(bookTitle)
  }
}
// function, parameters: library name, title of book as string
function checkoutBook(townLib, title) {
  var shelfTypes = Object.keys(townLib.shelves) // array of shelves
    for (var i = 0; i < shelfTypes.length; i++) { // loop through that array
      var bookGenre = townLib.shelves[shelfTypes[i]] // array containing books in genres
      for (var j = 0; j < bookGenre.length; j++) { // loop through the books
        if (bookGenre[j].title === title) { // determine if titles match
        bookGenre.pop() // remove book
        return `You have now checked out ${title} from the ${townLib.name}`
      }
    }
  } return `Sorry, there are currently no copies of ${title} available at the ${townLib.name}`
}




module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
