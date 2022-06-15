import { prisma } from "../../../../shared/infra/prisma";

export class ListUsersUseCase {
  async execute() {
    const users = await prisma.users.findMany();

    return users;
  }
}