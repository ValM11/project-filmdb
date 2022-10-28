import { listMovies } from "./listMovies";

const mockConnection = { query: jest.fn() };
test("listMovies uses right SQL query", () => {
  listMovies(mockConnection);
  expect(mockConnection.query.mock.calls[0][0]).toBe("select * from movies;");
});
