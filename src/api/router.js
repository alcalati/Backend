import Router from 'express';
import authRouter from './auth/auth.router.js';
import clothesRouter from './clothes/clothes.router.js';
import movementsRouter from './movements/movements.router.js';
import usersRouter from './users/users.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/clothes', clothesRouter);
router.use('/users', usersRouter);
router.use('/movements', movementsRouter);

export default router;
