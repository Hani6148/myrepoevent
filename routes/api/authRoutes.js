var express = require("express");
var router = express.Router();
var passport = require("../../config/authenticate");




router.get(
	"/googlesign",
	passport.authenticate("google", { scope: ["profile", "email"] })
,function(req,res){
    console.log(req.user)
});

router.get(
	"/auth/google/redirect",
	passport.authenticate("google", { failureRedirect: "/", successRedirect: '/signup' })

);

module.exports = router;