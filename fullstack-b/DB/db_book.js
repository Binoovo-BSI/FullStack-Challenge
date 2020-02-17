const { BookModel } = require("../models/library");

const allBooks = async (req, res) => {

	BookModel.find(
		{}
	).then( (books) => {
		res.send(books);
	}).catch( (err) => {
		console.log( err );
	});
	
};

const getById = async (req, res) => {

    let id = req.params.id;

    BookModel.findById(
		id
	).then( (authors) => {
		res.send(authors);
	}).catch( (err) => {
		console.log( err );
    });
    
};

const addBook = async (req, res) => {

	try {
		
        let bodyData = req.body;
        
        const book = await new BookModel({

			name: bodyData.name,
			isbn: bodyData.isbn,
			author_Id: bodyData.author_Id,
			author_Name: bodyData.author_Name,
			author_Surname: bodyData.author_Surname

		}).save();
		
		
		res.send({
			message: "Book registered succesfully.",
			username: book.name
		});
		
		
	} catch (err) {
		
		if (err.code === 11000) { // E11000 duplicate key error collection
			
			// res.status(409); // conflict
			// res.send({
			// 	errorCode: "user_register_1",
			// 	error: "User or email are already used."
			// });
			
		} else {
			
			res.send(err);
			
		}
	};
    
	
};

module.exports = {
	allBooks,
	getById,
	addBook
};