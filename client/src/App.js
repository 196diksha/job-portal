import React, { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  // Fetch jobs from backend
  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  // Add new job
  const handleAddJob = async (e) => {
    e.preventDefault();
    const newJob = { title, company, location };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob)
    });

    const data = await res.json();
    setJobs([...jobs, data]);

    // Reset form
    setTitle("");
    setCompany("");
    setLocation("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Job Portal 🚀</h1>

      <h2>Post a Job</h2>
      <form onSubmit={handleAddJob}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" required />
        <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" required />
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" required />
        <button type="submit">Add Job</button>
      </form>

      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company} ({job.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
