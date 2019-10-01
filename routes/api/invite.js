const router = require("express").Router();
const inviteController = require("../../controllers/inviteController.js");




router.route("/")
  .post(inviteController.create)


  module.exports = router;