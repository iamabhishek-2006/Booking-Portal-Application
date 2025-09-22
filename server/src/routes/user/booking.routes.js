const express = require("express");
const {
  userBooking,
  cancelBooking,
} = require("../../controllers/users/booking.controllers");

const router = express.Router();

router.post("/book/:id", userBooking);
router.delete("/:id", cancelBooking);

module.exports = router;
