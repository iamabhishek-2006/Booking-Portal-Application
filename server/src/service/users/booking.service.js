const Booking = require("../../model/booking");

const userBookingDB = async ({seatsBooked,passport,visa,travelingType} ,userId, flight) => {
  const booking = new Booking({seatsBooked,passport,visa,travelingType,user:userId,flight} );
  return ((await booking.save()).populate("Flight"));
};

const cancelBookingDB = async (id) => {
  return await Booking.findByIdAndUpdate(
    id,
    { status: "cancelled" },
    { new: true }
  );
};

module.exports = { userBookingDB, cancelBookingDB };
