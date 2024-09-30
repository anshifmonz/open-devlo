import bcrypt from 'bcrypt';
const saltRounds = 10

async function hasher(password) {
  try {
    return await bcrypt.hash(password, saltRounds)
  } catch (err) {
    console.error('Error hashing passwords:', err);
    return 'error';
  }
}

async function comparer(password, hashPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashPassword)
    return isMatch 
  } catch (err) {
    console.error('Error comparing passwords:', err);
    return 'error';
  }
}

export { hasher, comparer};
