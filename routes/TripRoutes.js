const express = require('express');
const {
//   createtrips,
//   retrieveTrips,
//   retrievetripsbyid,
//   updatetripbyid,
//   deletetripbyid,
  CreateTrip,


} = require('../controllers/tripcontroller');
const Triprouter = express.Router();

Triprouter
.route('/')
.post(CreateTrip)
// .get(retrieveTrips);
Triprouter.use(verifyToken)
// TripRouter
// .route('/:id')
// .get(retrievetripsbyid)
// .put(updatetripbyid)
// .delete(deletetripbyid);

module.exports = Triprouter;