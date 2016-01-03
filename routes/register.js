var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', function(req, res, next){
  queries.addNewUser(req.body.regname, req.body.regemail, req.body.regpassword)
  .then(()=>{
    res.redirect('/')
  })
})

module.exports = router;
