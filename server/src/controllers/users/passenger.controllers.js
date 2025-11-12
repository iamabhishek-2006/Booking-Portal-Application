const { passengerDetailDB, updatePassengerDB } = require("../../service/users/passenger.service");

const addPassenger=async(req,res)=>{
    const {FirstName,LastName,DOB,Gender,email,phone,Address,Country,passportNumber,passportExpireDate,Nationality,AddharNumber}=req.body;


    if(AddharNumber.length === 12){
        return res.json({success:false,error:"enter 12 digits"})
    }

    if(phone.length===10){
        return res.json({success:false,error:"enter 10 digits"})
    }

    // Todo: check user if exists

    const userId=req.user.id;
    req.body.user=userId;

    try {
    const passengerDetail=await passengerDetailDB(req.body);
    return res.json({
        success:true,
        message:"user added all details successfully",
        data:passengerDetail
    })
    } catch (error) {
    console.log(error);

    if(error.code==11000){
        return res.status(500).json({
            success:true,
            error:"passenger already exists"
        })
    }
    return res.status(500).json({
        success:false,
        error:"something went wrong"
    })
    }
}

const updatePassenger=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
    const updateData=await updatePassengerDB(id,body);
    return res.status(200).json({
        success:true,
        message:"user updated Data successfully",
        data:updateData
    })
    } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        error:"something went wrong",
    })
    }
}

module.exports={addPassenger,updatePassenger}