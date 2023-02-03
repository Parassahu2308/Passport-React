var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

//Google keys
const { GOOGLE_CLIENT_ID } = require("./Keys/keys");
const { GOOGLE_CLIENT_SECRET } = require("./Keys/keys");

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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
