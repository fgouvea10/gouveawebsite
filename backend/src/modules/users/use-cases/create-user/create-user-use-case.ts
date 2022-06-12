import { hash } from 'bcrypt';

import { AppError } from '../../../../shared/errors/AppError';
import { prisma } from '../../../../shared/infra/prisma';

interface ICreateUser {
  email: string;
  name: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ email, name, password }: ICreateUser) {
    const userAlreadyExists = await prisma.users.findFirst({
      where: {
        email: {
          mode: 'insensitive',
        },
      },
    });

    if (userAlreadyExists) throw new AppError('User already exists', 409);

    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });

    return user;
  }
}
