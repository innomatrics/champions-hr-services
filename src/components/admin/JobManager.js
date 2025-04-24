import React from "react";
import { useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";

const JobManager = () => {
  const { jobs, deleteJob } = useJobContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-danger">Manage Jobs</h3>
        <button className="btn btn-success" onClick={() => navigate("/admin/add-job")}>
          + Add Job
        </button>
      </div>

      {jobs.map((job) => (
        <div key={job.id} className="card mb-3">
          <div className="card-body">
            <h5>{job.position}</h5>
            <p>{job.experience} | {job.jobLocation}</p>
            <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(job.id)}>
              Delete
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => navigate(`/admin/edit-job/${job.id}`, { state: job })}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobManager;
