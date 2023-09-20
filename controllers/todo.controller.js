const todoSchema = require("../model/todo.schema")

module.exports.getTodo = async (req, res) => {
    const toDo = await Todomodels.find();
    res.send(toDo);
  };  