var express = require('express');
var router = express.Router();

router.get('/wiki', function (req, res) {
  res.json(req.comment);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
