"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("./config"));
var pool = mysql2_1.default.createPool({
    connectionLimit: config_1.default.connectionLimit,
    host: config_1.default.host,
    user: config_1.default.user,
    password: config_1.default.password,
    database: config_1.default.database,
    port: config_1.default.port,
});
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error getting MySQL connection:", err);
        throw err;
    }
    else {
        console.log("Connected to MySQL database");
        connection.release(); // Release the connection back to the pool
    }
});
exports.default = pool;
