const router = require("express").Router();
const usersController = require("../../controllers/usersController");




router.route("/all")
  .get(usersController.findAll)

  router.route("/events/:id")
  .get(usersController.findById)


  router.route("/addevent")
  .post(usersController.addEvent)


  module.exports = router;