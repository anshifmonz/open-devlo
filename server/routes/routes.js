import express from 'express';
import authRoutes from './authRoutes.js';
import securityRoutes from './securityRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/sec', securityRoutes);

export default router;
