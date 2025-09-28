import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>{job.description}</p>
          <p>Salary: {job.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
