import Router from 'express';
import clothesRouter from './clothes/clothes.router.js';

const router = Router();

router.use('/clothes', clothesRouter);

export default router;
