const { getAllusersDB } = require("../../service/admin/users.service");

const getAllusers = async (req, res) => {
  const data = await getAllusersDB();
  return res.json({ success: true, data: data });
};


module.exports = { getAllusers  };
