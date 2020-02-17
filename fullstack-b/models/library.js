
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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
	author_Id : {
		type: ObjectId
	},
	author_Name: {
		type: String
	},
	author_Surname: {
		type: String
	}
	
});


const AuthorModel = mongoose.model("author", AuthorSchema);
const BookModel = mongoose.model("book", BookSchema);

module.exports = { AuthorModel, BookModel };