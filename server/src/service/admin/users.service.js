const User = require("../../model/user")

const getAllusersDB=async()=>{
    return await User.find({});
}


module.exports={getAllusersDB};
