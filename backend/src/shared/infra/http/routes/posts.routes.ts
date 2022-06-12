import { Router } from 'express';

import { CreatePostController } from '../../../../modules/posts/use-cases/create-post/create-post-controller';
import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

export const postRoutes = Router();

const createPostController = new CreatePostController();

postRoutes.post('/create', ensureAuthenticated, createPostController.handle);
