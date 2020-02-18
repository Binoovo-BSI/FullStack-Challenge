
//Imports
const mongoose = require("mongoose");


const initDb = () => {
    //mongoDB database connection
    const uri = "mongodb+srv://adminDaveDev:12345678a@dbhive-cu5o7.mongodb.net/fullstack?retryWrites=true&w=majority";

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then( () => {
        console.log ("  ---> Connected to mongoDB" );
    }).catch( (err) => {
        console.log( err );
    });

};

//Exports
module.exports = initDb;