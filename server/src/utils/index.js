const jwt=require("jsonwebtoken");

const generateToken=(data)=>{
    const accesstoken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30d"});
    const refreshtoken=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"30d"});
    return {accesstoken,refreshtoken}
}

const generateSlug = (name) => {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
};


const verifToken=(token)=>{
  return jwt.verify(token,process.env.JWT_SECRET);
}

module.exports={generateToken,generateSlug,verifToken};