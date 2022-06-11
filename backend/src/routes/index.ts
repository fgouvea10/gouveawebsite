import { Router } from 'express';
import { userRoutes } from './user.routes';

export const appRoutes = Router();

appRoutes.use('/user', userRoutes);
