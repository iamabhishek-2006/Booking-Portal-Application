const PassengerInfo = require("../../model/passenger")


const getAllPassengersDB=async()=>{
    return await PassengerInfo.find({});
}

const passengerDetailDB=async(body)=>{
    const passengerData=new PassengerInfo(body);
    return (await passengerData.save()).populate("user");
}

const updatePassengerDB=async(id,body)=>{
    return await PassengerInfo.findByIdAndUpdate(id,body,{new:true});
}

module.exports={passengerDetailDB,updatePassengerDB,getAllPassengersDB};