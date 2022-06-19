import { Router } from 'express';

import { userRoutes } from './user.routes';
import { workRoutes } from './work.routes';
import { postRoutes } from './posts.routes';

export const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/works', workRoutes);
appRoutes.use('/posts', postRoutes);
