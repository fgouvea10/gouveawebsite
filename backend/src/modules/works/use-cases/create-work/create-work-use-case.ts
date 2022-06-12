import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../shared/errors/AppError';

interface ICreateWork {
  name: string;
  excerpt: string;
  content: string;
}

export class CreateWorkUseCase {
  async execute({ name, excerpt, content }: ICreateWork) {
    const workAlreadyExists = await prisma.works.findFirst({
      where: {
        name: {
          mode: 'insensitive',
        },
      },
    });

    if (workAlreadyExists) throw new AppError('Work already exists', 409);

    const work = await prisma.works.create({
      data: {
        name,
        excerpt,
        content,
      },
    });

    return work;
  }
}
