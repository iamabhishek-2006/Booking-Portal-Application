const { userBookingDB } = require("../../service/users/booking.service");

const userBooking=async(req,res)=>{
    const {seatsBooked}=req.body;
    const {flightId,userId}=req.params;
    // const {userId}=req.user.id;
    // const {seatsBooked}=req.body;

    try {
    const data=await userBookingDB(flightId,seatsBooked,userId);
    return res.status(200).json({
        success:true,
        message:"user Book successfully",
        data:data
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:"something went wrong",
        })
    }
    
}

const cancelBooking=()=>{}

module.exports={userBooking,cancelBooking}