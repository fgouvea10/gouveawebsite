import { prisma } from '../../../../shared/infra/prisma';

interface IUpdatePost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  user_id: string;
}

export class UpdatePostUseCase {
  async execute({ id, title, excerpt, content, user_id }: IUpdatePost) {
    const post = await prisma.posts.update({
      data: {
        title,
        excerpt,
        content,
        user_id,
      } as any,
      where: {
        id,
      },
    });

    return post;
  }
}
