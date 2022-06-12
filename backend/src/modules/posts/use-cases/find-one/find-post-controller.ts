import { Request, Response } from "express";

import { FindPostUseCase } from "./find-post-use-case";

export class FindPostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findPostUseCase = new FindPostUseCase();
    const result = await findPostUseCase.execute({ id });

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
