"use strict"
var passport = require('passport');
var Local = require('passport-local').Strategy;
var query = require('./db/queries');
var bcrypt = require('bcrypt');

passport.use(new Local(
    function(username, password, done){
      query.getSingleUser(username)
      .then((data)=>{
        return data[0]
      })
      .then((data) => {
        if(bcrypt.compareSync(password, data.password)){
          console.log(data.password);
          done(null, data);
        } else {
          done(null, false)
        }
      })
      .catch(function(err){
        done(null, false);
      })
    }
));

passport.serializeUser(function(data, done){
  done(null, data.username);
});

passport.deserializeUser(function(username, done){
  query.getSingleUser(username)
  .then((data)=>{
    let user;
    if(data.length === 0){
      return query.getSingleUser(username)
      .then((data) => {
        return data[0].username;
      })
    } else {
      return data[0].username;
    }
  })
  .then((data) => {
      done(null, data);
  })
  .catch(function(err){
    return next(err);
  })
});

module.exports = passport;
