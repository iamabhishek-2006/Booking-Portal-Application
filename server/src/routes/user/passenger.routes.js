const express=require("express");
const { addPassenger, updatePassenger, getAllPassengers } = require("../../controllers/users/passenger.controllers");

const router=express.Router();

router.post("/", addPassenger);
router.put("/:id",updatePassenger);


module.exports=router;