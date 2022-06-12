import { Request, Response } from 'express';

import { DeletePostUseCase } from './delete-post-use-case';

export class DeletePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePostUseCase = new DeletePostUseCase();
    await deletePostUseCase.execute({ id });

    return response.status(200).json({
      success: true,
    });
  }
}
