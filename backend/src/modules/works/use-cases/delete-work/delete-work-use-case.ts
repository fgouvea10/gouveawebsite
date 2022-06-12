import { prisma } from "../../../../shared/infra/prisma";

interface IDeleteWork {
  id: string;
}

export class DeleteWorkUseCase {
  async execute({ id }: IDeleteWork) {
    const work = await prisma.works.delete({
      where: {
        id,
      },
    });

    return work;
  }
}
