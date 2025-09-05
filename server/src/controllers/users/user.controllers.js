const express = require("express");
const {  userRegisterDB, LoginByEmail, } = require("../../service/user.service");


const userRegister=async(req,res)=>{

    const { name, email, password } = req.body;

    if(!name || !email || !password){
      return res.json({
        success:false,
        error:"All fields are required"
      })
    }


    try {

        const user = await userRegisterDB({ name, email, password });
        return res.status(200).json({
          success: true,
          message: "user register successfully",
          data:user
        });
    } catch (error) {
      console.log(error);
      if(error===11000){
        return res.json({
          error:"user already exists"
        })
      }
      return res.status(500).json({
        success:false,
        message:"user register unsuccessfully",
      })
    }
}

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    const user = await LoginByEmail(email);

    if(!user){
      return res.json({
        success:false,
        error:"user not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "user Login successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login unseccessfull",
    });
  }
};


module.exports = { userRegister ,userLogin};
