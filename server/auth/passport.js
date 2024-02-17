const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models");
require("dotenv").config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/api/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, cb) {
            await console.log(profile);
            await User.findOrCreate({
                where: { id: profile.id },
                defaults: {
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.email,
                },
            });
            return cb(null, profile);
        }
    )
);
