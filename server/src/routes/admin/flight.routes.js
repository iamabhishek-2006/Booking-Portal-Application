const express=require("express");
const { addFlight, updateFlight, deleteFlight, getFight } = require("../../controllers/admin/flight.controllers");

const router=express.Router();
router.get("/",getFight)
router.post("/",addFlight);
router.put("/:id",updateFlight);
router.delete("/:id",deleteFlight);

module.exports=router;