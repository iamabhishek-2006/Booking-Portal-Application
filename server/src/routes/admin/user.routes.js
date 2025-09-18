const express=require("express");
const { getAllusers } = require("../../controllers/admin/user.controllers");

const router=express.Router();

router.get("/",getAllusers);

module.exports=router;