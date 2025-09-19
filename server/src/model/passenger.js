const mongoose=require("mongoose");

const passengerSchema=new mongoose.Schema({
        firstName:{type:String,required:true},
        LastName:{type:String,required:true},
        DOB:{type:Date,required:true},
        Gender:{type:String,required:true,enum:["male","female","adult","other"],default:"male"},
        email:{type:String,required:true,unique:true},
        phone:{type:Number,required:true},
        Address:{type:String,required:true},
        Country:{type:String,required:true,default:"India"},
        passportNumber:{type:String,required:true,unique:true},
        passportExpireDate:{type:Date,required:true},
        Nationality:{type:String,required:true,default:"India"},
        AddharNumber:{type:Number,required:true,unique:true},
        user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
});

const PassengerInfo=mongoose.model("PassengerInfo",passengerSchema);
module.exports=PassengerInfo;