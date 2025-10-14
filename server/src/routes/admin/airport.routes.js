const express=require("express");
const { createAirport, getAirports, deleteAirport, UpdateAirPort } = require("../../controllers/admin/airport.controllers");

const router=express.Router();

router.post("/",createAirport);
router.put("/:id",UpdateAirPort);
router.delete("/:id",deleteAirport)
router.get("/",getAirports);

module.exports=router;