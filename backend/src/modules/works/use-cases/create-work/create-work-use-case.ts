import { AppError } from "../../../../shared/errors/AppError";
import { prisma } from "../../../../shared/infra/prisma";

interface ICreateWork {
  name: string;
  excerpt: string;
  content: string;
  slug: string;
  isFeatured: boolean;
  path: string;
}

export class CreateWorkUseCase {
  async execute({ name, excerpt, content, slug, path, isFeatured }: ICreateWork) {
    // const workAlreadyExists = await prisma.works.findUnique({
    //   where: {
    //     content,
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
        path,
      } as any,
    });

    return work;
  }
}
