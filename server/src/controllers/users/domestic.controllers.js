const { DomesticBookingDB } = require("../../service/users/domestic.service");

const DomesticBooking=async(req,res)=>{
    const {seatsBooked,travelingType}=req.body;
    const flight=req.params.id;
    const user=req.user.id;

    try {
    const data=await DomesticBookingDB({seatsBooked,travelingType},flight,user);
    return res.json({success:true,message:"user Booked successfully",data:data});
    } catch (error) {
    console.log(error);
    if(error.code===11000){
        return res.json({success:false,message:"user already booking this flight"});
    }
    return res.status(500).json({success:false,error:"user Booked unsuccssfully"});
    }
}

const CancelBooking=()=>{}

module.exports={DomesticBooking,CancelBooking};