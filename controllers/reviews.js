const Game = require('../models/game');


module.exports = {
    create,
    delete: deleteReview,


};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        game.reviews.push(req.body);
        game.save(function(err) {
            console.log(err);
            res.redirect(`/games/${game._id}`);
        });
    });
}

function deleteReview(req, res) {
    Game.findOne({ 'reviews._id': req.params.id }, function(err, game) {
        const reviewSubdoc = game.reviewContent.id(req.params.id);
        reviewSubdoc.remove();
        game.save(function(err) {
            console.log(err)
            res.redirect(`/games/${game._id}`);
        })
    })
}