import Router from 'express';
import authRouter from './auth/auth.router.js';
import clothesRouter from './clothes/clothes.router.js';
import buyRouter from './buy/buy.router.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/clothes', clothesRouter);
router.use('/buy', buyRouter);

export default router;
