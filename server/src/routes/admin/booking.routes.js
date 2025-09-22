const express=require("express");
const { getAllBookings } = require("../../controllers/admin/bookings.controllers");

const router=express.Router();

router.get("/",getAllBookings);

module.exports=router