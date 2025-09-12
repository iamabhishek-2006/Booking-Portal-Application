const express=require("express");
const { userBooking } = require("../../controllers/users/booking.controllers");

const router=express.Router();

router.post("/book",userBooking);

module.exports=router;