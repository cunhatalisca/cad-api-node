const taskModel = require("../models/taskModel");

const getAll = async (req, res) => {
  const task = await taksmodel.getAll();
  return res.status(200).json(task);
};

module.exports = {
  getAll,
};
