const router = require("express").Router();
const bookRoutes = require("./books");
const googleBookRoutes = require("./googlebooks");
const authRoutes = require("./authRoutes")
// Book routes
router.use("/books", bookRoutes);
// Book routes
router.use("/googlebooks", googleBookRoutes);

router.use("/sign",authRoutes)

module.exports = router;
