import { db } from "../config/dbConfig.js";

async function createUser(name, email, password) {
  try {
    const result = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    return result.rows[0]
  } catch (err) {
    throw new Error('Server error');    
  }
}

async function getUserByEmail(email, need) {
  try {
    const res = await db.query("SELECT * FROM users WHERE email = $1", [email])
    if (need === 'data') return res.rows[0] || false
    if (need === 'exist') {
      return res.rows.length > 0
    }

  } catch (err) {
    throw new Error('Server error')
  }
}

async function getUserById(id, need) {
  try {
    const res = await db.query("SELECT * FROM users WHERE id = $1", [id])
    if (need === 'data') return res.rows[0] || false;
    if (need === 'exist') {
      return res.rows.length > 0
    }
  } catch (err) {
    throw new Error('Server error');
  }
}

export { createUser, getUserByEmail, getUserById };
