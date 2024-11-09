const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController.js');

router.post('/books', bookController.createBook) //define routes for post method 
router.get('/books',bookController.getAllBooks) //define routes for get method 
router.get('/books/:id',bookController.getBookById) //define routes for get by Id method 
router.put('/books/:id', bookController.updateBook) //define routes for update by Id method 
router.delete('/books/:id', bookController.deleteBook) //define routes for delete by Id method 

module.exports = router;