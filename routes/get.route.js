const Router = require("express").Router();
require("dotenv").config();

const userAuth = require("../middlewares/userAuth.middleware");
const userCollection = require("../models/user.model");

// -----------------------------------------------

Router.get("/tasks?", userAuth, async (req, res) => {
  const email = req.email;

  try {
    const user = (await userCollection.find({ email }))[0];
    res.status(200).json(user.tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/profileIcon?", userAuth, async (req, res) => {
  const email = req.email;

  try {
    const user = (await userCollection.find({ email }))[0];
    res.status(200).json(user.userName);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/profile?", userAuth, async (req, res) => {
  const email = req.email;

  try {
    const user = (await userCollection.find({ email }))[0];
    const userName = user.userName;
    const createdAt = user.createdAt;
    const tasks = user.tasks;
    const id = user._id;
    res.status(200).json({ userName, email, createdAt, tasks, id });
  } catch (err) {
    res.status(400).json(err);
  }
});

// -----------------------------------------------

module.exports = Router;
