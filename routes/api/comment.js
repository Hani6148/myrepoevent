const router = require("express").Router();
const commentController = require("../../controllers/commentsController");




router.route("/create")
  .post(commentController.create)

  router.route("/all")
  .get(commentController.findAll)

  module.exports = router;