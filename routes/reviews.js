const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
//POST a review
router.post('/games/:id/reviews', reviewsCtrl.create);
//router.delete('/reviews/:id', reviewsCtrl.delete);
//router.get('/reviews/:id/reviews/new', reviewsCtrl.new);

module.exports = router;