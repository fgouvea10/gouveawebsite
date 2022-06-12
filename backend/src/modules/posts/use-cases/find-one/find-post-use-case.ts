import { prisma } from '../../../../shared/infra/prisma';

interface IFindPost {
  id: string;
}

export class FindPostUseCase {
  async execute({ id }: IFindPost) {
    const post = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    return post;
  }
}
