import Router from 'express';
import * as cartController from './cart.controller.js';

const router = Router();

router.post('/add/:id', cartController.create);

export default router;
