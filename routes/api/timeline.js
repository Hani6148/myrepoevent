const router = require("express").Router();
const timelineController = require("../../controllers/timelineController.js");




router.route("/saveData")
  .post(timelineController.create)

  router.route("/getData/:id")
  .get(timelineController.findAll)

  module.exports = router;