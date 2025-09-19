const { createSeatsDB, updateSeatsDB } = require("../../service/users/seats.service");

const createSeats=async(req,res)=>{
    // const {user,seatNumber,seatType,flight}=req.body;
    const body=req.body;

    // if(!seatNumber || !seatType){
    //     return res.status(401).json({success:false,error:"all fields are required"});
    // }

    try {    
    const seatsData=  await createSeatsDB(body);
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
    // const {seatNumber,seatType,isBooked}=req.body;
    const updatedData = req.body;
    try {
    // const data=new updateSeatsDB(id,{seatNumber,seatType,isBooked});
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