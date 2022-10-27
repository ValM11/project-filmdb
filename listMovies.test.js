import { listMovies } from "./listMovies";

const mockConnection = { query: jest.fn((x) => 42 + x) };
test("listMovies uses right SQL query", () => {
  listMovies(mockConnection);
  expect(mockConnection.query.mock.calls[0][0]).toBe("select * from movies;");
});
