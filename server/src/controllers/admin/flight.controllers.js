const {
  addFlightDB,
  updateFlightDB,
  deleteFlightDB,
  getflightDB,
} = require("../../service/admin/flight.service");
const { generateSlug } = require("../../utils");

const addFlight = async (req, res) => {
  
  try {
    const body = req.body;

    if (body.airline &&  body.departure && body.arrival  && body.date) {
      body.slug = generateSlug(`${body.airline} ${body.departure} to ${body.arrival} && ${body.date}`);
    }


    const data = await addFlightDB(body);
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

if (updateData.airline && updateData.departure && updateData.arrival && updateData.date) {
  updateData.slug = generateSlug( `${updateData.airline} ${updateData.departure} to ${updateData.arrival} ${updateData.date}`);
}
 
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
