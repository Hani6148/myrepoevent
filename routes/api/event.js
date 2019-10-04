const router = require("express").Router();
const eventController = require("../../controllers/eventController.js");




router.route("/create")
  .post(eventController.create)

  router.route("/public/all")
  .get(eventController.findAll)

  module.exports = router;