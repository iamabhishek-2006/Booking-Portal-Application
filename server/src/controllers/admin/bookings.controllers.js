const { getAllBookingsDB } = require("../../service/admin/booking.service");

const getAllBookings = async (req, res) => {
  const data = await getAllBookingsDB();
  return res.json({ success: true, data: data });
};
module.exports={getAllBookings};