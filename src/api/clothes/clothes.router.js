import Router from 'express';
import * as clothesController from './clothes.controller.js';

const router = Router();

router.get('/filter', clothesController.getByFilter);

export default router;
