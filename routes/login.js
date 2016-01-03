var express = require('express');
var router = express.Router();
var passport = require('../passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: "Incorrect username or password",
  successFlash: "Welcome!"
}));

module.exports = router;
