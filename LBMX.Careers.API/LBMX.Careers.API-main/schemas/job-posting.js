const mongoose = require('mongoose');

const JobPosting = new mongoose.Schema(
  {
    postingId: {
      type: String,
      unique: true,
    },
    title: String,
    blurb: String,
    jobCode: String,
    languages: [String],
    frameworks: [String],
    closingDate: Date,
  },
  { timestamps: true }
);

module.exports = JobPosting;
