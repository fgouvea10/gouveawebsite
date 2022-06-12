import { Router } from 'express';

import { CreateWorkController } from '../modules/works/use-cases/create-work/create-work-controller';
import { DeleteWorkController } from '../modules/works/use-cases/delete-work/delete-work-controller';
import { ListWorksController } from '../modules/works/use-cases/list-works/list-works-controller';
import { UpdateWorkController } from '../modules/works/use-cases/update-work/update-work-controller';

export const workRoutes = Router();

const createWorkController = new CreateWorkController();
const listWorksController = new ListWorksController();
const deleteWorkController = new DeleteWorkController();
const updateWorkController = new UpdateWorkController();

workRoutes.post('/create', createWorkController.handle);
workRoutes.get('', listWorksController.handle);
workRoutes.delete('/:id', deleteWorkController.handle);
workRoutes.put('/:id', updateWorkController.handle);
