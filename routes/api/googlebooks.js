const router = require("express").Router();
const googleController = require("../../controllers/googlebookController");

// Matches with "/api/books"
router.route("/")
  .get(googleController.findAll)
 

module.exports = router;
