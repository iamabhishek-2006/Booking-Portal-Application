const express=require("express");
const airportRoutes=require("./airport.routes")
const flightRoutes=require("./flight.routes");
const getAlluser=require("./users.routes")
const bookingRoutes=require("./booking.routes");
const passengerRoutes=require("./passenger.routes");

const router=express.Router();

router.use("/",getAlluser);
router.use("/passengers",passengerRoutes)
router.use("/airport",airportRoutes);
router.use("/flight",flightRoutes);
router.use("/bookings",bookingRoutes);

module.exports=router;