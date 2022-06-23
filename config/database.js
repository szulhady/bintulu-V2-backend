const mysql = require("mysql");

const connection = mysql.createPool({
  host: "zr.airmode.live",
  user: "digitalman",
  password: "c1vG7R34",
  database: "tracker",
  port: 3306,
});

module.exports = connection;