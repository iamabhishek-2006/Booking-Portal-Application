const PassengerInfo = require("../../model/passenger")

const passengerDetailDB=async(data)=>{
    const passengerData=new PassengerInfo(data);
    return (await (await passengerData.save()).populate({path:"user", select:"name email phone  "}));
}

const updatePassengerDB=async(id,body)=>{
    return await PassengerInfo.findByIdAndUpdate(id,body,{new:true});
}

module.exports={passengerDetailDB,updatePassengerDB};