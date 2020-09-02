let Game = require('../models/game');


module.exports = {
    index,
    new: newGame,
    create,
    show,

};

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', {
            title: 'All Games',
            games
        });
    });
}

function newGame(req, res) {
    res.render('games/new');
}

function create(req, res) {
    const game = new Game(req.body);
    game.save(function(err) {
        if (err) return res.render('games/new');
        res.redirect('/games');
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
        res.render('games/show', { title: 'Game Detail', game });
    });
}