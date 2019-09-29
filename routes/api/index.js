const router = require("express").Router();
const bookRoutes = require("./books");
const googleBookRoutes = require("./googlebooks");

// Book routes
router.use("/books", bookRoutes);
// Book routes
router.use("/googlebooks", googleBookRoutes);



module.exports = router;
