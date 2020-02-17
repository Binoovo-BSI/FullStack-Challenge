
//Imports 
const express = require("express");
const app = express();

//Init DB
require("./DB/db_init")();


//Middlewares
app.use(express.json());

//Routes
app.options('*/',(req,res)=>res.send());
app.use(require("./routes/rt_book"));
app.use(require("./routes/rt_author"));

//Init srv
app.listen(3000, ( () => {
    console.log( "   ---> Server listening on port 3000" );
}));