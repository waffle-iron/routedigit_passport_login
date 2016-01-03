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
  }
}
