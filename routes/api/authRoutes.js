var express = require("express");
var router = express.Router();
var passport = require("../../config/authenticate");




router.get(
	"/googlesign",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/redirect",
	passport.authenticate("google", { failureRedirect: "/" ,session: true,successRedirect: '/feed'}),
	
);


router.get("/check",function(req,res){
	console.log(req.user)
})
module.exports = router;