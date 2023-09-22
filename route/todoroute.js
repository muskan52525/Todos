const router = require("express").Router()
const {getTodo, saveTodo, updateTodo, deleteTodo} = require("../controllers/todo.controller");


router.get("/", getTodo);
router.post("/saveTodo", saveTodo);
router.post("/updateTodo", updateTodo);
router.post("/deleteTodo", deleteTodo);

module.exports = router;