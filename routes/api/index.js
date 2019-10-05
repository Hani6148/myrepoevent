const router = require("express").Router();

const usersRoutes = require("./users");
const eventRoutes = require("./event");
const inviteRoutes = require("./invite");
const timelineRoutes = require("./timeline")



router.use("/users", usersRoutes);
router.use("/event", eventRoutes);
router.use("/invite", inviteRoutes);
router.use("/timeline", timelineRoutes);

module.exports = router;
