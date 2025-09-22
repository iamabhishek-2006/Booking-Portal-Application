const express=require("express");
const { getAllusers } = require("../../controllers/admin/users.controllers");

const router=express.Router();

router.get("/",getAllusers);

module.exports=router;