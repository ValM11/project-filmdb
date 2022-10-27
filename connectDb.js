const mySQL = require("mysql2");

function connectDb(host, username, password, database) {
  return mySQL.createConnection({
    host: host,
    user: username,
    password: password,
    database: database,
  });
}

module.exports = { connectDb };
// let connectDb = getConnection("localhost", "root", "Test71MySQL", "movies");
