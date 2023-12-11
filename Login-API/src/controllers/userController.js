const userModel = require("../models/user");
const express = require("express");
const app = express();
app.use(express.json());

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllUsers };
