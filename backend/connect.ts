import mysql from "mysql2";
import config from "./config";

var pool = mysql.createPool({
  connectionLimit: config.connectionLimit,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error getting MySQL connection:", err);
    throw err;
  } else {
    console.log("Connected to MySQL database");
    connection.release(); // Release the connection back to the pool
  }
});

export default pool;
