const router = require("express").Router();

const usersRoutes = require("./users");
const eventRoutes = require("./event");
const inviteRoutes = require("./invite");
const timelineRoutes = require("./timeline")
const commentRoures = require("./comment")



router.use("/users", usersRoutes);
router.use("/event", eventRoutes);
router.use("/invite", inviteRoutes);
router.use("/timeline", timelineRoutes);
router.use("/comment", commentRoures);


module.exports = router;
