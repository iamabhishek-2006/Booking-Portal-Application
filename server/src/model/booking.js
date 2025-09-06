const mongoose=require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId,ref:"User", required: true },
    flight: { type: mongoose.Schema.Types.ObjectId,ref:"Flight", required: true },
    seatsBooked: { typpe: Number, required: true },
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

const Booking=mongoose.model("Booking",bookingSchema);
module.exports=Booking;
// module.exports=mongoose.model("Booking",bookingSchema);

