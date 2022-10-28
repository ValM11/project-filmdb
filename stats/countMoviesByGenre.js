const countByGenreQuery =
  "select 'Overall' as Genre, count(*) as movies_count from movies union all select Genre, count(title) as movies_count from movies group by genre;";

function countMoviesByGenre(connexionDb, functionToCallOnQueryDone) {
  connexionDb.query(countByGenreQuery, functionToCallOnQueryDone);
}

module.exports = { countMoviesByGenre };
