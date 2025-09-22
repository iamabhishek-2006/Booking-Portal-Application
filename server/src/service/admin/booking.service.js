const Booking = require("../../model/booking");

const getAllBookingsDB = async () => {
  return await Booking.find({});
};

module.exports={getAllBookingsDB}