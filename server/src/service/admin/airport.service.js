const { default: mongoose } = require("mongoose");
const AirPort = require("../../model/airport");
const Flight = require("../../model/flight");

const addairportDB=async(airportData)=>{
    const airport=new AirPort(airportData);
    return await airport.save();
}

const getAirportsDB=async()=>{
    const AirPorts=await AirPort.find({}).lean();

    const AirPortsTotal=await Promise.all(
        AirPorts.map(async(AirP)=>{
            const total=await Flight.countDocuments({airport:AirP._id});
            return {...AirP,total}
        })
    );
    return AirPortsTotal;
}

const updateAirPortDB=async(id,updateData)=>{
    return await AirPort.findByIdAndUpdate(id,updateData,{new:true});
}

const deleteAirportDB=async(id)=>{
    const session=await mongoose.startSession();

    try {
    const res=await session.withTransaction(async()=>{
        await AirPort.findByIdAndDelete(id,{session});
        await Flight.deleteMany({airport:id},{session});
    })
    console.log(res);
    return {};
    } catch (error) {
      console.log(error);
      return null;
    }
}

module.exports={addairportDB,getAirportsDB,deleteAirportDB,updateAirPortDB}