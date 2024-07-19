import Router from 'express';
import * as buyController from './buy.controller.js';

const router = Router();

router.post('/', buyController.buy);

export default router;
