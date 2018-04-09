var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var async = require('async');

// Home page of our app
exports.index = function(req,res) {
    async.parallel({
        book_count: function(callback) {
            Book.count({}, callback);
        },
        book_instance_count: function(callback) {
            BookInstance.count({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.count({status: 'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count({}, callback);
        },
        genre_count: function(callback) {
            Genre.count({}, callback)
        }
    }, function(err, result) {
        res.render('index', {title: 'Local Library Home', error: err, data: result});
    });
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
