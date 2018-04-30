var express = require('express');
var router = express.Router();

// Import controller
var car_controller = require('../controllers/carController');

// GET list of cars
router.get('/', car_controller.car_list);
// GET individual car
router.get('/:id', car_controller.car_detail);

module.exports = router;
