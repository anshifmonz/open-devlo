import passport from "passport";

function logInHandler(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ success: false, message: 'Server error' });
    if (!user) return res.status(401).json({ success: false, message: info.message || 'Authentication failed' });

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ success: false, message: 'Login error' });
      res.status(200).json({ success: true });
    });
  })(req, res, next);
}

export default logInHandler;
