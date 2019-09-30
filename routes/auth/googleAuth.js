var express = require("express");
var router = express.Router();
var passport = require("../../config/authenticate");




router.get(
	"/",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/redirect",
	passport.authenticate("google", { failureRedirect: "/" ,session: true,successRedirect: '/main'}),
);
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get("/check",function(req,res){
  if(req.user){
   res.json(req.user)
  }
  else{
	res.json({mouniam:"mahboul"})
  }
})
module.exports = router;