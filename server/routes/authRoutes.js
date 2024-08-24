import express from 'express';
import registerUser from '../controllers/registerController.js';
import logInUser from '../controllers/logInController.js';
import LogOutUser from '../controllers/logOutController.js';
import { checkNotAuthenticated, checkAuthenticated } from '../middleware/authCheckMiddleware.js';
import emailValidationMiddleware from '../middleware/emailValidationMiddleware.js';

const router = express.Router();

router.post('/signUp', checkNotAuthenticated, emailValidationMiddleware, registerUser);
router.post('/logIn', checkNotAuthenticated, emailValidationMiddleware, logInUser);
router.post('/logOut', checkAuthenticated, LogOutUser)

export default router;
