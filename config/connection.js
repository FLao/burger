// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
