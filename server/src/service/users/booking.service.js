const Booking = require("../../model/booking");

const userBookingDB=async(flightId,seatsBooked,userId)=>{
 const booking = new Booking({ user: userId, flight: flightId,seatsBooked});

  return await booking.save();
}

const cancelBookingDB=()=>{}

module.exports={userBookingDB,cancelBookingDB}