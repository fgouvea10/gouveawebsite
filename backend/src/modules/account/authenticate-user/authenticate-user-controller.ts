import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./authenticate-user-use-case";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();
    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).json({
      success: true,
      result,
    });
  }
}
