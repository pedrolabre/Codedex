const goodreadsInfo = {
  currentlyReading: [
    { title: "The Name of the Wind", author: "Patrick Rothfuss" }
  ],
  wantToRead: [
    { title: "The Lies of Locke Lamora", author: "Scott Lynch" }
  ]
};

const addNewBooks = (books, ...additionalBookObjects) => {
  return [...books, ...additionalBookObjects];
};

goodreadsInfo.currentlyReading = addNewBooks(
  goodreadsInfo.currentlyReading,
  { title: "Mistborn: The Final Empire", author: "Brandon Sanderson" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" }
);

const showGoodreadsInfo = (info) => {
  let currentlyReading = info.currentlyReading;
  let wantToRead = info.wantToRead;

  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
  }

  console.log(""); 

  console.log("Want to Read:");
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);