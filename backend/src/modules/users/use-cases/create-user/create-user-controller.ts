import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user-use-case';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      email,
      name,
      password,
    });

    return response.json(result);
  }
}
