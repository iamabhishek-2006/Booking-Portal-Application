const { getAllusersDB } = require("../../service/admin/user.service");

const getAllusers = async (req, res) => {
  const data = await getAllusersDB();
  return res.json({ success: true, data: data });
};

module.exports = { getAllusers };
