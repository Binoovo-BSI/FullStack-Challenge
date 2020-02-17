
const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
	
	firstName: {
		type: String
	},
	lastName: {
		type: String
	}
	
});

const BookSchema = mongoose.Schema({
	
	name: {
		type: String
	},
	isbn: {
		type: String
	},
	author: [AuthorSchema]
	
});


const AuthorModel = mongoose.model("author", AuthorSchema);
const BookModel = mongoose.model("book", BookSchema);

module.exports = { AuthorModel, BookModel };