import { Request, Response } from 'express';
import { CreateWorkUseCase } from './create-work-use-case';

export class CreateWorkController {
  async handle(request: Request, response: Response) {
    const { name, excerpt, content } = request.body;

    const createWorkUseCase = new CreateWorkUseCase();
    const result = await createWorkUseCase.execute({
      name,
      excerpt,
      content,
    });

    return response.json(result);
  }
}
