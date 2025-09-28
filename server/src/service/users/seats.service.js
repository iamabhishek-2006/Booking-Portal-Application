const Seats = require("../../model/addones");

const createSeatsDB=async(body,userId)=>{
    const seat=new Seats(body,userId);
    // console.log(seat,"seat is required");
    return  (await (await seat.save()).populate("user")).populate("flight");
}

const updateSeatsDB = async (id, updatedData) => {
   return await Seats.findByIdAndUpdate(id,updatedData,{new:true});

};


module.exports = { createSeatsDB, updateSeatsDB };
