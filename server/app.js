require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const authRoutes = require("./src/routes/user.routes.js/auth.routes");
const flightRoutes=require("./src/routes/admin.routes.js/flight.routes")
const publicRoutes=require("./src/routes/public.routes")
const BookingRoutes=require("./src/routes/user.routes.js/booking.routes")

const app = express();
connectDB();

app.use(express.json()); // middleware

app.get("/", (req, res) => {
  res.send("hellow world");
});

const PORT = 3000;

app.use("/auth", authRoutes);

//public
app.use("/public",publicRoutes)

// admin
app.use("/admin",flightRoutes);

// user
app.use("/user",BookingRoutes)

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
