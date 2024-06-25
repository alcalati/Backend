import Router from 'express';
import * as clothesController from './clothes.controller.js';

const router = Router();

router.get('/all', clothesController.getAll);
router.put('/:id', clothesController.updateById);
router.get('/filter', clothesController.getByFilter);

export default router;
