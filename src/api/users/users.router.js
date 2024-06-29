import express from 'express';
import * as usersController from './users.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.put('/profile', usersController.updateProfile);

router.delete('/profile', authMiddleware, usersController.deleteProfile);

export default router;
