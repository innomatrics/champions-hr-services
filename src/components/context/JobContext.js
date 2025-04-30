import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const API = "https://champions-hr-services-5.onrender.com/api/jobs";

  const fetchJobs = async () => {
    try {
      const res = await axios.get(API);
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      //  Handle error (e.g., set an error state, display a message)
    }
  };

  const addJob = async (jobData) => {
    console.log("Sending job to backend:", jobData);
    try {
      const res = await axios.post(API, jobData);
      console.log("Job added response:", res.data);
      setJobs((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding job:", error);
       // Handle error
    }
  };

  const updateJob = async (updatedJob) => {
    try {
      const res = await axios.put(`${API}/${updatedJob.id}`, updatedJob); // Send the whole updatedJob
      console.log("Updated job response:", res.data);
      setJobs((prev) =>
        prev.map((job) => (job._id === updatedJob.id ? res.data : job))
      );
    } catch (error) {
      console.error("Error updating job:", error);
      // Handle error
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
       console.error("Error deleting job:", error);
       // Handle error
    }
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