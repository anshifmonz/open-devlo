import crypto from 'crypto-js';

function csrfTokenGenerator(req, res, next) {
    if (!req.session.csrfToken) {
      req.session.csrfToken = crypto.lib.WordArray.random(32).toString();
    }
    res.cookie('X-CSRF-TOKEN', req.session.csrfToken);
    next();
}

export default csrfTokenGenerator;
