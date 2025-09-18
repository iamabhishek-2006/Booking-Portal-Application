const mongoose=require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    airline: { type: String, required: true }, // indigo , emirates
    flightNumber: { type: String, required: true, unique: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    seats: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    price: { type: Number, required: true },
    airport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AirPort",
      required: true,
    },
    luggaePolicy: {
        cabin: { type: String, default:"7kg" },
        checkIn: { type: String, default:"15kg" },
    },
  },
  { timestamps: true }
);

const Flight=mongoose.model("Flight",flightSchema);
module.exports=Flight;