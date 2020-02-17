const BookModel = require("../models/library");

const allBooks = async (req, res) => {

	BookModel.find(
		{}
	).then( (books) => {
		res.send(books);
	}).catch( (err) => {
		console.log( err );
	});
	
};


module.exports = {
	allBooks,
};