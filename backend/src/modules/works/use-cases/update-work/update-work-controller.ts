import { Request, Response } from "express";

import { UpdateWorkUseCase } from "./update-work-use-case";

export class UpdateWorkController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, excerpt, content } = request.body;

    const updateWorkUseCase = new UpdateWorkUseCase();
    const result = await updateWorkUseCase.execute({
      id,
      name,
      excerpt,
      content,
    });

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
