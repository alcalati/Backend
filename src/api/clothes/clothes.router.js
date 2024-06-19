import Router from 'express';
import * as clothesController from './clothes.controller.js';

const router = Router();

router.get('/byPriceRange', clothesController.getByPriceRange);

export default router;