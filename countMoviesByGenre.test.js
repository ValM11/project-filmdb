import { countMoviesByGenre } from "./countMoviesByGenre";

const mockConnection = { query: jest.fn((x) => 42 + x) };
test("countMoviesByGenre uses right SQL query", () => {
  countMoviesByGenre(mockConnection);
  expect(mockConnection.query.mock.calls[0][0]).toBe(
    "select 'Overall' as Genre, count(*) as movies_count from movies union all select Genre, count(title) as movies_count from movies group by genre;"
  );
});
