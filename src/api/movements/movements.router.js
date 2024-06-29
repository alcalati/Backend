import Router from 'express';
import * as movementsController from './movements.controller.js';
import roleMiddleware from '../../middlewares/role.middleware.js';

const router = Router();

router.get(
  '/getAll',
  (req, res, next) => roleMiddleware(req, res, next, ['admin',]),
  movementsController.getAll
);

export default router;