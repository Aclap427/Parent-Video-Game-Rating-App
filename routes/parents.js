var router = require('express').Router();
let parentsCtrl = require('../controllers/parents');

router.post('/reviews', isLoggedIn, parentsCtrl.addReview)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;