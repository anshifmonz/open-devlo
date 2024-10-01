import { hasher } from '../utils/hashingUtils.js';
import { getUserByEmail, createUser } from '../services/userService.js';

async function registerUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const UserExists  = await getUserByEmail(email, 'exist');
    if (UserExists) return res.status(302).json({ success: false, message: 'User already exist' });

    const hashedPassword = await hasher(password)    
    const user = await createUser(name, email, hashedPassword)

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ success: false, message: 'Server error' });
      res.status(201).json({ success: true, message: 'User registered'});
    });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
}

export default registerUser;