import passport from "passport";
import { Strategy } from "passport-local";

import authenticateUser from "../controllers/authController.js";
import { getUserById } from "../services/userService.js";

function initializePassport(passport) {
  passport.use(new Strategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, cb) => cb(null, user.id));
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await getUserById(id, 'data')
      if (user === 'error') return cb(null, false, { message: 'Server side error'})
      if (!user) {
        return cb(null, false);
      }
      return cb(null, user)

    } catch (err) {
      console.log('Error in deserializeUser:', err);
      return cb(null, false, { message: 'Server side error'});
    }
  });
}

function passportConfig(app) {
  initializePassport(passport);
  app.use(passport.initialize());
  app.use(passport.session());
}

export default passportConfig;
