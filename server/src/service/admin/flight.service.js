const Flight = require("../../model/flight");
const flight = require("../../model/flight")

const addFlightDB=async(flightData)=>{
    const newFlight= new flight(flightData);
    return await newFlight.save();
}

const updateFlightDB=async(id,updateData)=>{
    return await Flight.findByIdAndUpdate(id,updateData,{new:true});
}

const deleteFlightDB=async(id)=>{
    return await Flight.findByIdAndDelete(id);
}
const getflightDB = async () => {
  const flights = Flight.find({});
  return await flights;
};

module.exports={addFlightDB,updateFlightDB,deleteFlightDB,getflightDB};