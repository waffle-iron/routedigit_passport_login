var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
const got = require('got');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var regname = req.body.regname;
  var regemail = req.body.regemail;
  var regpassword = req.body.regpassword;
  var regender = req.body.regender;
  got('https://randomuser.me/api/?gender='+regender)
    .then(response => {
        var data = response.body;
        data = JSON.parse(data);
        var regimage = data.results[0].picture.large;
        if(regname.length>0 && regemail.length>0 && regpassword.length>0 && regender.length>0 && regimage.length>0){
          queries.addNewUser(regname, regemail, regpassword, regender, regimage)
          .then(()=>{
            res.redirect('/')
          })
        } else {
          res.send('A required registration field is missing.');
        }
    })
    .catch(error => {
        console.log(error.response.body);
    });








})

module.exports = router;
