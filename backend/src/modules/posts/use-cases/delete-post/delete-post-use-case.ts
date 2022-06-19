import { prisma } from '../../../../shared/infra/prisma';

interface IDeletePost {
  id: string;
}

export class DeletePostUseCase {
  async execute({ id }: IDeletePost) {
    const post = await prisma.posts.delete({
      where: {
        id,
      },
    });

    return post;
  }
}
