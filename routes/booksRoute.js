const { Router } = require("express");
const router = Router();
const { readFile, writeFile } = require("../services/fileReader");
const { v4: uuid4 } = require("uuid");
const bookSchema = require("../utils/validator");
// getting all book
router.get("/books", async (req, res) => {
  try {
    const books = await readFile("books.json");
    res.json(books);
  } catch (error) {
    console.error("Cannot get books", error);
  }
});

// getting a book by title
router.get("/books/search", async (req, res) => {
  const title = req.query.title;
  try {
    const books = await readFile("books.json");
    if (!title) {
      res.json(books);
    }
    const matchBook = books.find((book) => {
      return book.title.toLowerCase() === title.toLowerCase();
    });

    if (!matchBook) {
      res.json({
        message: "Book with title not found",
      });
      return;
    }
    res.status(200).json(matchBook);
  } catch (error) {
    console.error("This book cannot be found", error);
  }
});

// getting a book by id
router.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const books = await readFile("books.json");
    const matchBook = books.find((book) => {
      return book.id === id;
    });

    if (!matchBook) {
      res.json({
        message: "Book not found",
      });
      return;
    }

    res.status(200).json(matchBook);
  } catch (error) {
    console.error("This book cannot be found", error);
  }
});

// Posting a book
router.post("/books", async (req, res) => {
  const books = await readFile("books.json");
  const { title, author, genre, description, year, imageUrl, isAvailable } =
    req.body;
  //  validation of input
  const { error, value } = bookSchema.validate({
    title,
    author,
    genre,
    description,
    year,
    imageUrl,
    isAvailable,
  });

  if(error) {
    res.json({error})
  }
  const newBook = {
    id: uuid4(),
    title,
    author,
    genre,
    description,
    year,
    imageUrl,
    isAvailable: isAvailable ?? true,
  };

  books.push(newBook);
  writeFile("books.json", books);
  res.json(newBook);
});

// deleting a book by id
router.delete("/books/:id", async (req, res) => {
  const books = await readFile("books.json");
  const id = req.params.id;
  const matchId = books.find((book) => {
    return book.id === id;
  });
  if (!matchId) {
    res.json({
      message: "Book not found",
    });
    return;
  }

  const newBooks = books.filter((newBook) => {
    return newBook.id !== id;
  });
  writeFile("books.json", newBooks);
  res.json({
    message: "Book deleted succesfully!",
    matchId,
  });
});

// editing a book
router.put("/books/:id", async (req, res) => {
  const books = await readFile("books.json");
  const id = req.params.id;
  const { title, author, genre, description, year, imageUrl, isAvailable } =
    req.body;
  const bookIndex = books.findIndex((book) => {
    return book.id === id;
  });

  if (bookIndex === -1) {
    res.json({ message: "Book not Found" });
    return;
  }

  books[bookIndex] = {
    id: books[bookIndex].id,
    title: !title ? books[bookIndex].title : title,
    author: !author ? books[bookIndex].author : author,
    genre: !genre ? books[bookIndex].genre : genre,
    description: !description ? books[bookIndex].description : description,
    year: !title ? books[bookIndex].year : year,
    imageUrl: !title ? books[bookIndex].imageUrl : imageUrl,
    isAvailable: isAvailable ?? true,
  };

  writeFile("books.json", books);
  res.json(books[bookIndex]);
});

module.exports = router;
