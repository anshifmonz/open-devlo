function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(302).json({message: 'User not logged in'});
}

function checkNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.status(302).json({message: 'User already logged in'});
}

export { checkAuthenticated, checkNotAuthenticated }
