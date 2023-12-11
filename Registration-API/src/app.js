const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const students = require("../src/module/students");
const router = require("../src/router/student");
require("../src/database/connection");
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
