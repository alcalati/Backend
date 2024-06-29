import Router from 'express';
import * as stockController from './stock.controller.js';
import roleMiddleware from '../../middlewares/role.middleware.js';

const router = Router();

router.post(
  '/add',
  (req, res, next) => roleMiddleware(req, res, next, ['admin',]),
  stockController.addStock
);

export default router;
