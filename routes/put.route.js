const Router = require("express").Router();
require("dotenv").config();

const userAuth = require("../middlewares/userAuth.middleware");
const userCollection = require("../models/user.model");

// -----------------------------------------------

Router.put("/tasks/add", userAuth, async (req, res) => {
  const email = req.email;
  const newTask = req.body.newTask;

  try {
    const result = await userCollection.updateOne(
      { email },
      {
        $push: {
          tasks: {
            $each: [newTask],
            $position: 0,
          },
        },
      }
    );
    res.status(200).json(result.acknowledged);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/tasks/edit", userAuth, async (req, res) => {
  const email = req.email;
  const id = req.body.id;
  const state = req.body.state;

  if (state === "deleted") {
    try {
      const result = await userCollection.updateOne(
        { email },
        { $pull: { tasks: { id } } }
      );

      res.status(200).json(result.acknowledged);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (state === "compleated") {
    try {
      const result = await userCollection.updateOne(
        { email },
        { $set: { "tasks.$[targetTask].state": state } },
        {
          arrayFilters: [{ "targetTask.id": id }],
        }
      );

      res.status(200).json(result.acknowledged);
    } catch (err) {
      res.status(400).json(err);
    }
  }
});

Router.put("/profile/edit", userAuth, async (req, res) => {
  const email = req.email;
  const id = req.body.id;
  const state = req.body.state;

  if (state === "deleted") {
    try {
      const result = await userCollection.updateOne(
        { email },
        { $pull: { tasks: { id } } }
      );

      res.status(200).json(result.acknowledged);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (state === "compleated") {
    try {
      const result = await userCollection.updateOne(
        { email },
        { $set: { "tasks.$[targetTask].state": state } },
        {
          arrayFilters: [{ "targetTask.id": id }],
        }
      );

      res.status(200).json(result.acknowledged);
    } catch (err) {
      res.status(400).json(err);
    }
  }
});

// -----------------------------------------------

module.exports = Router;
