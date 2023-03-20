class Book {
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = 0;
    }
}
class Shelf {
    constructor() {
        this.books = [];
        this.tchotchkes = [];
    }
    addBook(book) {
        this.books.push(book)
    }
    addTchotchke(tchotchke){
        this.tchotchkes.push(tchotchke);
    }
}

const lordOfTheRings = new Book("Lord of the Rings: Return of the King", "JRR Tolkien", "Fantasy");
lordOfTheRings.pages = 350;
// console.log(lordOfTheRings);

const topShelf = new Shelf();
topShelf.addBook(lordOfTheRings);
console.log(topShelf);