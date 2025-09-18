const {
  addFlightDB,
  updateFlightDB,
  deleteFlightDB,
  getflightDB,
} = require("../../service/admin/flight.service");

const addFlight = async (req, res) => {
  const { airline, flightNumber, departure, arrival, departureTime, arrivalTime,seats,price,availableSeats,airport} = req.body;
 
  if ( !airline || !flightNumber || !departure || !arrival || !departureTime || !arrivalTime || !seats || !price ||!availableSeats ||!airport) {
    res.json({
      success: false,
      error: "all fields are required",
    });
  }
  try {
    const data = await addFlightDB(req.body);
    return res.status(200).json({
      success: true,
      message: " flight add successfully",
      data: data,
    });
  } catch (error) {
    if (error.code == 11000) {
      return res.json({
        success: false,
        error: "flight already exists",
      });
    }
    console.log(error);
    return res.status(400).json({
      success: false,
      error: "something went wrong",
    });
  }
};

const getFight = async (req, res) => {
  try {
    const flight = await getflightDB();
    return res.json({
      success: true,
      data: flight,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: "something went wrong",
    });
  }
};

const updateFlight = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    if (!updateData) {
      return res.json({
        success: false,
        error: "flight not found",
      });
    }
    const data = await updateFlightDB(id, updateData, { new: true });
    return res.json({
      success: true,
      message: "flight updated successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "somthing went wrong",
    });
  }
};

const deleteFlight = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Flight id is required",
    });
  }

  try {
    const deletedFlight = await deleteFlightDB(id);
    return res.status(200).json({
      success: true,
      message: "flight delete successfully",
      data: deletedFlight,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "something went wrong",
    });
  }
};
module.exports = { addFlight, updateFlight, deleteFlight, getFight };
