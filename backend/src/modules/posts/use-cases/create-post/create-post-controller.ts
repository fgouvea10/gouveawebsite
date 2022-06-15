import { Request, Response } from "express";

import { CreatePostUseCase } from "./create-post-use-case";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, excerpt, content, user_id, slug } = request.body;

    const createPostUseCase = new CreatePostUseCase();
    const result = await createPostUseCase.execute({
      title,
      excerpt,
      content,
      user_id,
      slug,
    });

    return response.status(201).json({
      success: true,
      result,
    });
  }
}
