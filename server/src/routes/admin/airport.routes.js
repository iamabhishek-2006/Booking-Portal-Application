const express=require("express");
const { createAirport, getAirports } = require("../../controllers/admin/airport.controllers");

const router=express.Router();

router.post("/",createAirport);
router.get("/",getAirports);

module.exports=router;