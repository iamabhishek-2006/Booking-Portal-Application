const express=require("express");
const airportRoutes=require("./airport.routes")
const flightRoutes=require("./flight.routes");
const getAlluser=require("./user.routes")

const router=express.Router();

router.use("/airport",airportRoutes);
router.use("/flight",flightRoutes);
router.use("/",getAlluser);

module.exports=router