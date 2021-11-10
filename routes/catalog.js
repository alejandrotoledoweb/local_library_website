var express = require('express');
var router = express.Router();

//Require controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookInstanceController');

// BOOK ROUTES

//GET catalog home page
router.get('/', book_controller.index);

//GET request for creating a book. NOTE this must come before routes that display Book(uses id)
router.get('/book/create', book_controller.book_create_get);

//POST request for creating a Book
router.post('/book/create', book_controller.book_create_post);

//GET request to delete book
router.get('/book/:id/delete', book_controller.book_delete_get);

//POST request to delete Book
router.post('/book/:id/delete', book_controller.book_delete_post);

//GET request to update Book
router.get('/book/:id/update', book_controller.book_update_get);

//POST request to update Book
router.post('/book/:id/update', book_controller.book_update_post);

//GET request for one Book
router.get('/book/:id', book_controller.book_detail);

//GET request for a list of all Book items
router.get('/books', book_controller.book_list);



