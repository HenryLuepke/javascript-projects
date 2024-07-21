// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;        
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
     }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded);
    }

    tooUsed() {
        if (this.timesCheckedOut > 100) {
            this.discarded = true
        }
    }
}

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded);
    }

    tooOld() {
        if (2024 - this.copyrightDate > 5) {
            this.discarded = true
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let prideAndPredudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, false);

let shuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false);

// Code exercises 4 & 5 here:
shuttleBuildingManual.tooOld()
prideAndPredudice.checkout(5)


