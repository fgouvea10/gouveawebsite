import { AppError } from '../../../../shared/errors/AppError';
import { prisma } from '../../../../shared/infra/prisma';

interface ICreatePost {
  title: string;
  excerpt: string;
  content: string;
  user_id: string;
}

export class CreatePostUseCase {
  async execute({ title, excerpt, content, user_id }: ICreatePost) {
    // const postAlreadyExists = await prisma.posts.findFirst({
    //   where: {
    //     title: {
    //       mode: 'insensitive',
    //     },
    //   },
    // });

    // if (postAlreadyExists) throw new AppError('Post already exists', 409);

    const post = await prisma.posts.create({
      data: {
        title,
        excerpt,
        content,
        user_id
      } as any,
    });

    return post;
  }
}
