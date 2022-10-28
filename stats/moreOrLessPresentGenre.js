const morePresentGenreQuery =
  "select f.genre, count(f.title) as movies_count from movies as f group by f.genre having movies_count = (select max(movies_count) as max_count from (select f.genre, count(f.title) as movies_count from movies as f group by f.genre) as f2);";

const lessPresentGenreQuery =
  "select f.genre, count(f.title) as movies_count from movies as f group by f.genre having movies_count = (select min(movies_count) as min_count from (select f.genre, count(f.title) as movies_count from movies as f group by f.genre) as f2);";

function moreOrLessPresentGenre(
  presenceLevel,
  connexionDb,
  functionToCallOnQueryDone
) {
  if (presenceLevel === "more") {
    connexionDb.query(morePresentGenreQuery, functionToCallOnQueryDone);
  }
  if (presenceLevel === "less") {
    connexionDb.query(lessPresentGenreQuery, functionToCallOnQueryDone);
  }
}

module.exports = { moreOrLessPresentGenre };
