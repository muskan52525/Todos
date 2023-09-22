const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(3000, () => console.log("running on 3000...."));
const dotenv = require("dotenv");
dotenv.config();

const auth = require("./route/todoroute")
const cors = require("cors");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected succesfully"))
  .catch((err) => console.log(err));
app.use(express.json(), cors());
app.use("/", auth);
