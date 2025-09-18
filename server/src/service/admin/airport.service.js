const AirPort = require("../../model/airport");

const addairportDB=async(airportData)=>{
    const airport=new AirPort(airportData);
    return await airport.save();
}

const getAirportsDB=async()=>{
    return await AirPort.find()
}

module.exports={addairportDB,getAirportsDB}