const mostPopularDirectorQuery =
  "select f.director, count(f.title) as movies_count from movies as f group by f.director having movies_count = (select max(movies_count) as max_count from (select f.director, count(f.title) as movies_count from movies as f group by f.director) as f2);";

const lessPopularDirectorQuery =
  "select f.director, count(f.title) as movies_count from movies as f group by f.director having movies_count = (select min(movies_count) as min_count from (select f.director, count(f.title) as movies_count from movies as f group by f.director) as f2);";

function mostOrLessPopularDirector(
  popularityLevel,
  connexionDb,
  functionToCallOnQueryDone
) {
  if (popularityLevel === "most") {
    connexionDb.query(mostPopularDirectorQuery, functionToCallOnQueryDone);
  }
  if (popularityLevel === "less") {
    connexionDb.query(lessPopularDirectorQuery, functionToCallOnQueryDone);
  }
}

module.exports = { mostOrLessPopularDirector };
