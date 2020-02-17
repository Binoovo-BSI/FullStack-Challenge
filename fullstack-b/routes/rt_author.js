const router = require ("express").Router();
const { allAuthors, addAuthor } = require("../DB/db_author");


//get
router.get("/author/all", allAuthors);

//post
router.post("/author/add", addAuthor);




module.exports = router;