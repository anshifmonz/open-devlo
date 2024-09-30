import { hasher } from '../utils/hashingUtils.js';
import { getUserByEmail, createtUser } from '../services/userService.js';

async function registerUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const UserExists  = await getUserByEmail(email, 'exist');
    if (UserExists === 'error') return res.status(500).json({ success: false, message: 'Server error' });
    if (UserExists) {
      console.log('User already exist');
      return res.status(302).json({ success: false, message: 'User already exist' });
    }

    const hashedPassword = await hasher(password)
    if (hashedPassword === 'error') return res.status(500).json({ success: false, message: 'Server error' });
    
    const user = await createtUser(name, email, hashedPassword)
    if (user === 'error') return res.status(500).json({ success: false, message: 'Server error' });

    req.logIn(user, (err) => {
      if (err) {
        console.error('Error logging in user after register:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      console.log('Register success')
      res.status(201).json({ success: true, message: 'User registered'});
    });

    } catch (err) {
      console.error('registerUser error:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
}

export default registerUser;