import { Router } from 'express';

import { CreatePostController } from '../../../../modules/posts/use-cases/create-post/create-post-controller';
import { DeletePostController } from '../../../../modules/posts/use-cases/delete-post/delete-post-controller';
import { ListPostsController } from '../../../../modules/posts/use-cases/list-posts/list-posts-controller';
import { UpdatePostController } from '../../../../modules/posts/use-cases/update-post/update-post-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

export const postRoutes = Router();

const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();
const deletePostController = new DeletePostController();
const updatePostController = new UpdatePostController();

postRoutes.post('/create', ensureAuthenticated, createPostController.handle);
postRoutes.get('', ensureAuthenticated, listPostsController.handle);
postRoutes.delete('/:id', ensureAuthenticated, deletePostController.handle);
postRoutes.put('/:id', ensureAuthenticated, updatePostController.handle);
