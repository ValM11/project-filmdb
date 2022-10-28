function deleteMovie(selectedTitle, connexionDb, functionToCallOnQueryDone) {
  const deleteMovieQuery =
    "delete from movies where title = " + selectedTitle + ";";
  console.log(deleteMovieQuery);
  connexionDb.query(deleteMovieQuery, functionToCallOnQueryDone);
}

module.exports = { deleteMovie };
