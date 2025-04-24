const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  position: String,
  experience: String,
  jobLocation: String,
  education: String,
  category: String,
});

module.exports = mongoose.model("Job", JobSchema);