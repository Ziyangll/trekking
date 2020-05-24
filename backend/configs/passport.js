let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let model = require('../server/models/User');
let config = require('./db');
let passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();
const clientid = process.env.CLIENTID;
const clientsec = process.env.CLIENTSECRET;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  model.User.findById(profile, function (err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: clientid,
  clientSecret: clientsec,
  callbackURL: "http://localhost:3000/google/callback"
},
  function (accessToken, refreshToken, profile, email, done) {
    model.User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, user);
    })
  }
));

function setPassortConfigs(passport) {
  let opts = {};

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    model.User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};

module.exports = setPassortConfigs;