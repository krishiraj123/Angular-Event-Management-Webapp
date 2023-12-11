const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  img: String,
  _id: String,
});

const eventsListSchema = new mongoose.Schema({
  ShowAll: [eventSchema],
  Civil: [eventSchema],
  Computer: [eventSchema],
  Electrical: [eventSchema],
  Mechanical: [eventSchema],
});

const EventsList = mongoose.model("EventsList", eventsListSchema);

module.exports = EventsList;
