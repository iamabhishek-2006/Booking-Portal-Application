const Flight = require("../../model/flight");

const getflightDB = async () => {
  const flights = Flight.find({});
  return await flights;
};
const addFlightDB = async (flightData) => {
  const newFlight = new Flight(flightData);
  return (await newFlight.save()).populate("airport");
};

const updateFlightDB = async (id, updateData) => {
  return await Flight.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteFlightDB = async (id) => {
  return await Flight.findByIdAndDelete(id);
};

module.exports = { addFlightDB, updateFlightDB, deleteFlightDB, getflightDB };
