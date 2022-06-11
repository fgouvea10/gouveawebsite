import { Router } from 'express';
import { CreateUserController } from '../modules/users/use-cases/create-user/create-user-controller';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/create', createUserController.handle);
