import { Router } from 'express';

import { CreateWorkController } from '../../../../modules/works/use-cases/create-work/create-work-controller';
import { DeleteWorkController } from '../../../../modules/works/use-cases/delete-work/delete-work-controller';
import { ListWorksController } from '../../../../modules/works/use-cases/list-works/list-works-controller';
import { UpdateWorkController } from '../../../../modules/works/use-cases/update-work/update-work-controller';
import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

export const workRoutes = Router();

const createWorkController = new CreateWorkController();
const listWorksController = new ListWorksController();
const deleteWorkController = new DeleteWorkController();
const updateWorkController = new UpdateWorkController();

workRoutes.get('', listWorksController.handle);
workRoutes.post('/create', ensureAuthenticated, createWorkController.handle);
workRoutes.delete('/:id', ensureAuthenticated, deleteWorkController.handle);
workRoutes.put('/:id', ensureAuthenticated, updateWorkController.handle);
