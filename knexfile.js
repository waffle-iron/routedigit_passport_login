"use strict"
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/localpassport'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
