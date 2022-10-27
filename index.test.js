import { countMoviesByGenre } from "./countMoviesByGenre";

jest.mock("./countMoviesByGenre");

test("Get the right answer", () => {
  countMoviesByGenre.mockReturnValue([
    { Genre: "Overall", movies_count: 30 },
    { Genre: "Crime", movies_count: 8 },
  ]);
  expect().toBe();
});
