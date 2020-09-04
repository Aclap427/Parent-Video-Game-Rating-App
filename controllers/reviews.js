const Game = require('../models/game');


module.exports = {
    create,
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        req.body.parent = req.user._id;
        game.reviews.push(req.body);
        game.save(function(err) {
            console.log(err);
            res.redirect(`/games/${game._id}`);
        });
    });
}