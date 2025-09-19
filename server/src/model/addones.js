const mongoose=require("mongoose");

const seatsSchema = new mongoose.Schema(
  {
    flight: {type: mongoose.Schema.Types.ObjectId,ref: "Flight",required: true,},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    seatNumber: { type: String, required: true },
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