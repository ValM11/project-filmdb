import { updateMovie } from "./updateMovie";

const mockConnection = { query: jest.fn() };
const titleToTest = "Best movie title";
const itemsToTest = { runtime: 120, director: "The director" };
test("updateMovie uses right SQL query", () => {
  updateMovie(titleToTest, itemsToTest, mockConnection);
  expect(mockConnection.query.mock.calls[0][0]).toBe(
    "update movies set runtime = 120, director = 'The director' where title = 'Best movie title';"
  );
});
