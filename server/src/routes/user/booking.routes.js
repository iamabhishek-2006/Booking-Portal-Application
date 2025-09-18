const express=require("express");
const { userBooking, cancelBooking } = require("../../controllers/users/booking.controllers");

const router=express.Router();

router.post("/book",userBooking);
router.delete("/:id",cancelBooking)

module.exports=router;