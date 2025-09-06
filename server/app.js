require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");

const app = express();
connectDB();

app.use(express.json()); // middleware

app.get("/", (req, res) => {
  res.send("hellow world");
});

const PORT = 3000;

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
