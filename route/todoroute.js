const {Router} = require("express")
const {getTodo, saveTodo} = require("../controllers/todo.controller");
const router = Router()

router.get("/", getTodo)

module.exports = router;