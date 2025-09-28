const express=require("express");
const { DomesticBooking } = require("../../controllers/users/Domestic.controllers");

const router=express.Router();

router.post("/:id",DomesticBooking);

module.exports=router;