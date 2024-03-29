const Exercise = require("../models/ExerciseSchema");
const User = require("../models/UserSchema");

const getAllUsers = async () => {
  const response = await User.find();

  const test = response.map((user) => {
    return {
      _id: user._id,
      username: user.username,
    };
  });
  return test;
};

const getFullUser = async (_id) => {
  return await User.findById(_id);
};

const getFilteredUser = async (_id, from = "", to = "", limit) => {
  const user = await User.findById(_id);

  from = from.length == 0 ? new Date(-8640000000000000) : new Date(from);
  to = to.length == 0 ? new Date(8.64e15) : new Date(to);
  limit = parseInt(limit) || user.log.length;

  const filteredExercises = user.log
    .filter((exercise) => {
      if (new Date(exercise.date) >= from && new Date(exercise.date) < to) {
        return true;
      }
      return false;
    })
    .slice(0, limit);

  const filteredUser = {
    _id: user._id,
    username: user.username,
    count: filteredExercises.length,
    log: filteredExercises,
  };

  if (from.toDateString() != new Date(-8640000000000000).toDateString()) {
    filteredUser.from = from.toDateString();
  }

  if (to.toDateString() != new Date(8.64e15).toDateString()) {
    filteredUser.to = to.toDateString();
  }

  return filteredUser;
};

const insertUser = async (username) => {
  const newUser = new User({
    username,
  });

  await newUser.save();
  return newUser;
};

const postExercise = async (_id, description, duration, date) => {
  console.log(typeof date);

  if (date == "" || new Date(date) == "Invalid Date") {
    date = new Date().toDateString();
  } else {
    date = new Date(date).toDateString();
  }

  const user = await User.findByIdAndUpdate(
    _id,
    {
      $inc: { count: 1 },
      $push: {
        log: {
          description,
          duration: parseInt(duration),
          date,
        },
      },
    },
    { new: true, useFindAndModify: false }
  );
  return {
    username: user.username,
    description: description,
    duration: parseInt(duration),
    date: date,
    _id,
  };
};

module.exports = {
  getAllUsers,
  getFullUser,
  getFilteredUser,
  insertUser,
  postExercise,
};
