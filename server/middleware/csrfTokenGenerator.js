import cryptoTokenGenerator from "../utils/cryptoTokenGenerator.js";

function csrfTokenGenerator(req, res, next) {
  try {
    const currentTime = Date.now();
    const neededExpireTimeLeft = 1000 * 60; // 1 minute

    // if the token not close to expiring then sending the same token back
    if (req.session.csrfToken) {
      const timeLeft = req.session.csrfToken.expire - currentTime
      
      if (timeLeft > neededExpireTimeLeft) {
        res.cookie('X-CSRF-TOKEN', req.session.csrfToken.token);
        return next();
      }
    }
    
    // If the token doesn't exist or close to expiring
    delete req.session.csrfToken;
    res.clearCookie('X-CSRF-TOKEN');

    const csrfToken = cryptoTokenGenerator(32);
    const expireTime = Date.now() + 1000 * 60 * 5; // 5 minute

    req.session.csrfToken = { token: csrfToken, expire: expireTime };
    res.cookie('X-CSRF-TOKEN', csrfToken);

    next();
    
  } catch (err) {
    req.logger.error(err.message, err)
    res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
}

export default csrfTokenGenerator;
