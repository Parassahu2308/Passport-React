var GoogleStrategy = require("passport-google-oauth20").Strategy;
var GitHubStrategy = require("passport-github2").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

//Google keys
const { GOOGLE_CLIENT_ID } = require("./Keys/keys");
const { GOOGLE_CLIENT_SECRET } = require("./Keys/keys");

//Github keys
const { GITHUB_CLIENT_ID } = require("./Keys/keys");
const { GITHUB_CLIENT_SECRET } = require("./Keys/keys");

//Facebook keys
const { FACEBOOK_APP_ID } = require("./Keys/keys");
const { FACEBOOK_APP_SECRET } = require("./Keys/keys");

// console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
// console.log(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET);
// console.log(FACEBOOK_APP_ID, FACEBOOK_APP_SECRET);

//Google Auth
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   if mongodb database use
      //   const user={
      //     username:profile.displayName,
      //     avator:profile.photos[0]
      //   }
      //   user.save();
    }
  )
);

//Github Auth
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

//Facebook auth
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
