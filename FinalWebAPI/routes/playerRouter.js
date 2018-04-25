var express = require('express');
var router = express.Router();

// Import Controller
var player_controller = require('../controllers/csgoplayersController');

// GET list of players
router.get('/', player_controller.player_list);
//GET individual player
router.get('/:id', player_controller.player_detail);

module.exports = router;








