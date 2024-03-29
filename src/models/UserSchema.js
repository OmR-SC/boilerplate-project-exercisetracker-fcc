const { model, Schema, default: mongoose } = require("mongoose");
const ExerciseSchema = require("./ExerciseSchema");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  log: [],
});

module.exports = model("User", UserSchema);
