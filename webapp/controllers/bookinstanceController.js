var BookInstance = require('../models/bookinstance')

// display list of book
exports.bookinstance_list = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance list.')
};

// display specific bookinstance by id
exports.bookinstance_detail = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance detail.'+ req.parameter)
};

// display bookinstance creat from (GET)
exports.bookinstance_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance create GET.')
};

// display bookinstance create from (POST)
exports.bookinstance_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance create POST.')
};

// display list of bookinstance
exports.bookinstance_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance delete GET.')
};

// delete bookinstance from (POST)
exports.bookinstance_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance delete POST.')
};

// update bookinstance from (GET)
exports.bookinstance_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance update GET.')
};

// update bookinstance from (POST)
exports.bookinstance_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: bookinstance update POST.')
};