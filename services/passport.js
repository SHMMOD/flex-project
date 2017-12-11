const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // null = err
  // user.id is the unique id created by mongoDB
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});


//creates new instance of GoogleStrategy
//passport.use lets passport know there is a new strategy and to use it
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
        if (existingUser) {
          // record exists
          done(null, existingUser);
        } else {
          // create record
          new User ({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
    });
}));
