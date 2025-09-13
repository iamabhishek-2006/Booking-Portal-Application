const Booking = require("../../model/booking");

const userBookingDB = async (flight,seatsBooked,user,passport,visa,travelingType) => {
  const booking = new Booking({  flight,  seatsBooked,  user,  passport,  visa,  travelingType});

  return await booking.save();
};

const cancelBookingDB=async(id)=>{
  return await Booking.findByIdAndUpdate(id,{status:"cancelled"},{new:true});
}

module.exports={userBookingDB,cancelBookingDB}