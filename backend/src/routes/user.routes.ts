import { Router } from 'express';
import { AuthenticateUserController } from '../modules/account/authenticate-user/authenticate-user-controller';
import { CreateUserController } from '../modules/users/use-cases/create-user/create-user-controller';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/session', authenticateUserController.handle);
