var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; 
  port: 3300,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeTrackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}