var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getAllUsers()
  .then((data)=>{
    console.log(data)
  })
  queries.getSingleUser('john')
  .then((data)=>{
    console.log(data);
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
