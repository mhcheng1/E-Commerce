const express = require("express");
const cors = require("cors"); // encountered issue with CORS policy blocking
require("dotenv").config();
const mysql = require("mysql");

// C:\Program Files\MySQL\MySQL Server 8.0\bin

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var db_config = {
  host: "127.0.0.1",
  user: "root",
  password: "dolphin",
  database: "test"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {
    console.log("mysql connected")
    connection.query("SELECT * FROM test", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

app.get("/", (req, res) => {
  res.send("go to /my-project to see my project");
});


app.post("/test", (req, res) => {
  res.send("test get");
  res.sendStatus(999);
});

app.get("/", (req, res) => {
    res.send('go to /my-project to see my project')
})

app.listen(3001);
