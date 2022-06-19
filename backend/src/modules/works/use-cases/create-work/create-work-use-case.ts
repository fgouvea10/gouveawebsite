import { AppError } from "../../../../shared/errors/AppError";
import { prisma } from "../../../../shared/infra/prisma";

interface ICreateWork {
  name: string;
  excerpt: string;
  content: string;
  slug: string;
  isFeatured: boolean;
}

export class CreateWorkUseCase {
  async execute({ name, excerpt, content, slug, isFeatured }: ICreateWork) {
    // const workAlreadyExists = await prisma.works.findFirst({
    //   where: {
    //     name: {
    //       mode: 'insensitive',
    //     },
    //   },
    // });

    // if (workAlreadyExists) throw new AppError('Work already exists', 409);

    const work = await prisma.works.create({
      data: {
        name,
        excerpt,
        content,
        slug,
        isFeatured,
      } as any,
    });

    return work;
  }
}
