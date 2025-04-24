const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Get All
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Create
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Update
router.put("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
});

module.exports = router;