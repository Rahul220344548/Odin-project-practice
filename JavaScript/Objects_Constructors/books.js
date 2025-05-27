
function Book(title, author, numberOfPages, hasReadBook) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasReadBook = hasReadBook;
    this.info = function () {

        if (this.hasReadBook == false) {
            return (`${this.title} by ${this.author}, ${this.numberOfPages} pages, not read yet`)
        }

        message = (`${this.title} by ${this.author}, ${this.numberOfPages} pages, already read book`);
        return message
        
    }
}

const book1 = new Book("The Hobbit", "JK Rowling", "295", true)

console.log(book1.info());