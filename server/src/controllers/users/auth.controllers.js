const { userRegisterDB, LoginByEmail } = require("../../service/users/user.service");
const { generateToken } = require("../../utils");


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

        const user = await userRegisterDB({ name, email, password,phone });
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
      error: "All fields are required",
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

    const {accesstoken,refreshtoken}=generateToken({
        id:user._id,
        name:user.name,
        email:user.email,
        password:user.password
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
