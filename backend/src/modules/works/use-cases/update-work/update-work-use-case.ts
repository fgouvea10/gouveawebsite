import { prisma } from '../../../../database/prismaClient';

interface IUpdateWork {
  id?: string;
  name: string;
  excerpt: string;
  content: string;
}

export class UpdateWorkUseCase {
  async execute({ id, name, excerpt, content }: IUpdateWork) {
    const work = await prisma.works.update({
      data: {
        name,
        excerpt,
        content,
      },
      where: {
        id,
      },
    });

    return work;
  }
}
