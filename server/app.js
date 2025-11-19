require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const publicRoutes = require("./src/routes/public.routes");
const adminRoutes = require("./src/routes/admin");
const BookingRoutes = require("./src/routes/user");
const authMiddleware = require("./src/middleware/auth.middleware");
const adminOnly = require("./src/middleware/admin.middleware");
const authRoutes = require("./src/routes/auth.routes");
const cors=require("cors");


const app = express();
connectDB();

app.use(cors());

app.use(express.json()); // middleware

app.get("/", (req, res) => {
  res.send("hellow world");
});

const PORT = 3000;

//public
app.use("", publicRoutes);
app.use("/auth", authRoutes);

// admin

app.use(authMiddleware);

app.use("/admin", adminOnly, adminRoutes);

// user
app.use("/user", BookingRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
