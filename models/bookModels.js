const mongoose = require('mongoose')
//Define the schema
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true, //add require to make it a mandatory parameter
        unique: true  //add unique constrain to prevent duplicates
    },
    author:{
        type: String, 
        require: true 
    }
})

const BookModel = mongoose.model('Book',bookSchema);
module.exports = BookModel;