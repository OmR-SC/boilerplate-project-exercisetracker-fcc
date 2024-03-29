const { Router } = require("express");
const {
  getUsers,
  postUsers,
  getUserLog,
} = require("../../controllers/usersController");
const { postUserExercise } = require("../../controllers/usersController");

const router = Router();

router.get("/", getUsers);

router.get("/:_id/logs", getUserLog);

router.post("/:_id/exercises", postUserExercise);

router.post("/", postUsers);

module.exports = router;
