import Router from 'express';
import * as clothesController from './clothes.controller.js';
import roleMiddleware from '../../middlewares/role.middleware.js';

const router = Router();

router.get('/all', clothesController.getAll);
router.get('/byId/:id', clothesController.getById);
router.put('/:id', clothesController.updateById);
router.get('/filter', clothesController.getByFilter);
router.get('/byPriceRange', clothesController.getByPriceRange);
router.delete('/id/:id', clothesController.remove);

router.post(
  '/',
  (req, res, next) => roleMiddleware(req, res, next, ['admin',]),
  clothesController.create
);

export default router;
