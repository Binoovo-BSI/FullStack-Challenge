const { AuthorModel } = require("../models/library");

const allAuthors = async (req, res) => {

	AuthorModel.find(
		{}
	).then( (authors) => {
		res.send(authors);
	}).catch( (err) => {
		console.log( err );
    });
    
};

const authorId = async (req, res) => {

    let id = req.params.id;

    AuthorModel.findById(
		id
	).then( (authors) => {
		res.send(authors);
	}).catch( (err) => {
		console.log( err );
    });
    
};

const addAuthor = async (req, res) => {

    try {
		
        let bodyData = req.body;
        
        const author = await new AuthorModel({
			firstName: bodyData.firstName,
			lastName: bodyData.lastName,
		}).save();
		
		
		res.send({
			message: "Author registered succesfully.",
			username: author.firstName
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
    allAuthors,
    authorId,
    addAuthor
};