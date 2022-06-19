import { Request, Response } from "express";

import { UpdatePostUseCase } from "./update-post-use-case";

export class UpdatePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, excerpt, content, user_id } = request.body;

    const updatePostUseCase = new UpdatePostUseCase();
    const result = await updatePostUseCase.execute({
      id,
      title,
      excerpt,
      content,
      user_id,
    });

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
