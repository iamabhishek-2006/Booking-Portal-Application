const mongoose=require("mongoose");

const mealsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    quantity:{type:Number,required:true},
    foodtype:{type:String,enum:["Veg","Non-veg"],default:"Veg",required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true},

});
const Meals=mongoose.model("Meals",mealsSchema);
module.exports=Meals;