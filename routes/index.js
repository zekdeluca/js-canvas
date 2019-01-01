var express = require('express');
var router = express.Router();

const content = require('../src/content');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', content);
});

module.exports = router;
