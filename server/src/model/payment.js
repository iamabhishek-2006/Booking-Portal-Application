const mongoose=require("mongoose");

const paymentSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    booking:{type:mongoose.Schema.ObjectId,ref:"Booking",required:true},  // payment is linked in booking
    amount:{type:Number,required:true},
    method:{type:String,enum:["UPI","Card","NetBanking","Paypal"],default:"UPI",required:true},
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now}
},{timestamps:true});

const Payment=mongoose.model("Payment",paymentSchema);
module.exports=Payment;