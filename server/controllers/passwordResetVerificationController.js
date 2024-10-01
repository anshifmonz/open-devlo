import { resetPasswd, getMatchedRow, deleteResetToken } from "../services/resetPasswordService.js";
import { hasher, comparer } from "../utils/hashingUtils.js";

async function passwordResetVerificationController(req, res) {
  const { token, userId: hashUserId } = req.query;
  const { password, confirmPassword } = req.body;

  try {
    if (password != confirmPassword) return res.status(400).json({ success: false, message: 'Please ensure both passwords are the same.' });
  
    const matchedRow = await getMatchedRow(decodeURIComponent(hashUserId));
    if (!matchedRow) return res.status(400).json({ success: false, message: 'Invalid request Row' });  
    
    const { user_id: userId, token: storedToken, expire: expireTime } = matchedRow;
    if (expireTime < Date.now()) return res.status(400).json({ success: false, message: 'Invalid request time' });
  
    const isMatch = await comparer(token, storedToken);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid request isMa' });
  
    await deleteResetToken(hashUserId);
    
    const hashPasswd = await hasher(password);
    await resetPasswd(userId, hashPasswd, decodeURIComponent(hashUserId));
    
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
}

export default passwordResetVerificationController;
