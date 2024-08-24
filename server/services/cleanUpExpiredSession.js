import { db } from "../config/dbConfig.js";

async function cleanUpExpiredSession() {
  try {
    await db.query("DELETE FROM session WHERE expire < NOW()");
    console.log('Expired session cleaned up');
  } catch (err) {
    console.log('Error cleaning up expired sessions:', err);
  }
}

export default cleanUpExpiredSession
