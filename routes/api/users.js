const router = require("express").Router();
const usersController = require("../../controllers/usersController");




router.route("/all").get(usersController.findAll)

router.route("/addhost").post(usersController.addhost)


router.route("/user/:id").get(usersController.findById)
router.route("/simple/:id").get(usersController.findByIdNoPop)

  router.route("/events/:id")
  .get(usersController.findById)


  router.route("/addevent")
  .post(usersController.addEvent)

  router.route("/addpublicevent")
  .post(usersController.addPublicEvent)

  module.exports = router;