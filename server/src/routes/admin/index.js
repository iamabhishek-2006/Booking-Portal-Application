const express=require("express");
const airportRoutes=require("./airport.routes")
const flightRoutes=require("./flight.routes");
const getAlluser=require("./users.routes")
const bookingRoutes=require("./booking.routes");

const router=express.Router();

router.use("/airport",airportRoutes);
router.use("/flight",flightRoutes);
router.use("/",getAlluser);
router.use("/bookings",bookingRoutes);

module.exports=router;