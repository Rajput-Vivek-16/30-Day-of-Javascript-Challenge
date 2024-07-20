//------------------------------------------------Object Creation and Access--------------------------------------------------

// Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Coder Life",
    author: "Vivek Rajput",
    year: 2024
}
console.log("Book object:");
console.log(book);

// Access and log the title and author properties of the book object.
console.log("Title and Author:");
console.log(book["title"], book.author);



//--------------------------------------------------Object Methods------------------------------------------------------------

// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book["bookDetails"] = () => {
    return `Title: ${book.title}, Author: ${book.author}`;
}
console.log("Book details:");
console.log(book.bookDetails());

// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = (updateYear) => {
    book["year"] = updateYear;
}
book.updateYear(2025);
console.log("Updated book object:");
console.log(book);



//---------------------------------------------------Nested Objects-----------------------------------------------------------

// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "Ultra Pro Coder from India",
    books: [
        {
            title: "1992 The Biggest Scam",
            author: "Harshad Mehta",
            year: 1992
        },
        {
            title: "Discipline in Life",
            author: "Chanakya Niti",
            year: 16
        }
    ]
};
console.log("Library object:");
console.log(library);

// Access and log the name of the library and the titles of all the books in the library.
console.log("Library name and book titles:");
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});



//---------------------------------------------------This Keyword-------------------------------------------------------------

// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book["bookInfo"] = function() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
}
console.log("Book info using this keyword:");
console.log(book.bookInfo());



//-------------------------------------------------Object Iteration-----------------------------------------------------------

// Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Iterating over book properties:");
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Book object keys and values:");
console.log(Object.keys(book));
console.log(Object.values(book));
