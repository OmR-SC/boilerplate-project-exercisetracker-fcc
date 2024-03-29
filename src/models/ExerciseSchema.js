const { model, Schema } = require("mongoose");

const ExerciseSchema = new Schema({
  description: String,
  duration: Number,
  date: Date,
});

module.exports = model("Exercise", ExerciseSchema);
