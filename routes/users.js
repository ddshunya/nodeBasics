var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('locate a resource');
});

router.get('/user1', function(req, res, next) {
  res.send('User1 located');
});

module.exports = router;
