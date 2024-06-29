import express from 'express';
import * as usersController from './users.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.put('/profile', authMiddleware, usersController.updateProfile);

router.delete('/profile', authMiddleware, usersController.deleteProfile);

export default router;
