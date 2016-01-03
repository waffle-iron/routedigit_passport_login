"use strict"

var express = require('express');
var router = express.Router();

// /logout
router.get('/', function(req, res, next) {
	req.logout();
	res.redirect('/login');
})

module.exports = router;
