const { get } = require("mongoose");
const express = require("express");
const students = require("../module/students");
const router = new express.Router();
router.post("/", async (req, res) => {
  try {
    const addStudents = new students(req.body);
    console.log(req.body);
    const insertStudents = await addStudents.save();
    res.status(201).send(insertStudents);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students", async (req, res) => {
  try {
    const getStudents = await students.find({}).sort({ StudentID: 1 });
    res.send(getStudents);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStu = await students.findById(_id);
    res.send(getStu);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const getStu = await students.findByIdAndDelete(req.params.id);
    res.send(getStu);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStu = await students.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getStu);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
