const AirPort = require("../../model/airport");

const addairportDB=async(airportData)=>{
    const airport=new AirPort(airportData);
    return await airport.save();
}

const getAirportsDB=async()=>{
    return await AirPort.find()
}

const updateAirPortDB=async(id,updateData)=>{
    return await AirPort.findByIdAndUpdate(id,updateData,{new:true});
}

const deleteAirportDB=async(id)=>{
    return await AirPort.findByIdAndDelete(id);
}

module.exports={addairportDB,getAirportsDB,deleteAirportDB,updateAirPortDB}