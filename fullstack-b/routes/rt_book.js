const router = require ("express").Router();
const { allBooks, getById, addBook, getByTitle } = require("../DB/db_book");


//get
router.get("/book/all", allBooks);
router.get("/book/:id", getById);
router.get("/book/title/:title", getByTitle);

//post
router.post("/book/add", addBook);

module.exports = router;