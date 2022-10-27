function updateMovie(
  movieToUpdate,
  itemsToUpdate,
  connexionDb,
  functionToCallOnQueryDone
) {
  const itemsInQuery = Object.entries(itemsToUpdate)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return key + " = '" + value + "'";
      }
      return key + " = " + value;
    })
    .join(", ");
  const updateMovie =
    "update movies set " +
    itemsInQuery +
    " where title = '" +
    movieToUpdate +
    "';";
  connexionDb.query(updateMovie, functionToCallOnQueryDone);
}

module.exports = { updateMovie };
