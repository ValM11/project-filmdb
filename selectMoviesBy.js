function selectMoviesBy(
  itemType,
  selectedItem,
  connexionDb,
  functionToCallOnQueryDone
) {
  let selectMovies = "";
  if (itemType === "actors") {
    selectMovies =
      "select * from movies where json_contains(" +
      itemType +
      ", '\"" +
      selectedItem +
      "\"', '$');";
  } else {
    if (typeof selectedItem === "number") {
      selectMovies =
        "select * from movies where " + itemType + " = " + selectedItem + ";";
    } else {
      selectMovies =
        "select * from movies where " + itemType + " = '" + selectedItem + "';";
    }
  }
  console.log(selectMovies);
  connexionDb.query(selectMovies, functionToCallOnQueryDone);
}

module.exports = { selectMoviesBy };
