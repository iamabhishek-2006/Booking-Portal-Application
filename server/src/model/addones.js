const mongoose=require("mongoose");

const seatsSchema = new mongoose.Schema(
  {
    flight: {type: mongoose.Schema.Types.ObjectId,ref: "Flight"},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    seatNumber: { type: String, required: true ,unique:true},
    isBooked: { type: Boolean, default: false },
    seatType: {
      type: String,
      enum: ["window", "middle", "aisle"],
      default: "aisle",
    },
  },
  {
    timestamps: true,
  }
);

const Seats=mongoose.model("Seats",seatsSchema);
module.exports=Seats;