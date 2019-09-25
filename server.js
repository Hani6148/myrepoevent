const express = require("express");
const cors = require('cors');


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var passport = require("./config/authenticate");
var cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;
var session = require("express-session");
// Define middleware here
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: "cat", resave: true, saveUninitialized: true }));


// Serve up static assets (usually on heroku)


  app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eventBook");



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
