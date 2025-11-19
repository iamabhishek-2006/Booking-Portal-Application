// import User from "../../model/user";
const User = require("../../model/user");

const getmeDB = async (id) => {
  return await User.findById(id).select("-password -__v");
};

module.exports = { getmeDB };
