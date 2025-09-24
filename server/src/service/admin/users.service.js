const PassengerInfo = require("../../model/passenger");
const User = require("../../model/user")

const getAllusersDB=async()=>{
    return await User.find({});
}

const getAllPassengersDB = async () => {
  return await PassengerInfo.find({});
};


module.exports={getAllusersDB,getAllPassengersDB};
