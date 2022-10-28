// const app = require("../index");
const mySQL = require("mysql2/promise");
const fetch = require("node-fetch");

test("check that movie is updated", async () => {
  let connectionToMovies = await mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Test71MySQL",
    database: "movies",
  });
  let actualResult = await connectionToMovies.query(
    "select * from movies where film_id = 5;"
  );
  let actualTitle = actualResult[0][0].title;
  // title should be :12 Angry Men
  let url = "http://localhost:3000/update-movie/" + actualTitle;
  let newTitle = "13 Angry Men";
  let fetchAnswer = await fetch(url, {
    method: "post",
    body: JSON.stringify({ title: newTitle }),
    headers: { "Content-Type": "application/json" },
  });
  let data = await fetchAnswer.json();
  let modifiedResult = await connectionToMovies.query(
    "select * from movies where film_id = 5;"
  );
  expect(modifiedResult[0][0].title).toBe("13 Angry Men");
  // Return Db to initial state
  url = "http://localhost:3000/update-movie/" + newTitle;
  fetchAnswer = await fetch(url, {
    method: "post",
    body: JSON.stringify({ title: actualTitle }),
    headers: { "Content-Type": "application/json" },
  });
  data = await fetchAnswer.json();
  modifiedResult = await connectionToMovies.query(
    "select * from movies where film_id = 5;"
  );
  expect(modifiedResult[0][0].title).toBe("12 Angry Men");
  connectionToMovies.close;
});
