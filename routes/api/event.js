const router = require("express").Router();
const eventController = require("../../controllers/eventController.js");




router.route("/create")
  .post(eventController.create)


  module.exports = router;