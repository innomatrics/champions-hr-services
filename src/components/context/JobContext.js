import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Replace with your backend URL
  const API = "http://localhost:5000/api/jobs";

  const fetchJobs = async () => {
    const res = await axios.get(API);
    setJobs(res.data);
  };

  const addJob = async (job) => {
    const res = await axios.post(API, job);
    setJobs((prev) => [...prev, res.data]);
  };

  const updateJob = async (id, updatedJob) => {
    const res = await axios.put(`${API}/${id}`, updatedJob);
    setJobs((prev) => prev.map((job) => (job._id === id ? res.data : job)));
  };

  const deleteJob = async (id) => {
    await axios.delete(`${API}/${id}`);
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
