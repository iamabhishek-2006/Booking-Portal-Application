const { userRegisterDB, LoginByEmail } = require("../../service/users/user.service");
const { generateToken, hashPassword, verifyPassword } = require("../../utils");


const userRegister=async(req,res)=>{

    const { name, email, password ,phone} = req.body;

    if(!name || !email || !password || !phone){
      return res.json({
        success:false,
        error:"All fields are required",
        require:["name", "email", "password", "phone"]
      });
    }

    try {
        // hash password

        const hashPswd=await hashPassword(password);

        const user = await userRegisterDB({ name, email, password:hashPswd,phone });

        // remove password

        user.password=undefined;
        user.__v=undefined;

        return res.status(200).json({
          success: true,
          message: "user register successfully",
          data:user
        });
    } catch (error) {
      console.log(error);
      if(error.code===11000){
        return res.json({
          error:"user already exists"
        });
      }
      return res.status(500).json({
        success:false,
        error:"user register unsuccessfully",
      })
    }
}

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      error: "Email & password is required",
      require:["email", "password"]
    });
  }

  try {
    const user = await LoginByEmail(email);

    if(!user){
      return res.json({
        success:false,
        error:"user not found"
      });
    }

    // hash password
    const isValid=await verifyPassword(password,user.password);
    if(!isValid){
      return res.json({
        success:false,
        error:"wrong password"
      });
    }

    user.password=undefined;

    const {accesstoken,refreshtoken}=generateToken({
        id:user._id,
        name:user.name,
        email:user.email,
        password:user.password,
        role:user.role    // jab token generate hoga to role yaha se jaega step No  1
    })

    return res.status(200).json({
      success: true,
      message: "user Login successfully",
      data: {user,accesstoken,refreshtoken}

    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Login failed!",
    });
  }
};


module.exports = { userRegister ,userLogin};
