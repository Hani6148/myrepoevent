const router = require("express").Router();
const inviteController = require("../../controllers/inviteController.js");




router.route("/")
  .post(inviteController.create)

  router.route("/:rid")
  .get(inviteController.findByrId)

  module.exports = router;