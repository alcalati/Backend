import Router from 'express';
import * as clothesController from './clothes.controller.js';

const router = Router();

router.get('/all', clothesController.getAll);
router.put('/:id', clothesController.updateById);
router.get('/filter', clothesController.getByFilter);
router.get('/byPriceRange', clothesController.getByPriceRange);
router.delete('/id/:id', clothesController.remove);

export default router;
