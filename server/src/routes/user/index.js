const express = require("express");
const bookingRoutes = require("./booking.routes");
const seatsRoutes = require("./seats.routes");
const passengerRoutes = require("./passenger.routes");
const authMiddleware = require("../../middleware/auth.middleware");
const domesticRoutes=require("./domestic.routes")
const router = express.Router();

router.use("/booking", authMiddleware, bookingRoutes);
router.use("/DomesticBooking",authMiddleware,domesticRoutes)
router.use("/seats", seatsRoutes);
router.use("/passenger", passengerRoutes);

module.exports = router;
