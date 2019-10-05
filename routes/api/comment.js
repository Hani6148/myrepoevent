const router = require("express").Router();
const commentController = require("../../controllers/commentsController");




router.route("/create")
  .post(commentController.create)

  router.route("/getbyid/:id")
  .get(commentController.findById)

  module.exports = router;