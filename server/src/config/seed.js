require("dotenv").config();
const User=require("../model/user");
const { hashPassword } = require("../utils");
const {connectDB}=require("./db");
const dbSeed=async()=>{
    try {
    await connectDB();
    console.log("Database seeding");
    console.log("creating Admin user");

    const admin=new User({
        email:"abhishekshrivastav5920@gmail.com",
        name:"Abhishek",
        password:await hashPassword("admin"),
        phone:"790027607",
        role:"admin"
    });
    await admin.save();

    console.log("Admin created");
    process.exit(0);

    } catch (error) {
    if(error.code===11000){
    console.log("A user with this email already exists");
    process.exit(1);
    }
    console.log(error);
    console.log("something went wrong");
    process.exit(1);
    }
}
dbSeed();