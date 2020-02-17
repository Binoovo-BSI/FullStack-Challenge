const router = require ("express").Router();
const { allAuthors, authorId, addAuthor } = require("../DB/db_author");


//get
router.get("/author/all", allAuthors);
router.get("/author/:id", authorId);


//post
router.post("/author/add", addAuthor);



module.exports = router;