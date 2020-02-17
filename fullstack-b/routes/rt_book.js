const router = require ("express").Router();
const { allBooks, getById, addBook } = require("../DB/db_book");


//get
router.get("/book/all", allBooks);
router.get("/book/:id", getById);

//post
router.post("/book/add", addBook);

module.exports = router;