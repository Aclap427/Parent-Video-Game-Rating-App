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
//delete game
router.delete('/:id', gamesCtrl.delete);

//EDIT & UPDATE game
router.get('/:id/edit', gamesCtrl.edit);
router.put('/:id', gamesCtrl.update);



module.exports = router;