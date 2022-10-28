const mostPopularActorQuery =
  "select a.actor, count(*) as movies_count from movies as t join json_table ( t.actors, '$[*]' columns (actor varchar(50) path '$') ) as a group by a.actor having movies_count = (select max(movies_count) as max_count from (select a.actor, count(*) as movies_count from movies as t join json_table( t.actors, '$[*]' columns (actor varchar(50) path '$')) as a group by a.actor) as f2);";

const lessPopularActorQuery =
  "select a.actor, count(*) as movies_count from movies as t join json_table ( t.actors, '$[*]' columns (actor varchar(50) path '$') ) as a group by a.actor having movies_count = (select min(movies_count) as min_count from (select a.actor, count(*) as movies_count from movies as t join json_table( t.actors, '$[*]' columns (actor varchar(50) path '$')) as a group by a.actor) as f2);";

function mostOrLessPopularActor(
  popularityLevel,
  connexionDb,
  functionToCallOnQueryDone
) {
  if (popularityLevel === "most") {
    connexionDb.query(mostPopularActorQuery, functionToCallOnQueryDone);
  }
  if (popularityLevel === "less") {
    connexionDb.query(lessPopularActorQuery, functionToCallOnQueryDone);
  }
}

module.exports = { mostOrLessPopularActor };
