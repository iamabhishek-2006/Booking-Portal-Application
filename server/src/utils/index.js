const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");

const generateToken = (data) => {
  const accesstoken = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  const refreshtoken = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return { accesstoken, refreshtoken };
};

const generateSlug = (name) => {
  // console.log(name, "this is name");
  return name.toLowerCase().trim().replace(/\s+/g, "-");
};

const verifToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const hashPassword=(password)=>{
  return bcrypt.hash(password,12);
}

const verifyPassword=(password,hashPassword)=>{
  return bcrypt.compare(password,hashPassword)
}


module.exports = { generateToken, generateSlug, verifToken , hashPassword,verifyPassword };
