const { createSeatsDB, updateSeatsDB } = require("../../service/users/seats.service");

const createSeats=async(req,res)=>{
    const body=req.body;
    const userId=req.user.id;
    // console.log(userId);

    try {    
    const seatsData=  await createSeatsDB(body,userId);
    // console.log(seatsData);
    return res.status(200).json({
        success:true, message:"seats add successfully",data:seatsData
    })
    } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(500).json({
        success: false,
        error: "seat already booked",
      });
    }
    return res.status(500).json({
        success:false,error:"something went wrong"
    });
    }
}

const updateSeats=async(req,res)=>{
    const {id}=req.params;
    const updatedData = req.body;
    try {
    const data=new updateSeatsDB(id,updatedData)
    return await res.status(200).json({success:true,message:"user Update successfully",data:data}); 
    } catch (error) {
    console.log(error);
    return res.json({
        success:false,
        error:"something went wrong"
    })
    }
}

module.exports={createSeats,updateSeats};