const Job = require("../models/Job");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;

    const newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
      createdBy: req.body.userId, // temporarily passing from frontend
    });

    await newJob.save();
    res.status(201).json({ msg: "Job created successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("createdBy", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Get job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("createdBy", "name email");
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Update job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json({ msg: "Job updated successfully", job });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json({ msg: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
