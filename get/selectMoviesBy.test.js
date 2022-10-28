import { selectMoviesBy } from "./selectMoviesBy";

const mockConnection1 = { query: jest.fn() };

test("selectMoviesBy uses right SQL query for year selection", () => {
  let itemTypeToTest1 = "year";
  let selectedItemToTest1 = 2018;
  selectMoviesBy(itemTypeToTest1, selectedItemToTest1, mockConnection1);
  expect(mockConnection1.query.mock.calls[0][0]).toBe(
    "select * from movies where year = 2018;"
  );
});

const mockConnection2 = { query: jest.fn() };
test("selectMoviesBy uses right SQL query for actor selection", () => {
  let itemTypeToTest2 = "actors";
  let selectedItemToTest2 = "Kevin Spacey";
  selectMoviesBy(itemTypeToTest2, selectedItemToTest2, mockConnection2);
  expect(mockConnection2.query.mock.calls[0][0]).toBe(
    "select * from movies where json_contains(actors, '\"Kevin Spacey\"', '$');"
  );
});

const mockConnection3 = { query: jest.fn() };
test("selectMoviesBy uses right SQL query for title selection", () => {
  let itemTypeToTest3 = "title";
  let selectedItemToTest3 = "Star Wars";
  selectMoviesBy(itemTypeToTest3, selectedItemToTest3, mockConnection3);
  expect(mockConnection3.query.mock.calls[0][0]).toBe(
    "select * from movies where title = 'Star Wars';"
  );
});

const mockConnection4 = { query: jest.fn() };
test("selectMoviesBy uses right SQL query for director selection", () => {
  let itemTypeToTest4 = "director";
  let selectedItemToTest4 = "Robert Zemeckis";
  selectMoviesBy(itemTypeToTest4, selectedItemToTest4, mockConnection4);
  expect(mockConnection4.query.mock.calls[0][0]).toBe(
    "select * from movies where director = 'Robert Zemeckis';"
  );
});
