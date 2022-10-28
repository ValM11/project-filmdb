import express from "express";
import { listMovies } from "./get/listMovies.js";
import { connectDb } from "./connectDb.js";
import { selectMoviesBy } from "./get/selectMoviesBy.js";
import { createNewMovie } from "./post/createNewMovie.js";
import { deleteMovie } from "./post/deleteMovie.js";
import { updateMovie } from "./post/updateMovie.js";
import { countMoviesByGenre } from "./stats/countMoviesByGenre.js";
import { mostOrLessPopularDirector } from "./stats/mostOrLessPopularDirector.js";
import { mostOrLessPopularActor } from "./stats/mostOrLessPopularActor.js";
import { moreOrLessPresentGenre } from "./stats/moreOrLessPresentGenre.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());

const connectionMoviesDb = connectDb(
  "localhost",
  "root",
  "Test71MySQL",
  "movies"
);

app.get("/list-movies", (req, res) => {
  listMovies(connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/select-movies-bygenre/:genre", (req, res) => {
  const selectedGenre = req.params.genre;
  selectMoviesBy("genre", selectedGenre, connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/select-movies-bytitle/:title", (req, res) => {
  const selectedTitle = req.params.title;
  selectMoviesBy("title", selectedTitle, connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/select-movies-byyear/:year", (req, res) => {
  const selectedYear = Number(req.params.year);
  selectMoviesBy(
    "released_year",
    selectedYear,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.get("/select-movies-byactor/:actor", (req, res) => {
  const selectedActor = req.params.actor;
  selectMoviesBy("actors", selectedActor, connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/select-movies-bydirector/:director", (req, res) => {
  const selectedDirector = req.params.director;
  selectMoviesBy(
    "director",
    selectedDirector,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.post("/create-new-movie", (req, res) => {
  const movieToAdd = req.body;
  createNewMovie(movieToAdd, connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/delete-movie", (req, res) => {
  const selectedTitle = req.body;
  deleteMovie(selectedTitle, connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/update-movie/:title", (req, res) => {
  const movieToBeUpdated = req.params.title;
  const itemsToBeUpdated = req.body;
  updateMovie(
    movieToBeUpdated,
    itemsToBeUpdated,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.get("/count-movies-bygenre", (req, res) => {
  countMoviesByGenre(connectionMoviesDb, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/most-less-popular-director/:popular", (req, res) => {
  const selectedPopularity = req.params.popular;
  mostOrLessPopularDirector(
    selectedPopularity,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result.map((e) => e.director));
    }
  );
});

app.get("/most-less-popular-actor/:popular", (req, res) => {
  const selectedPopularity = req.params.popular;
  mostOrLessPopularActor(
    selectedPopularity,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result.map((e) => e.actor));
    }
  );
});

app.get("/more-less-present-genre/:present", (req, res) => {
  const selectedPresence = req.params.present;
  moreOrLessPresentGenre(
    selectedPresence,
    connectionMoviesDb,
    (err, result) => {
      if (err) throw err;
      res.json(result.map((e) => e.genre));
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

module.exports = app;
