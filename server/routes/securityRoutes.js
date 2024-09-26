import express from "express";

import { checkAuthenticated } from "../middleware/authCheckMiddleware.js";
import csrfTokenGenerator from "../middleware/csrfTokenGenerator.js";

const router = express.Router();

router.get('/csrf-token', checkAuthenticated, csrfTokenGenerator, (req, res) => {
  res.status(200).json({ message: 'CSRF token sent in cookie' });
})

export default router;
