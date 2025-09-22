const express =require("express");
const authRoutes=require("./auth.routes");
const bookingRoutes=require("./booking.routes");
const seatsRoutes=require("./seats.routes");
const passengerRoutes =require('./passenger.routes');
const authMiddleware = require("../../middleware/auth.middleware");
const router=express.Router();

router.use("/auth",authRoutes);
router.use("/booking",authMiddleware,bookingRoutes);
router.use("/seats",seatsRoutes);
router.use("/passenger",passengerRoutes)

module.exports=router;