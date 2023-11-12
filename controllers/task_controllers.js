import Task from "../models/task_model.js";

export const newTask = async (req, res) => {
  const { title, description } = req.body;
  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(200).json({
    success: true,
    message: `task addded successfully ,${req.user.name}`,
  });
};

export const getMytask = async (req, res) => {
  const user = req.user._id; //user information from the cookie

  const task = await Task.find({ user: user }); // when the particular user id matches then those tasks will fetched

  res.status(400).json({
    success: true,
    task,
  });
};

export const deletetask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "invalid id!,check it once",
    });
  }

  await task.deleteOne();

  res.status(400).json({
    success: true,
    message: "successfully task deleted",
  });
};

export const updatetask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "invalid id!,check it once",
    });
  }

  task.isCompleted = !task.isCompleted;

  await task.save();

  res.status(400).json({
    success: true,
    message: "successfully updated!",
  });
};
