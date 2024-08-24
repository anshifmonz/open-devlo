import { validate } from "email-validator";

function emailValidator(req, res, next) {
  const { email } = req.body;
  if (!email || !validate(email))  return res.status(400).json({ message: 'Invalid email address' });
  next();
}

export default emailValidator;
