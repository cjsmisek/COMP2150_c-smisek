// Import required modules
var express = require('express');
var router = express.Router();

/* GET information about this project. */
router.get('/', function(req, res, next) {
  res.send('My project is about cars and sorting them by attributes like manufacturer and type of vehicle.');
});
// Export this module's router
module.exports = router;