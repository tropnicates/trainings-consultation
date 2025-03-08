import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import GoogleUser from "../models/googleUser.js"; 

dotenv.config();

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/auth/google/callback",
      },
      async ( profile, done) => {
        try {
          console.log("Google Profile:", profile); 
  
          let user = await googleUser.findOne({ googleId: profile.id });
  
          if (!user) {
            user = new googleUser({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            });
            await user.save();
          }
  
          return done(null, user);
        } catch (error) {
          console.error("Google Authentication Error:", error);
          return done(error, null);
        }
      }
    )
  );
  

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await GoogleUser.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
