import express from 'express';

import { checkNotAuthenticated, checkAuthenticated } from '../middleware/authCheckMiddleware.js';
import emailValidationMiddleware from '../middleware/emailValidationMiddleware.js';
import csrfTokenValidator from '../middleware/csrfTokenValidator.js';

import registerUser from '../controllers/registerController.js';
import logInUser from '../controllers/logInController.js';
import LogOutUser from '../controllers/logOutController.js';

import passwordResetController from '../controllers/passwordResetTokenController.js';
import passwordResetVerificationController from '../controllers/passwordResetVerificationController.js';

const router = express.Router();

router.post('/signUp', checkNotAuthenticated, emailValidationMiddleware, registerUser);
router.post('/logIn', checkNotAuthenticated, emailValidationMiddleware, logInUser);
router.post('/logOut', checkAuthenticated, csrfTokenValidator, LogOutUser)

router.get('/resetPassword', checkNotAuthenticated, passwordResetController);
router.post('/verifyResetPassword', checkNotAuthenticated, passwordResetVerificationController);

export default router;
