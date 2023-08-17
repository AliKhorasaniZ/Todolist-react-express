const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 10,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    tasks: {
      type: Array,
      required: false,

      name: {
        type: String,
        required: true,
      },
      id: {
        type: Date,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const user_collection = mongoose.model("user", userSchema);
module.exports = user_collection;
