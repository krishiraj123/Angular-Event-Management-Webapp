const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRouter");
const userRouter = require("./routes/userRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/note", noteRouter);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect("mongodb+srv://rajveer1179:1179@cluster0.kvt5vaj.mongodb.net/")
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started at port no 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
