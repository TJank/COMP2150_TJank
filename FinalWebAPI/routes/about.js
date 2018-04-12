var express = require('express');
var router = express.Router();

// GET information about this project
router.get('/', function(req, res, next) {
    res.send('My API is an API for the game "Counter Strike: Global Offensive", and will contain information about the pro teams and the pro players.')
});


module.exports = router;
