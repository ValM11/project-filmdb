// const app = require("../index");
const fetch = require("node-fetch");

test("Get the right number of movies in the list", () => {
  return fetch("http://localhost:3000/list-movies")
    .then((response) => response.json())
    .then((data) => {
      let moviesNumber = Object.keys(data).length;
      expect(moviesNumber).toBe(30);
    });
});

// Example with async -await
// test("Get the right number of movies in the list", async () => {
//   let response = await fetch("http://localhost:3000/list-movies");
//   let data = await response.json();
//   let moviesNumber = Object.keys(data).length;
//   expect(moviesNumber).toBe(31);
// });
