const User = require("../model/user");


const userRegisterDB=async({name,email,password})=>{
    const newUser=new User({name,email,password});
    return await newUser.save()
}

const LoginByEmail = async (email) => {
  const userLogin = await User.findOne({email});
  return userLogin;
};

module.exports = { userRegisterDB, LoginByEmail };