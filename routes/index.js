var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
const got = require('got');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
