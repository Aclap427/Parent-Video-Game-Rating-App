const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games.js');


// GEt request to /games
router.get('/', gamesCtrl.index);
// GET request to /games/new
router.get('/new', gamesCtrl.new);
// POST to /games
router.post('/', gamesCtrl.create);
//POST a review 
router.get('/:id', gamesCtrl.show);

//router.delete('/:id', gamesCtrl.delete);


module.exports = router;