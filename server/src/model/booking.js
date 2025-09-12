const mongoose=require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId,ref:"User", required: true },
    flight: { type: mongoose.Schema.Types.ObjectId,ref:"Flight", required: true },
    seatsBooked: { type: Number, required: true },
    status: {
      type: String,
      enum: ["confirmed", "cancelled","pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking=mongoose.model("Booking",bookingSchema);
module.exports=Booking;

