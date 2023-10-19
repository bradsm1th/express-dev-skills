var express = require('express');
const skill = require('../models/skill');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skillz' });
});

module.exports = router;
