function csrfTokenValidator(req, res, next) {
  const csrfTokenFromCookie = req.cookies['X-CSRF-TOKEN'];
  
  if (csrfTokenFromCookie && csrfTokenFromCookie === req.session.csrfToken) {
    delete req.session.csrfToken;
    res.clearCookie('X-CSRF-TOKEN');
    return next();
  }
  res.status(403).json({ message: 'Invalid CSRF token' });
}

export default csrfTokenValidator;
