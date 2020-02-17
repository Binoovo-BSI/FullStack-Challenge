
const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
	
	firstName: {
		type: Array
	},
	lastName: {
		type: Array
	}
	
});

const BookSchema = mongoose.Schema({
	
	name: {
		type: Array
	},
	isbn: {
		type: Array
	},
	author: [AuthorSchema]
	
});


const AuthorModel = mongoose.model("author", AuthorSchema);
const BookModel = mongoose.model("book", BookSchema);

module.exports = { AuthorModel, BookModel };