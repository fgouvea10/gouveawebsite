import { prisma } from "../../../../database/prismaClient";

export class ListWorksUseCase {
  async execute() {
    const works = await prisma.works.findMany();

    return works;
  }
}
