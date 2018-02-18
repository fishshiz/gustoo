const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Failed to login!',
    successRedirect: '/',
    successFlash: 'You\'ve now logged in.'
});