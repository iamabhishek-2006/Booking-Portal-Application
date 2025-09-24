const { getAllPassengersDB } = require("../../service/admin/users.service");

const getAllPassengers = async (req, res) => {
  const data = await getAllPassengersDB();
  return res.json({ success: true, data: data });
};

module.exports={getAllPassengers};