const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    phone: { type: Number, require: true },
    fullAddress: { type: String, require: true },
    landmark: { type: String, require: true },
    city: { type: String, require: true },
    postalCode: { type: String, require: true },
    country: { type: String, require: true },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
