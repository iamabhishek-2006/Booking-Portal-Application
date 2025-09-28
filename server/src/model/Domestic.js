const mongoose=require("mongoose");

const DomesticSchema=new mongoose.Schema({
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true},
      travelingType:{type:String,enum:["International","Domestic"],default:"Domestic",required:true},
      seatsBooked: { type: Number, required: true,min:1 },
      status: {type: String,enum: ["confirmed", "cancelled", "pending"],default: "pending"},
},{timestamps:true});

const Domestic=mongoose.model("Domestic",DomesticSchema);
module.exports=Domestic;

