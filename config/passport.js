const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Parent = require('../models/parent');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        Parent.findOne({ 'googleId': profile.id }, function(err, parent) {
            if (err) return cb(err);
            if (parent) {
                return cb(null, parent);
            } else {

                var newParent = new Parent({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newParent.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newParent);
                });
            }
        });
    }
));

passport.serializeUser(function(parent, done) {
    done(null, parent.id);
});

passport.deserializeUser(function(id, done) {
    Parent.findById(id, function(err, parent) {
        done(err, parent);
    });
});