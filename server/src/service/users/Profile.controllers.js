const User = require("../../model/user")

const getProfileDB=async(id)=>{
    return await User.findById(id).select("-password -_v");

}

module.exports={getProfileDB}