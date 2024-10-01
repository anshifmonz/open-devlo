import { comparer } from "../utils/hashingUtils.js";
import { getUserByEmail } from "../services/userService.js";

async function authenticateUser(email, password, cb) {
  
  try {
    const user = await getUserByEmail(email, 'data');
    if (!user) return cb(null, false, { message: 'Email or password is incorrect'});

    const hashPassword = user.password;
    const isCorrectPassword =  await comparer(password, hashPassword)
    if (!isCorrectPassword) return cb(null, false, { message: 'Email or password is incorrect' });
    
    return cb(null, user);
  } catch (err) {
    return cb(null, false, { message: err.message || 'Server side error' });
  }
}

export default authenticateUser;
