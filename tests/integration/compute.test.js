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

  test("compute should return 400 if area_code is missing", async () => {
    const res = await request(app).post("/compute").send({
      sample: "mocked sample",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  test("compute should return 400 if sample is missing", async () => {
    const res = await request(app).post("/compute").send({
      area_code: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  test("compute should return 400 if params are missing", async () => {
    const res = await request(app).post("/compute").send();

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});
