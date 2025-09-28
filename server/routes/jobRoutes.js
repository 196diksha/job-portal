const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/", createJob);      // Create job
router.get("/", getJobs);         // Get all jobs
router.get("/:id", getJobById);   // Get single job
router.put("/:id", updateJob);    // Update job
router.delete("/:id", deleteJob); // Delete job

module.exports = router;
