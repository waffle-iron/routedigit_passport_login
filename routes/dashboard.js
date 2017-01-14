var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getSingleUser(req.user).then((data)=>{
    res.render('dashboard', { title: data[0].fullName });
  })
});

module.exports = router;
