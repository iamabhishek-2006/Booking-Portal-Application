const express=require("express");
const { addFlight, updateFlight, deleteFlight, getFight } = require("../../controllers/admin/flight.controllers");

const router=express.Router();
router.post("/flight",addFlight);
router.get("/",getFight)
router.put("/:id",updateFlight);
router.delete("/:id",deleteFlight);

module.exports=router;