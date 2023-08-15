const Router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userCollection = require("../models/user.model");

// -----------------------------------------------

Router.post("/login", async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = (await userCollection.find({ userName }))[0];

  if (user === undefined) {
    res.status(404).json("User dosent exist");
    return;
  }
  if (user.password !== password) {
    res.status(403).json("Wrong password");
    return;
  }

  const token = jwt.sign(user.email, process.env.ACCESS_TOKEN_SECRET);
  res.status(200).json(token);
});

Router.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;
  //const tasks = req.body.tasks;
  const tasks = [];

  const newUser = new userCollection({
    userName,
    password,
    email,
    tasks,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign(user.email, process.env.ACCESS_TOKEN_SECRET);
    res
      .status(200)
      .json({ message: `${user.userName} added to the database`, token });
  } catch (err) {
    res.status(403).json(`${err}`);
  }
});

// -----------------------------------------------

module.exports = Router;
