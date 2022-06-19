import { Request, Response } from "express";

import { ListUsersUseCase } from "./list-users-use-case";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersUseCase = new ListUsersUseCase();
    const result = await listUsersUseCase.execute();

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
