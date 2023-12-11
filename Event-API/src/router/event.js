// const { get } = require("mongoose");
// const express = require("express");
// const events = require("../module/events");
// const router = new express.Router();
// router.post("/", async (req, res) => {
//   try {
//     const addEvents = new events(req.body);
//     console.log(req.body);
//     const insertEvents = await addEvents.save();
//     res.status(201).send(insertEvents);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.get("/events", async (req, res) => {
//   try {
//     const getEvents = await events.find({}).sort({ EventID: 1 });
//     res.send(getEvents);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.get("/events/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getEvent = await events.findById(_id);
//     res.send(getEvent);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.delete("/events/:id", async (req, res) => {
//   try {
//     const getEvent = await events.findByIdAndDelete(req.params.id);
//     res.send(getEvent);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// router.patch("/events/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getEvent = await events.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(getEvent);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });
// module.exports = router;

// const express = require("express");
// const events = require("../module/events");
// const router = new express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const addEvents = new events(req.body);
//     const insertEvents = await addEvents.save();
//     res.status(201).send(insertEvents);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.get("/events", async (req, res) => {
//   try {
//     const getEvents = await events.find({}).sort({ EventID: 1 });

//     // Check if the request wants JSON or array of objects
//     if (req.headers.accept === "application/json") {
//       res.json(getEvents);
//     } else {
//       // If the client doesn't specify a preference, return both
//       res.send({
//         json: getEvents,
//         array: getEvents.map((event) => event.toObject()),
//       });
//     }
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.get("/events/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getEvent = await events.findById(_id);
//     res.send(getEvent);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.delete("/events/:id", async (req, res) => {
//   try {
//     const getEvent = await events.findByIdAndDelete(req.params.id);
//     res.send(getEvent);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// router.patch("/events/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getEvent = await events.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(getEvent);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// module.exports = router;

const express = require("express");
const events = require("../module/events");
const router = new express.Router();

router.post("/", async (req, res) => {
  try {
    const addEvents = new events(req.body);
    const insertEvents = await addEvents.save();
    res.status(201).send(insertEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/events", async (req, res) => {
  try {
    const getEvents = await events.find({}).sort({ id: 1 });

    res.json(getEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/events/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEvent = await events.findById(_id);

    if (!getEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(getEvent);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/events/:id", async (req, res) => {
  try {
    const getEvent = await events.findByIdAndDelete(req.params.id);

    if (!getEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(getEvent);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/events/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEvent = await events.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    if (!getEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(getEvent);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
