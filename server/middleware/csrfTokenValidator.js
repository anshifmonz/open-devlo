function csrfTokenValidator(req, res, next) {
  const csrfTokenFromCookie = req.cookies['X-CSRF-TOKEN'];
  const csrfTokenFromSession = req.session?.csrfToken?.token;
  const expireTime = req.session?.csrfToken?.expire;
  const currentTime = Date.now();

  if (
      (csrfTokenFromCookie && csrfTokenFromSession) && 
      (csrfTokenFromCookie === csrfTokenFromSession) && 
      (currentTime < expireTime)
    ) {
    delete req.session.csrfToken;
    res.clearCookie('X-CSRF-TOKEN');
    return next();
  }
  res.status(403).json({ message: 'Invalid CSRF token' });
}

export default csrfTokenValidator;
