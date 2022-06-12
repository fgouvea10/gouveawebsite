import { prisma } from '../../../../database/prismaClient';

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

    if (workAlreadyExists) throw new Error('Work already exists');

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
