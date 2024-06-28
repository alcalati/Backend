import Router from 'express';
import authRouter from './auth/auth.router.js';
import clothesRouter from './clothes/clothes.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/clothes', clothesRouter);

export default router;
