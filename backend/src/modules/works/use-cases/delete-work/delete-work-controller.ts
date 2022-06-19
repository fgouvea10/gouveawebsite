import { Request, Response } from "express";
import { DeleteWorkUseCase } from "./delete-work-use-case";

export class DeleteWorkController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteWorkUseCase = new DeleteWorkUseCase();
    await deleteWorkUseCase.execute({ id });

    return response.status(200).json({
      success: true,
    });
  }
}
