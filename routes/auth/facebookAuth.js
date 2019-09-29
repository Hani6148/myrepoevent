var express = require("express");
var router = express.Router();
var passport = require("../../config/authenticate");




router.get(
	"/",
	passport.authenticate("facebook", { scope: "email" })
);

router.get(
	"/redirect",
	passport.authenticate("facebook", { failureRedirect: "/" ,session: true,successRedirect: 'http://localhost:3000/feed'}),
	
);


router.get("/check",function(req,res){
  if(req.user){
	  
   res.json(req.user)
  }
  else{
	res.json({mouniam:"mahboul"})
  }
})
module.exports = router;