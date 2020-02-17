
//Imports 
const express = require("express");
const app = express();

//Init DB
require("./DB/db_init")();


//Middlewares
app.use(express.json());

//Cors
// Configure headers & cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.options('*/',(req,res)=>res.send());
app.use(require("./routes/rt_book"));
app.use(require("./routes/rt_author"));

//Init srv
app.listen(3000, ( () => {
    console.log( "   ---> Server listening on port 3000" );
}));