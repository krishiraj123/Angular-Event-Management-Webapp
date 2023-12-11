const express = require("express");
const { default: mongoose } = require("mongoose");
const stuSchema = mongoose.Schema({
  FirstName: { type: String, required: true },
  MiddleName: { type: String, required: true },
  LastName: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Zip: { type: Number, required: true },
  Age: { type: Number, required: true },
  MobileNumber: { type: Number, required: true },
  Email: { type: String, required: true, unique: true },
  Events: { type: String, required: true },
});

const students = new mongoose.model("students", stuSchema);
module.exports = students;
