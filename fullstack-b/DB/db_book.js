const { BookModel } = require("../models/library");

const allBooks = async (req, res) => {

	// ----------------
	// Genero el array del AGGREGATE
	// ----------------
	
	let arrAggregate = [];
	
	arrAggregate = [
		
		...arrAggregate,
		
		
		{ $lookup:
			{
				from: "authors",
				localField: "author_Id",
				foreignField: "_id",
				as: "__authorfirstName"
			}
		},
		{ $unwind: "$__authorfirstName"},
		{ $addFields: {
				_authorfirstName: "$__authorfirstName.firstName"
			}
		},
		
		{ $lookup:
			{
				from: "authors",
				localField: "author_Id",
				foreignField: "_id",
				as: "__authorlastName"
			}
		},
		{ $unwind: "$__authorlastName"},
		{ $addFields: {
				_authorlastName: "$__authorlastName.lastName"
			}
		},
		
		{ $project:
			{
				__authorfirstName: 0,
				__authorlastName: 0
			}
		}
		
	];
	
	
	// ----------------
	// Finalizo
	// ----------------
	
	BookModel.aggregate(arrAggregate).then( (books) => {
		
		if (books) {
			res.send(books);
		} else {
			res.send({message: `Books not found.`});
		}
		
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

const getByTitle = async (req, res) => {

	let title = req.params.title;
	

    BookModel.find({ $and: [{"name" : {$regex : `.*${title}.*`, $options: 'i'}}]}).limit(20).then( (books) => {
		res.send(books);
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
	addBook,
	getByTitle
};