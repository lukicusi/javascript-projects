// Define your Book class here:
class Book {
    constructor(title, author, date, isbn, pages, checkoutCount, discarded) {
        //assign properties LUCAS
        this.title = title;
        this.author = author;
        this.date = date;
        this.isbs = isbn;
        this.pages = pages;
        this.checkoutCount = checkoutCount;
        this.discarded = discarded;
    }
    //define methods here LUCAS
    checkout(timesRead=1) {
        this.checkoutCount += timesRead;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, date, isbn, pages, checkoutCount, discarded) {
        super(title, author, date, isbn, pages, checkoutCount, discarded);
        //properties LUCAS
    }
    dispose (currentYear){
        //finish if statement
        if (currentYear - this.date > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, date, isbn, pages, checkoutCount, discarded) {
        super(title, author, date, isbn, pages, checkoutCount, discarded);
    }
    dispose (){
        if (this.checkoutCount > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let shuttleManual = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");
console.log(prideAndPrejudice);
console.log(shuttleManual);

// Code exercises 4 & 5 here:
shuttleManual.dispose(Number(2024));
console.log(shuttleManual);


console.log(prideAndPrejudice);
prideAndPrejudice.checkout(5);
prideAndPrejudice.dispose();
console.log(prideAndPrejudice);


