import IAuthor = require("../interfaces/IAuthor");

interface IBook {

    name:string;
    isbn:string;
    author:IAuthor;
}

export = IBook;