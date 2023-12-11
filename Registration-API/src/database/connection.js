const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://rajveer1179:1179@cluster0.kvt5vaj.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((e) => {
    console.log("No connection found!");
  });
