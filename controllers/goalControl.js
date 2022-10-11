const asunchandeler = require("express-async-handler");
const goalModel = require("../models/goalModel");

//@desc set goals
//@route Post /api/goals
//@access private
const setGoal = asunchandeler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400);
    throw new Error("please provide the goal");
  }
  console.log(req.body);
  const goal = await goalModel.create({
    Text: req.body,
  });
  res.status(200).json(goal);
});

//@desc get goals
//@route Get /api/goals
//@access private
const getGoals = asunchandeler(async (req, res) => {
  const allGoals = await goalModel.find();
  res.status(200).json({
    status: true,
    text: "all good",
    allGoals,
  });
});

//@desc get a goal
//@route Get /api/goals
//@access private
const getSingleGoal = asunchandeler(async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  const single = await goalModel.findById(req.params.id);
  if (!single) {
    return res.status(400).json({
      msg: "data not found",
    });
  }
  res.status(200).json(single);
});

//@desc update existing goals
//@route Put /api/goals/:id
//@access private
const updateGoal = asunchandeler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const thatGoal = await goalModel.findById(id);

  if (!thatGoal) {
    return res.status(400).json({
      status: false,
      msg: "please give a parameter id",
    });
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: true,
    msg: updatedGoal,
  });
});

//@desc delete a goal
//@route Delete /api/goals/:id
//@access private
const deleteGoal = asunchandeler(async (req, res) => {
  const id = req.params.id;
  const goaldelete = await goalModel.findByIdAndRemove(id);
  return res.status(200).json({ id: req.params.id });
});

module.exports = { setGoal, getGoals, updateGoal, deleteGoal, getSingleGoal };
