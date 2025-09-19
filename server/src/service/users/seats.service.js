const Seats = require("../../model/addones");

const createSeatsDB=async(body)=>{
    const seat=new Seats(body);
    return  (await (await seat.save()).populate("user")).populate("flight");
}

// const updateSeatsDB = async (id,{seatNumber,seatType,isBooked}) => {
//   const updateData = new Seats.findByIdAndUpdate(id,{seatNumber,seatType,isBooked},{new:true});
//   return await updateData;
// };

const updateSeatsDB = async (id, updatedData) => {
  const updateData = new Seats.findByIdAndUpdate(id, updatedData, { new: true});
  return await updateData;
};


module.exports = { createSeatsDB, updateSeatsDB };
