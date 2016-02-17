/* Connect and activate Express.js */
var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Make this file visible within the rest of the application
module.exports = router;
