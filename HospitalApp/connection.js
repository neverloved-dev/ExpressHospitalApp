var mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Hospital",
    password: " "
});
connection.connect(function (err) {
    if (err) {
        return console.error("??????: " + err.message);
    }
    else {
        console.log("Connection successfull!");
    }
});