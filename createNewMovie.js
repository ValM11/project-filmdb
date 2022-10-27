function createNewMovie(newMovie, connexionDb, functionToCallOnQueryDone) {
  const sentItems = Object.keys(newMovie).join(",");
  const itemsValues = Object.values(newMovie)
    .map((value) => {
      if (typeof value === "string") {
        return '"' + value + '"';
      }
      return value;
    })
    .join(",");
  const insertNewMovie =
    "insert into movies(" + sentItems + ") values(" + itemsValues + ");";
  connexionDb.query(insertNewMovie, functionToCallOnQueryDone);
}

module.exports = { createNewMovie };
