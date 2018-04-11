var express = require('express');
var router = express.Router();

// GET information about this project
router.get('/', function(req, res, next) {
    res.send('My project is about... AN API THAT I CREATED MYSELF')
});


module.exports = router;
