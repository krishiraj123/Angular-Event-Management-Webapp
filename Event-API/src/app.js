// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// const events = require("../src/module/events");
// const router = require("../src/router/event");
// require("../src/database/connection");
// app.use(express.json());
// app.use(router);
// app.listen(port, () => {
//   console.log("connection successful at 3000");
// });

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const events = require("../src/module/events");
const router = require("../src/router/event");
require("../src/database/connection");

app.use(express.json());
app.use(cors());
app.use(cors({ origin: true, credentials: true }));
app.use(cors({ origin: "http://localhost:4200" }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
