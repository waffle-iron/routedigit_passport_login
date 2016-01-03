"use strict"

var knex = require('./knex');
var bcrypt = require('bcrypt');

function UserTBL(){
  return knex('user_tbl');
}

module.exports = {
  getAllUsers: function(){
    return UserTBL();
  },
  getSingleUser: function(username){
    return UserTBL().where('username',username);
  },
  addNewUser: function(fullName, username, password){
    return UserTBL().insert({
      fullName : fullName,
      username: username,
      password: password
    })
  }
}
