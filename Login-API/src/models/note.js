const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { TimeRanges: true }
);

module.exports = mongoose.model("Note", NoteSchema);
