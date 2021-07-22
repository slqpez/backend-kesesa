const passport = require("passport");
const User = require("../models/User.js")
const GoogleStrategy = require("passport-google-oauth2").Strategy;



passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback", //TODO Acá, cuando se suba a producción, hay que cambiar la url.
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const currentUser = await User.findOne({
        email: profile.email
      });
      if (!currentUser) {
        const newUser = await new User({
          name: profile.displayName,
          email: profile.email,
          profileImage: profile.picture
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser); 
      
    }
  )
);


passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.find({email})
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});
