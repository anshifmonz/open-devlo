import { passwordComparer } from "../utils/passwordHandler.js";
import { getUserByEmail } from "../services/userService.js";

async function authenticateUser(email, password, cb) {
  
  try {
    const user = await getUserByEmail(email, 'data');
    if (!user) {
      console.log('User does not exist')
      return cb(null, false, { message: 'Email or password is incorrect'});
    }

    const hashPassword = user.password;

    const isCorrectPassword =  await passwordComparer(password, hashPassword)
    if (isCorrectPassword === 'error') return cb(null, false, {message: 'Server side error' });
    if (!isCorrectPassword) return cb(null, false, { message: 'Email or password is incorrect' });
    return cb(null, user);

  } catch (err) {
    console.log('When loggingIn', err)
    return cb(null, false, { message: 'Server side error' });
  }
}

export default authenticateUser;
