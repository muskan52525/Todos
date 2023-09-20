const express = require("express");
const app = express();
app.listen(3000, () => console.log("running on 3000...."));
const dotenv = require("dotenv");
dotenv.config();
const todoSchema = require("./model/todo.schema");
const cors = require("cors");
app.use(express.json(), cors());


