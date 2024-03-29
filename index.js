const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/v1/routes/usersRoutes");
const bodyParser = require("body-parser");
const { dbConnect } = require("./src/config/mongoose");
const UserSchema = require("./src/models/UserSchema");
require("dotenv").config();

require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//Routes
app.use("/api/users", router);

dbConnect();
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
