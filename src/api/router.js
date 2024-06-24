import Router from 'express';
import authRouter from './auth/auth.router.js';
import clothesRouter from './clothes/clothes.router.js';
import cartRouter from './cart/cart.router.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/clothes', clothesRouter);
router.use('/cart', cartRouter);

export default router;
