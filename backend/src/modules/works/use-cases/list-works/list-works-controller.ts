import { Request, Response } from "express";

import { ListWorksUseCase } from "./list-works-use-case";

export class ListWorksController {
  async handle(request: Request, response: Response) {
    const listWorksUseCase = new ListWorksUseCase();
    const result = await listWorksUseCase.execute();

    return response.status(200).json({
      success: true,
      result
    });
  }
}
