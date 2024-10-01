import { db } from '../config/dbConfig.js';

async function resetTokenStore(userId, hashUserId, token, expireTime) {
  try {
    await db.query(
      `INSERT INTO reset_passwords (user_id, hash_user_id, token, expire) VALUES ($1, $2, $3, $4)`,
      [userId, hashUserId, token, expireTime]
    );
  } catch (err) {
    throw new Error('Server error');
  }
}

async function getMatchedRow(hashUserId) {
  try {
    const res = await db.query(
      `SELECT user_id, token, expire FROM reset_passwords
      WHERE hash_user_id = $1`,
      [hashUserId]
    )
    return res.rows[0] || false;
  } catch (err) {
    throw new Error('Server error');
  }
}

async function deleteResetToken(userId) {
  try {
    await db.query(
      `DELETE FROM reset_passwords WHERE hash_user_id = $1`,
      [userId]
    );
  } catch (err) {
    throw new Error('Server error');
  }
}

async function resetPasswd(userId, passwd, hashUserId) {
  try {
    await db.query(
      `UPDATE users
      SET password = $1
      WHERE id = $2`,
      [passwd, userId]
    );
  } catch (err) {
    throw new Error('Server error');
  }
}

export { resetTokenStore, getMatchedRow, deleteResetToken, resetPasswd };
