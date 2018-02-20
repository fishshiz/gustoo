const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Failed to login!',
    successRedirect: '/',
    successFlash: 'You\'ve now logged in.'
});

exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'You are now logged out!');
    res.redirect('/');
};

exports.checkLogin = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        req.flash('error', 'You must be logged in!');
        res.redirect('/login');
    }

}