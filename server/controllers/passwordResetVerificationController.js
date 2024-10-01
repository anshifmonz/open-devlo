import { resetPasswd, getMatchedRow, deleteResetToken } from "../services/resetPasswordService.js";
import { hasher, comparer } from "../utils/hashingUtils.js";

async function passwordResetVerificationController(req, res) {
  const { token, userId: hashUserId } = req.query;
  const { password, confirmPassword } = req.body;

  if (password != confirmPassword) return res.status(400).json({ success: false, message: 'Please ensure both passwords are the same.' });

  const matchedRow = await getMatchedRow(decodeURIComponent(hashUserId));
  if (matchedRow === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  if (!matchedRow) return res.status(400).json({ success: false, message: 'Invalid request Row' });
  
  const { user_id: userId, token: storedToken, expire: expireTime } = matchedRow;

  if (expireTime < Date.now()) return res.status(400).json({ success: false, message: 'Invalid request time' });

  const isMatch = await comparer(token, storedToken);
  if (isMatch === 'error') return res.status(500).json({ success: false, message: 'Server error' });
  if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid request isMa' });

  const hashPasswd = await hasher(password);
  if (hashPasswd === 'error') return res.status(500).json({ success: false, message: 'Server error' });

  const delToken = deleteResetToken(hashUserId);
  if (delToken === 'error') return res.status(500).json({ success: false, message: 'Server error' });

  const resp = await resetPasswd(userId, hashPasswd, decodeURIComponent(hashUserId));
  if (resp === 'error') return res.status(500).json({ success: false, message: 'Server error' });

  res.status(200).json({ success: true })
}

export default passwordResetVerificationController;
