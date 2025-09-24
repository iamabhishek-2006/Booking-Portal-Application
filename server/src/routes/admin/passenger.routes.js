const express=require("express");
const { getAllPassengers } = require("../../controllers/admin/passenger.controllers");

const router=express.Router();

router.use("/", getAllPassengers);

module.exports=router;