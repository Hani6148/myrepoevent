const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
   
        done(null, user);
    
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "https://projectevent6148.herokuapp.com/api/sign/auth/google/"
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        
        var userData = {
            profile: profile,
        
            token: accessToken
        };
        done(null, userData);
    })
);

module.exports=passport