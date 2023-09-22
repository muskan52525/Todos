const { default: mongoose, Schema } = require("mongoose");

const router = require("express").Router();
const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TODO", todoSchema);
