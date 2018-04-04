var Genre = require('../models/genre')

// display list of genre
exports.genre_list = function(req, res){
    res.send('NOT IMPLEMENTED: genre list.')
};

// display specific genre by id
exports.genre_detail = function(req, res){
    res.send('NOT IMPLEMENTED: genre detail.'+ req.parameter)
};

// display genre creat from (GET)
exports.genre_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: genre create GET.')
};

// display genre create from (POST)
exports.genre_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: genre create POST.')
};

// display list of genre
exports.genre_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: genre delete GET.')
};

// delete genre from (POST)
exports.genre_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: genre delete POST.')
};

// update genre from (GET)
exports.genre_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: genre update GET.')
};

// update genre from (POST)
exports.genre_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: genre update POST.')
};