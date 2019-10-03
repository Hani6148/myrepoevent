const router = require("express").Router();
const usersController = require("../../controllers/usersController");




router.route("/all").get(usersController.findAll)



router.route("/user/:id").get(usersController.findById)


  module.exports = router;