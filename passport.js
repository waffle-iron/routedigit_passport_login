"use strict"
var passport = require('passport');
var Local = require('passport-local').Strategy;
var query = require('./db/queries');
var bcrypt = require('bcrypt');
