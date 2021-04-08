const { validateInputParams } = require("../../src/validation");

describe("validateInputParams", () => {
  test("input params are required", () => {
    expect(() => validateInputParams()).toThrow("input params are required");
  });
});
