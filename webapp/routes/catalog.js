var express = require('express');
var router = express.Router();

// Import controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController')
var bookinstance_controller = require('../controllers/bookinstanceController')

// Book Routes *****

// Get the home page
router.get('/', book_controller.index);

// Create a book
router.get('/book/create',book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);

// Delete book
router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delete', book_controller.book_delete_post);

// Update book
router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);

// Individual item
router.get('/book/:id', book_controller.book_detail);
router.get('/books', book_controller.book_list);

// AUTHOR ROUTES *****

// Create an author
router.get('/author/create',author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);

// Delete author
router.get('/author/:id/delete', author_controller.author_delete_get);
router.post('/author/:id/delete', author_controller.author_delete_post);

// Update author
router.get('/author/:id/update', author_controller.author_update_get);
router.post('/author/:id/update', author_controller.author_update_post);

// Individual author
router.get('/author/:id', author_controller.author_detail);
router.get('/authors', author_controller.author_list);


// GENRE ROUTES *****

// Create an genre
router.get('/genre/create',genre_controller.genre_create_get);
router.post('/genre/create', genre_controller.genre_create_post);

// Delete genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get);
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// Update genre
router.get('/genre/:id/update', genre_controller.genre_update_get);
router.post('/genre/:id/update', genre_controller.genre_update_post);

// Individual genre
router.get('/genre/:id', genre_controller.genre_detail);
router.get('/genres', genre_controller.genre_list);


// BOOKINSTANCE ROUTES *****

// Create an bookinstance
router.get('/bookinstance/create',bookinstance_controller.bookinstance_create_get);
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);

// Delete bookinstance
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);

// Update bookinstance
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);

// Individual bookinstance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);
router.get('/bookinstances', bookinstance_controller.bookinstance_list);

module.exports = router;









