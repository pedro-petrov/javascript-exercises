const getTheTitles = function(books) {
    var bookTitle = [];
    for (book of books) {
        bookTitle.push(book.title);
    }
return bookTitle;
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
/* test = getTheTitles(books);
console.log(test); */

// Do not edit below this line
module.exports = getTheTitles;
