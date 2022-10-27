const selectAllMovies = "select * from movies;";

function listMovies(connexionDb, functionToCallOnQueryDone) {
  connexionDb.query(selectAllMovies, functionToCallOnQueryDone);
}

module.exports = { listMovies };
