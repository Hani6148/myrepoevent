const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const db= require("../models")

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
   
        done(null, user);
    
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        db.User.findOne({email: profile.emails[0].value}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new db.User({
                    email: profile.emails[0].value,
                    username: profile.displayName,

                    
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
        
    })
);

passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "https://projectevent6148.herokuapp.com/auth/facebook/redirect"
  },(accessToken, refreshToken, profile, done) => {
      console.log(profile)
    db.User.findOne({socialId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have this user
            console.log('user is: ', currentUser);
            done(null, currentUser);
        } else {
            // if not, create user in our db
            new db.User({
                socialId: profile.id,
                username: profile.displayName,

                
            }).save().then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
            });
        }
    });
    
})
);
  

module.exports=passport