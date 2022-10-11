const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
  {
    Text: { type: String, require: [true, "please enter a text"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("goal", goalSchema);
