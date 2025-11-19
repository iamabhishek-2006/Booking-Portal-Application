const { getProfileDB } = require("../../service/users/Profile.controllers");

const getProfile=async(req,res)=>{
    const id=req.user.id;
    const data= await getProfileDB(id);
    return res.json({success:true,data});
}

module.exports={getProfile}