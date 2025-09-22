const { passengerDetailDB, updatePassengerDB, getAllPassengersDB } = require("../../service/users/passenger.service");

const getAllPassengers=async(req,res)=>{
    const data=await getAllPassengersDB();
    return res.json({success:true,data:data});
}


const addPassenger=async(req,res)=>{
    const body=req.body;

    if(!body){
        return res.status(401).json({
            success:false,
            error:"all fields are required",
            // required:[""]
        })
    }

    try {
    const passengerDetail=await passengerDetailDB(body);
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

module.exports={addPassenger,updatePassenger,getAllPassengers}