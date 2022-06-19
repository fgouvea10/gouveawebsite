import { prisma } from '../../../../shared/infra/prisma';

interface IFindWork {
  id: string;
}

export class FindWorkUseCase {
  async execute({ id }: IFindWork) {
    const work = await prisma.works.findUnique({
      where: {
        id,
      },
    });

    return work;
  }
}
