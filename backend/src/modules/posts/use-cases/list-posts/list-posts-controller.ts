import { Request, Response } from "express";

import { ListPostsUseCase } from "./list-posts-use-case";

export class ListPostsController {
  async handle(request: Request, response: Response) {
    const listPostsUseCase = new ListPostsUseCase();
    const result = await listPostsUseCase.execute();

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
