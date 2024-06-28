import Router from 'express';
import * as refundController from './refund.controller.js';

const router = Router();

router.post('/', refundController.refund);

export default router;