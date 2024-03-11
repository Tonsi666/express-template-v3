const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/byid", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/byid")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});
