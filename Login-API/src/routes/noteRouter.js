const express = require("express");
const note = require("../models/note");
const noteRouter = express.Router();

noteRouter.post("/", (req, res) => {
  res.send("Note get request");
});

noteRouter.post("/", (req, res) => {
  res.send("Note post request");
});

module.exports = noteRouter;
