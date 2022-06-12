import { Router } from 'express';

import { CreateWorkController } from '../modules/works/use-cases/create-work/create-work-controller';
import { ListWorksController } from '../modules/works/use-cases/list-works/list-works-controller';

export const workRoutes = Router();

const createWorkController = new CreateWorkController();
const listWorksController = new ListWorksController();

workRoutes.post('/create', createWorkController.handle);
workRoutes.get('', listWorksController.handle);
