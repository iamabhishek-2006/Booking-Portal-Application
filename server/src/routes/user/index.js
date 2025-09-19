const express =require("express");
const authRoutes=require("./auth.routes");
const bookingRoutes=require("./booking.routes");
const seatsRoutes=require("./seats.routes");
const passengerRoutes =require('./passenger.routes')
const router=express.Router();

router.use("/auth",authRoutes);
router.use("/booking",bookingRoutes);
router.use("/seats",seatsRoutes);
router.use("/passenger",passengerRoutes)

module.exports=router;