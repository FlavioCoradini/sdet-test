const { validateInputParams } = require("../../src/validation");

describe("validateInputParams", () => {
  test("input params are required", () => {
    expect(() => validateInputParams()).toThrow("input params are required");
  });

  test("area_code is required", () => {
    const body = {
      sample: 11211,
    };

    expect(() => validateInputParams(body)).toThrow("area_code is required");
  });

  test("sample is required", () => {
    const body = {
      area_code: "mocked-area-code",
    };

    expect(() => validateInputParams(body)).toThrow("sample is required");
  });
});
