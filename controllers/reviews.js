const Game = require('../models/game');

module.exports = {
    create,
    //delete: deleteReview
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        game.reviews.push(req.body);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}



// function deleteReview(req, res) {
//     req.user.reviews.remove(req.params.id);
//     req.user.save(err => {
//         res.redirect('/games');
//     });
// }