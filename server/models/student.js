var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  rollno: {
    type: String,
    unique: true,
    required: true,
    maxlength: 10,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  maths: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  physics: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  chemistry: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  total: {
    type: Number,
    required: true,
    min: 0,
    max: 300,
  },
  percentage: {
    type: Number,
    maxlength: 5,
    required: true,
  },
});

module.exports = mongoose.model("Student", userSchema);
