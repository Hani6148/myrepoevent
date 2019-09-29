const router = require("express").Router();
const googleAuth=require("./googleAuth")
const facebookAuth=require("./facebookAuth")

router.use("/google", googleAuth);
router.use("/facebook", facebookAuth);

module.exports = router;