let Game = require('../models/game');


module.exports = {
    index,
    new: newGame,
    create,
    show,
    edit,
    update

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

function edit(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log(err)
            res.redirect(`/games/${req.params.id}`)
        }
        res.render('games/edit', { title: 'Edit Game', game })
    })
}

function update(req, res) {
    Game.findByIdAndUpdate(req.params.id, req.body, function(err, game) {
        if (err) {
            res.render('games/edit', { title: 'Edit Game', game })
        }
        res.redirect(`/games/${game._id}`);
    })
}