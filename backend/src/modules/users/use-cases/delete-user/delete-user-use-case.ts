import { prisma } from "../../../../shared/infra/prisma";

interface IDeleteUser {
  id: string;
}

export class DeleteUserUseCase {
  async execute({ id }: IDeleteUser) {
    const user = await prisma.users.delete({
      where: {
        id,
      },
    });

    return user;
  }
}
