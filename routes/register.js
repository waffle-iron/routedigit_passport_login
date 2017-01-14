var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var regname = req.body.regname;
  var regemail = req.body.regemail;
  var regpassword = req.body.regpassword;
  if(regname.length>0 && regemail.length>0 && regpassword.length>0){
    queries.addNewUser(regname, regemail, regpassword)
    .then(()=>{
      res.redirect('/')
    })
  } else {
    res.send('A required registration field is missing.');
  }


})

module.exports = router;
