const fetch = require("node-fetch");

test("Get the right selection given actor", async () => {
  let response = await fetch(
    "http://localhost:3000/select-movies-byactor/Brad Pitt"
  );
  let data = await response.json();
  let returnedFilmId = data.map((e) => e.film_id);
  expect(returnedFilmId).toEqual([10, 28]);
});

test("Get the right selection given year", async () => {
  let response = await fetch("http://localhost:3000/select-movies-byyear/2019");
  let data = await response.json();
  let returnedFilmId = data.map((e) => e.film_id);
  expect(returnedFilmId).toEqual([20]);
});

test("Get the right selection given director", async () => {
  let response = await fetch(
    "http://localhost:3000/select-movies-bydirector/Quentin Tarantino"
  );
  let data = await response.json();
  let returnedFilmId = data.map((e) => e.film_id);
  expect(returnedFilmId).toEqual([7]);
});

test("Get the right selection given title", async () => {
  let response = await fetch(
    "http://localhost:3000/select-movies-bytitle/The Matrix"
  );
  let data = await response.json();
  let returnedFilmId = data.map((e) => e.film_id);
  expect(returnedFilmId).toEqual([15]);
});
