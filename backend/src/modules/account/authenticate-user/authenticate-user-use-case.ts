import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../shared/errors/AppError';

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new AppError('Email or password incorrect', 401);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect', 401);

    const token = sign({ email }, '085d711cbcf520e9c590fd994c7c8a5a', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}
