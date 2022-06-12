import { prisma } from "../../../../shared/infra/prisma";

export class ListPostsUseCase {
  async execute() {
    const posts = await prisma.posts.findMany();

    return posts;
  }
}
