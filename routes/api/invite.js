const router = require("express").Router();
const inviteController = require("../../controllers/inviteController.js");




router.route("/")
  .post(inviteController.create)

  router.route("/:rid")
  .get(inviteController.findByrId)

  router.route("/invitation/:id")
  .get(inviteController.findById)

  router.route("/reject")
  .post(inviteController.reject)

  module.exports = router;