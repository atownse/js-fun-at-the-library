function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns){
    return {
      name: name,
      age: age,
      pronouns: pronouns
    }
}

function saveReview(review, reviews) {


  if (reviews.includes(review) === true) {
    return review
  }

  return reviews.push(review)
}

function calculatePageCount(bookTitle) {
  return (bookTitle.length)*20
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75

}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
