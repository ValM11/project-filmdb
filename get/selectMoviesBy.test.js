import { selectMoviesBy } from "./selectMoviesBy";

const mockConnection = { query: jest.fn() };
const itemTypeToTest = "year";
const selectedItemToTest = 2018;
test("selectMoviesBy uses right SQL query", () => {
  selectMoviesBy(itemTypeToTest, selectedItemToTest, mockConnection);
  expect(mockConnection.query.mock.calls[0][0]).toBe(
    "select * from movies where year = 2018;"
  );
});
