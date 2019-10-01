const router = require("express").Router();

const usersRoutes = require("./users");
const eventRoutes = require("./event");
const inviteRoutes = require("./invite");

router.use("/users", usersRoutes);
router.use("/event", eventRoutes);
router.use("/invite", inviteRoutes);


module.exports = router;
