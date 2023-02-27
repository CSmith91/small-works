let library = [];


function libraryLoad() {
    // we check to see if the user has been here previously, if not, we now mark that they have and set 'save' the library as a JSON for future reference
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("books", JSON.stringify(library));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } 
    // otherwise, the user has been here before, and we recall the JSON library data using parse (converting the string back to our code)
    else {
        library = JSON.parse(sessionStorage.getItem("books"));

        // we run through each 'book' of our library and build a table, appending it to our 'bookTable' id, with a row for each book instance 
        library.forEach(function(book) {

            let table = document.querySelector("#bookTable");
            let newRow = document.createElement('tr');
        
            // then, for each property within each book, we populate the appropirate column and append these
            for(const property in book){
                let newCol = document.createElement('td');

                newCol.innerHTML = book[property];
                
                newRow.appendChild(newCol);
                table.appendChild(newRow);

                // add the delete symbol (span element) to the end of the 'review' element
                if(property == "review"){
                    let itemSpanElement = document.createElement('span')
                    itemSpanElement.className = "close";
                    itemSpanElement.innerHTML = '\u00D7';
                    newRow.appendChild(itemSpanElement);

                    // we can add an eventListener here, allowing the user to click the 'x', this hides (removes) the HTML, and then calls the deleteBook function
                    // to deal with the deletion of the book object from the library array
                    itemSpanElement.addEventListener('click', () => {
                        itemSpanElement.parentElement.style.display = "none";
                        deleteBook(book);
                    });
                }

                // with every column (property) of our book added, we add a separate eventListener
                // on click, the user is asked if they want to amend
                newCol.addEventListener('click', () => {
                    console.log(newCol.innerHTML + " has been clicked!");
                    newItem = prompt("What do you want to change \""+newCol.innerHTML+"\" to?");

                    // a tiny bit of defensive coding here in the event the user presses 'cancel'
                    if(newItem == null){
                        console.log("You didn't type anything")
                    }
                    else{
                    console.log(newCol.innerHTML + " has been changed to: " + newItem);
                    newCol.innerHTML = newItem;
                    console.log(`${book[property]} now equals ${newItem}`)
                    book[property] = newItem;
                    // we then save this edit to our sessionStorage!
                    sessionStorage.setItem("books", JSON.stringify(library));
                    }
                })
            }

        });
    }
    console.log("Library now consists of:");
    console.log(library);
}

// this is our constructor
function Book(author, title, genre, review) {
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.review = review;
}

// addBook is called upon when a user presses the 'Create new book object' button
function addBook() {
    // we first call our library from sessionStorage (as we will be adding a new book to this array)
    library = JSON.parse(sessionStorage.getItem("books"));

    // the instance of our new book
    let newBook = new Book(
        document.getElementById("bAuthor").value,
        document.getElementById("bTitle").value,
        document.getElementById("bGenre").value,
        document.getElementById("bReview").value,
    );

    // we run through creating the same instances as we do when building our library, including for editing and deletion
    let table = document.querySelector("#bookTable");
    let newRow = document.createElement('tr');

    for(const property in newBook){
        console.log(`${property} : ${newBook[property]}`)
        let newCol = document.createElement('td');
        newCol.innerHTML = newBook[property];
        newRow.appendChild(newCol);
        table.appendChild(newRow);
        newCol.addEventListener('click', () => {
            console.log(newCol.innerHTML + " has been clicked!");
            newItem = prompt("What do you want to change \""+newCol.innerHTML+"\" to?");
            console.log(newCol.innerHTML + " has been changed to: " + newItem);
            newCol.innerHTML = newItem;
            newBook[property] = newItem;
            sessionStorage.setItem("books", JSON.stringify(library));
        })
    }
    // this adds the new book to our library array, we then make sure to save it!
    library.push(newBook);
    sessionStorage.setItem("books", JSON.stringify(library));

}

function deleteBook(book){
    // the book parameter is checked within the library array and its index used for splicing (removing) from the library
    index = library.indexOf(book);
    library.splice(index, 1);
    console.log("Library now consists of:");
    console.log(library);
    // we then save our updated library!
    sessionStorage.setItem("books", JSON.stringify(library));
}
