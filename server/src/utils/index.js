const jwt=require("jsonwebtoken");

const generateToken=(data)=>{
    const accesstoken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30"});
    const refreshtoken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30"});
    return {accesstoken,refreshtoken}
}
module.exports={generateToken};