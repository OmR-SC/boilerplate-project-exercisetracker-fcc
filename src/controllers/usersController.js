const {
  insertUser,
  getAllUsers,
  postExercise,
  getFullUser,
  getFilteredUser,
} = require("../service/UserService");

const getUsers = async (req, res) => {
  try {
    const response = await getAllUsers();

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ error: error.message || error });
  }
};

const getUserLog = async (req, res) => {
  try {
    const { _id } = req.params;
    const { from, to, limit, vscodeBrowserReqId } = req.query;

    if (
      (Object.keys(req.query).length == 1 && vscodeBrowserReqId) ||
      (Object.keys(req.query).length == 0 && !vscodeBrowserReqId)
    ) {
      const response = await getFullUser(_id);
      res.json(response);
    } else {
      const response = await getFilteredUser(_id, from, to, limit);
      res.json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ error: error.message || error });
  }
};

let postUserExercise = async (req, res) => {
  try {
    const { _id } = req.params;

    const { description, duration, date } = req.body;
    const response = await postExercise(_id, description, duration, date);

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ error: error.message || error });
  }
};

let postUsers = async (req, res) => {
  try {
    let { username } = req.body;

    const response = await insertUser(username);
    res.json({ _id: response._id, username: response.username });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ error: error.message || error });
  }
};

module.exports = { getUsers, getUserLog, postUsers, postUserExercise };
