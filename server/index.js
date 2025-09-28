const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);


app.get("/", (req, res) => {
  res.send("Hello from Job Portal Backend 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
