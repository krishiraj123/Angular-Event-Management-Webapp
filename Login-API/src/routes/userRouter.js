const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const userRouter = express.Router();

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await user.findOne({ username });

    if (!existingUser) {
      return res.status(404).send({ message: "Username not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Incorrect password" });
    }

    res.status(200).send({ message: "Sign-in successful" });
  } catch (err) {
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
});

userRouter.get("/users", async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
});

module.exports = userRouter;
