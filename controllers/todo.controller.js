const todoSchema = require("../model/todo.schema");
module.exports.getTodo = async (req, res) => {
  const getTodo = await todoSchema.find();
  console.log(getTodo);
  res.status(200).json(getTodo);
};
module.exports.saveTodo = async (req, res) => {
  console.log();
  const add = { text: req.body.text };
  const addData = await todoSchema.create(add);
  console.log(addData, "hh");
  res.status(200).json(addData);
};
module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  todoSchema
    .findByIdAndUpdate(_id, { text })
    .then((rrr) => res.send(rrr))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  todoSchema
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted sucessfully"))
    .catch((err) => console.log(err));
};
