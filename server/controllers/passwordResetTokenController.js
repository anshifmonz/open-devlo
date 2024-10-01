import { getUserByEmail } from '../services/userService.js'
import cryptoTokenGenerator from "../utils/cryptoTokenGenerator.js";
import { hasher } from "../utils/hashingUtils.js";
import { resetTokenStore } from "../services/resetPasswordService.js";
import emailSender from '../utils/emailSender.js';

async function passwordResetController(req, res) {
  const { email } = req.query;
  const tokenExpireTime = Date.now() + 1000 * 60 * 10

  try {
    const user = await getUserByEmail(email, 'data');
    if (!user) return res.status(200).json({ success: true, message: "If an account with that email exists, we've sent password reset instructions to the provided email address." });
    
    const userId = user.id;
    const passwdResetToken = cryptoTokenGenerator(32);
    const hashUserId = await hasher(userId.toString());
    const hashToken = await hasher(passwdResetToken);    
    await resetTokenStore(userId, hashUserId, hashToken, tokenExpireTime);
    const urlQuery = `?userId=${encodeURIComponent(hashUserId)}&token=${encodeURIComponent(passwdResetToken)}`;
    await emailSender(email, urlQuery, 'hi');
    
    res.status(200).json({ success: true, message: "If an account with that email exists, we've sent password reset instructions to the provided email address.", url: urlQuery });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
}

export default passwordResetController;
