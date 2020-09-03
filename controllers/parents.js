let Game = require('../models/game');


module.exports = {
    addReview,


};

function addReview(req, res, next) {
    game.reviews.push(req.body);
    req.user.save(function(err) {
        res.redirect(`/games/${game._id}`);
    });
}