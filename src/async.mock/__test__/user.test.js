import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const result = register("name", "password");
    await expect(result).resolves.toEqual("Hanhan");
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register("name", "password");
    await expect(result).rejects.toThrowError("wrong username or password");
  });
});
