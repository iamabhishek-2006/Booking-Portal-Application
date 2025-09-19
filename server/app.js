require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const publicRoutes=require("./src/routes/public.routes")
const adminRoutes=require("./src/routes/admin")
const BookingRoutes=require("./src/routes/user")

const app = express();
connectDB();

app.use(express.json()); // middleware

app.get("/", (req, res) => {
  res.send("hellow world");
});

const PORT = 3000;

//public
app.use("/",publicRoutes)

// admin
app.use("/admin",adminRoutes);

// user
app.use("/user",BookingRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
