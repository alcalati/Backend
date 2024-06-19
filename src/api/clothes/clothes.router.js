import Router from 'express';
import * as clothesController from './clothes.controller.js';

const router = Router();

router.get('/all', clothesController.getAll);
router.get('/filter', clothesController.getByFilter);
router.delete('/id/:id', clothesController.remove);

export default router;
