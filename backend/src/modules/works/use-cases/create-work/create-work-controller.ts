import { Request, Response } from "express";

import { CreateWorkUseCase } from "./create-work-use-case";

export class CreateWorkController {
  async handle(request: Request, response: Response) {
    const { name, excerpt, content, slug, isFeatured, path } = request.body;

    const createWorkUseCase = new CreateWorkUseCase();
    const result = await createWorkUseCase.execute({
      name,
      excerpt,
      content,
      slug,
      isFeatured,
      path,
    });

    return response.status(201).json({
      success: true,
      result,
    });
  }
}
