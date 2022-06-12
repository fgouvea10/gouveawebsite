import { Router } from 'express';

import { CreatePostController } from '../../../../modules/posts/use-cases/create-post/create-post-controller';
import { ListPostsController } from '../../../../modules/posts/use-cases/list-posts/list-posts-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

export const postRoutes = Router();

const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();

postRoutes.post('/create', ensureAuthenticated, createPostController.handle);
postRoutes.get('', ensureAuthenticated, listPostsController.handle);
