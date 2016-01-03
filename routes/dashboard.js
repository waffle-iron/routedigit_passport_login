var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

module.exports = router;
