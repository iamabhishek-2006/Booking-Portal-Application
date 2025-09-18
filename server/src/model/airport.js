const mongoose=require("mongoose");

const airportSchema=new mongoose.Schema({
    airport_Code:{type:String,required:true,unique:true},
    airport_Name:{type:String,required:true},
    city:{type:String},
    country:{type:String,required:true}
},{timestamps:true})
const AirPort=mongoose.model("AirPort",airportSchema);
module.exports=AirPort;