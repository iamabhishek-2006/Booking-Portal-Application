const express=require("express");
const { createSeats, updateSeats } = require("../../controllers/users/Seats.controllers");

const router=express.Router();

router.use("/",createSeats);
router.use("/:id",updateSeats);

module.exports=router;


