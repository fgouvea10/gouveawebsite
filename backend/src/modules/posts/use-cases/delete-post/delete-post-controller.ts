import { Request, Response } from 'express';

import { DeletePostUseCase } from './delete-post-use-case';

export class DeletePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePostUseCase = new DeletePostUseCase();
    const result = await deletePostUseCase.execute({ id });

    return response.json(result);
  }
}
