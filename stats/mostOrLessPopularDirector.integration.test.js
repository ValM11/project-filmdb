// const app = require("../index");
const fetch = require("node-fetch");

test("Get the most popular directors", () => {
  return fetch("http://localhost:3000/most-less-popular-director/most")
    .then((response) => response.json())
    .then((data) => {
      expect(data).toEqual(["Christopher Nolan", "Peter Jackson"]);
    });
});
