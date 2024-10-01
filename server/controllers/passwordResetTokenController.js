import { getUserByEmail } from '../services/userService.js'
import cryptoTokenGenerator from "../utils/cryptoTokenGenerator.js";
import { hasher } from "../utils/hashingUtils.js";
import { resetTokenStore } from "../services/resetPasswordService.js";
import emailSender from '../utils/emailSender.js';

async function passwordResetController(req, res) {
  const { email } = req.query;
  const tokenExpireTime = Date.now() + 1000 * 60 * 10

  const user = await getUserByEmail(email, 'data');
  
  if (user === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  if (!user) return res.status(200).json({ success: true, message: "If an account with that email exists, we've sent password reset instructions to the provided email address." });
  
  const userId = user.id;

  const passwdResetToken = cryptoTokenGenerator(32);
  if (passwdResetToken === 'error') return res.status(500).json({ success: false, message: 'Server error' });

  const hashUserId = await hasher(userId.toString());
  if (hashUserId === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  
  const hashToken = await hasher(passwdResetToken);
  if (hashToken === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  
  const storeInDatabase = await resetTokenStore(userId, hashUserId, hashToken, tokenExpireTime);
  if (storeInDatabase === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  
  const urlQuery = `?userId=${encodeURIComponent(hashUserId)}&token=${encodeURIComponent(passwdResetToken)}`;
  
  const sendEmail = await emailSender(email, urlQuery, 'hi');
  if (sendEmail === 'error') return res.status(500).json({ success: false, message: 'Server error' });

  res.status(200).json({ success: true, message: "If an account with that email exists, we've sent password reset instructions to the provided email address." });
}

export default passwordResetController;
