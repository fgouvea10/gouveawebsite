import { Request, Response } from "express";

import { FindWorkUseCase } from "./find-work-use-case";

export class FindWorkController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findWorkUseCase = new FindWorkUseCase();
    const result = await findWorkUseCase.execute({ id });

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
