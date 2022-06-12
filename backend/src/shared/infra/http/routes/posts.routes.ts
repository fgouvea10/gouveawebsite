import { Router } from 'express';

import { CreatePostController } from '../../../../modules/posts/use-cases/create-post/create-post-controller';
import { DeletePostController } from '../../../../modules/posts/use-cases/delete-post/delete-post-controller';
import { FindPostController } from '../../../../modules/posts/use-cases/find-one/find-post-controller';
import { ListPostsController } from '../../../../modules/posts/use-cases/list-posts/list-posts-controller';
import { UpdatePostController } from '../../../../modules/posts/use-cases/update-post/update-post-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

export const postRoutes = Router();

const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();
const deletePostController = new DeletePostController();
const updatePostController = new UpdatePostController();
const findPostController = new FindPostController();

postRoutes.get('', listPostsController.handle);
postRoutes.get('/:id', findPostController.handle);
postRoutes.post('/create', ensureAuthenticated, createPostController.handle);
postRoutes.delete('/:id', ensureAuthenticated, deletePostController.handle);
postRoutes.put('/:id', ensureAuthenticated, updatePostController.handle);
