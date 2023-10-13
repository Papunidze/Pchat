const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const AppError = require("../utils/appError");
const User = require("../models/userModels");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        let user = await User.findOne({ email: profile._json.email });

        if (!user) {
          user = await User.create({
            email: profile._json.email,
            name: profile._json.name,
            avatar: profile._json.picture,
            username: profile._json.email,
          });

          if (!user) {
            console.log(
              `Can't create user with email : ${profile._json.email}`
            );
          }
        }

        return cb(null, user);
      } catch (err) {
        console.log("err");
        return cb(err);
      }
    }
  )
);

module.exports = passport;
