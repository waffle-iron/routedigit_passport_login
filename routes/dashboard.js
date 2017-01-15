var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getSingleUser(req.user).then((data)=>{
    var str = data[0].fullName;

    function capitalize(str){

      var strArr = str.split(" ");
      var newArr = [];

      for(var i = 0 ; i < strArr.length ; i++ ){

        var FirstLetter = strArr[i].charAt(0).toUpperCase();
        var restOfWord = strArr[i].slice(1);

        newArr[i] = FirstLetter + restOfWord;

      }

      return newArr.join(' ');

    }

    res.render('dashboard', { title: capitalize(str) });
  })
});

module.exports = router;
