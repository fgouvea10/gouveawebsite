import { prisma } from '../../../../database/prismaClient';

interface IDeleteUser {
  id: string;
}

export class DeleteWorkUseCase {
  async execute({ id }: IDeleteUser) {
    const work = await prisma.works.delete({
      where: {
        id,
      },
    });

    return work;
  }
}
