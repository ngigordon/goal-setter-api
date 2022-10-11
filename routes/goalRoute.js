const router = require("express").Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  getSingleGoal,
} = require("../controllers/goalControl");

// router.route("/").get
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal).get(getSingleGoal);

module.exports = router;
