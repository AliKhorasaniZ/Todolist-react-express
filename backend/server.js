// package inclusions

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// initiating express

const app = express();
const port = process.env.PORT || 5000;

// middlewares --------------------------------------

app.use(cors());
app.use(express.json());

// Routes

const get_requests = require("./routes/get.route");
app.use("/", get_requests);

const post_requests = require("./routes/post.route");
app.use("/", post_requests);

const put_requests = require("./routes/put.route");
app.use("/", put_requests);

// mango db connection -----------------------------

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  //useCreateIndex: true,
});
mongoose.connection.once("open", () =>
  console.log("MongoDb connection successfull")
);

// initiating server

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
