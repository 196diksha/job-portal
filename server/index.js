const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Dummy job data
let jobs = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
  { id: 2, title: "Backend Developer", company: "Code Inc", location: "Delhi" }
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Job Portal Backend 🚀");
});

// Get all jobs
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// Post a new job
app.post("/api/jobs", (req, res) => {
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  res.json(newJob);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
