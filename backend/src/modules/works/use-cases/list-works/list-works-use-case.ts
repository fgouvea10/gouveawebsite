import { prisma } from "../../../../shared/infra/prisma";

export class ListWorksUseCase {
  async execute() {
    const works = await prisma.works.findMany();

    return works;
  }
}
