const request = require("supertest");
const app = require("../../src/app");

describe("compute", () => {
  test("compute should return 200", async () => {
    const res = await request(app).post("/compute").send({
      area_code: 1,
      sample: "mocked sample",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("probability");
  });
});
