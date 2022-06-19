import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/account/authenticate-user/authenticate-user-controller";
import { CreateUserController } from "../../../../modules/users/use-cases/create-user/create-user-controller";
import { DeleteUserController } from "../../../../modules/users/use-cases/delete-user/delete-user-controller";
import { ListUsersController } from "../../../../modules/users/use-cases/list-users/list-users-controller";

import { ensureAuthenticated } from "../middlewares/ensure-authenticated";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();

userRoutes.post("/create", createUserController.handle);
userRoutes.post("/session", authenticateUserController.handle);
userRoutes.get("", ensureAuthenticated, listUsersController.handle);
userRoutes.get("/:id", ensureAuthenticated, deleteUserController.handle);
