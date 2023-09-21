const { default: mongoose, Schema } = require("mongoose");

const router = require("express").Router();
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

module.exports = mongoose.model("TODO", todoSchema);
