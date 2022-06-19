import { CreateWorkUseCase } from "./create-work-use-case";

const createWorkUseCase = new CreateWorkUseCase();

describe("Create work", () => {
  it("should be able to create a new work", async () => {
    await expect(
      createWorkUseCase.execute({
        name: "Work test",
        excerpt: "work excerpt",
        content: "work description",
        slug: "work-test",
        isFeatured: false,
      })
    ).resolves.not.toThrow();
  });
});
