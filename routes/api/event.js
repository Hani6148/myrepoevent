const router = require("express").Router();
const eventController = require("../../controllers/eventController.js");




router.route("/create")
  .post(eventController.create)

  router.route("/public/all")
  .get(eventController.findAll)
  router.route("/public/:id")
  .get(eventController.findById)

  module.exports = router;