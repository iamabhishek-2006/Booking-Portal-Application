const User = require("../model/user");


const userRegisterDB=async({name,email,password,phone})=>{
    const newUser=new User({name,email,password,phone});
    return await newUser.save()
}

const LoginByEmail = async (email) => {
  const userLogin = await User.findOne({email});
  return userLogin;
};

module.exports = { userRegisterDB, LoginByEmail };