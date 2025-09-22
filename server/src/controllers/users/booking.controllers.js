const {
  userBookingDB,
  cancelBookingDB,
} = require("../../service/users/booking.service");

const userBooking = async (req, res) => {
  const { seatsBooked, passport, visa ,travelingType} = req.body;
  const flight = req.params.id;
  const userId = req.user.id;

  try {
    const data = await userBookingDB({seatsBooked,passport,visa,travelingType}, userId, flight);
    return res.status(200).json({
      success: true,
      message: "user Booking successfully",
      data: data,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        success: false,
        message: "user already booked this flight",
      });
    }
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "something went wrong",
    });
  }
};

const cancelBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await cancelBookingDB(id);
    if (!result) {
      return res.json({
        success: false,
        message: "Booking not found already cancelled",
      });
    }
    return res.status(200).json({
      success: true,
      message: "cancel booking successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "something went wrong",
    });
  }
};

module.exports = { userBooking, cancelBooking };
