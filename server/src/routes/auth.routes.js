import express from 'express';
import { getMe, login, logout, profileSetup, register } from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/profileSetup', authMiddleware, profileSetup)
authRouter.get('/me', authMiddleware, getMe)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

export default authRouter