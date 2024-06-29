import Router from 'express';
import * as usersController from './users.controller.js';
import roleMiddleware from '../../middlewares/role.middleware.js';

const router = Router();

router.patch(
  '/addCash',
  (req, res, next) => roleMiddleware(req, res, next, ['admin','client',]),

  usersController.addCash
);

export default router;
