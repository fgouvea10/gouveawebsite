import { Request, Response } from "express";

import { DeleteUserUseCase } from "./delete-user-use-case";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserUseCase = new DeleteUserUseCase();
    await deleteUserUseCase.execute({ id });

    return response.status(200).json({
      success: true,
    });
  }
}
