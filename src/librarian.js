var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

// class for building a Librarian
class Librarian {
  constructor(name, townLib) { //constructor uses parameters to determine the name of Librarian and where they work
    this.name = name
    this.library = townLib
  }
  // function, parameters: string and time of day
  greetPatron(patron, morning) {
    if (morning === true) { //depends if morning or not
      return `Good morning, ${patron}!`
    } else {
    return `Hello, ${patron}!`
    }
  }
  // Gross long way didn't want to do

  // findBook(title) {
  //   for (var i = 0; i < this.library.shelves.fantasy.length; i++){
  //     if (this.library.shelves.fantasy[i].title === title )
  //     return `Yes, we have ${title}`
  //   }
  //
  //
  //   return `Sorry, we do not have ${title}`
  // }
  //function, parameter: string that is title of book
  findBook(title) {
    var shelfTypes = Object.keys(this.library.shelves) // array of shelves
    for (var i = 0; i < shelfTypes.length; i++) { // looping through that array
      var bookGenre = this.library.shelves[shelfTypes[i]] // array of books in genre
      for (var j = 0; j < bookGenre.length; j++) { //looping through again
        if (bookGenre[j].title === title) { // determine if titles match
          this.library.shelves[shelfTypes[i]].splice(i, 1) //this line confuses me still, tried several things, only this worked
          return `Yes, we have ${title}`
        }
      }
    } return `Sorry, we do not have ${title}`
  }
  // function, parameters: number of days late
  calculateLateFee(days) {
    return Math.ceil(days * .25) // had to google how to round up always, use Math.ceil method
  }
}
module.exports = Librarian;
