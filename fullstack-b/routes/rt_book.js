const router = require ("express").Router();
const { allBooks } = require("../DB/db_book");


//get
router.get("/books/all", allBooks);
//router.get("/book/{{id}}/", getById);

//post
//router.post("/book/", addBook);

module.exports = router;