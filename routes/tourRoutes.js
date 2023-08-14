const express = require('express');
const {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updateTour,
  checkID,
  checkBody,
} = require('./../constrollers/tourController');

const router = express.Router();

//Create a checkBody middleware
//Check if body contains the name and price property
//If not, sned back 400 (bad request)
//Add it to the post handler stack

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
