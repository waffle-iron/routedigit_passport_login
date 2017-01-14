"use strict"

var knex = require('./knex');
var bcrypt = require('bcrypt');

function UserTBL(){
  return knex('user_tbl');
}

function hashPassword(password){
  return bcrypt.hashSync(password, 10);
}

module.exports = {
  getAllUsers: function(){
    return UserTBL();
  },
  getSingleUser: function(username){
    return UserTBL().where('username',username.toLowerCase());
  },
  addNewUser: function(fullName, username, password){
    return UserTBL().insert({
      fullName : fullName.toLowerCase(),
      username: username.toLowerCase(),
      password: hashPassword(password.toLowerCase())
    })
  }
}
