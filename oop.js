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
    findBook(title){
        return this.books.find((book)=> {return book.title == title})
    }
}

const lordOfTheRings = new Book("Lord of the Rings: Return of the King", "JRR Tolkien", "Fantasy");
lordOfTheRings.pages = 350;
const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "Fiction");
const dune = new Book ("Dune", "Frank Herbert", "Sci-Fi")
// console.log(lordOfTheRings);

const topShelf = new Shelf();
topShelf.addBook(lordOfTheRings);
topShelf.addBook(catcherInTheRye);
topShelf.addBook(dune);
console.log(topShelf.findBook("Dune"));
// console.log(topShelf);