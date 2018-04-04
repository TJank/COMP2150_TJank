var Book = require('../models/book')

// Home page of our app
exports.index = function(req,res) {
    res.send('NOT IMPLEMENTED: Site Home Page.')
};

// display list of book
exports.book_list = function(req, res){
    res.send('NOT IMPLEMENTED: Book list.')
};

// display specific book by id
exports.book_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Book detail.'+ req.parameter)
};

// display book creat from (GET)
exports.book_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book create GET.')
};

// display book create from (POST)
exports.book_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book create POST.')
};

// display list of book
exports.book_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book delete GET.')
};

// delete book from (POST)
exports.book_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book delete POST.')
};

// update book from (GET)
exports.book_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book update GET.')
};

// update book from (POST)
exports.book_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book update POST.')
};
