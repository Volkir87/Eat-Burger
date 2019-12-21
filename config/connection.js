const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: '3306',
    database: 'burgers_db'
});

module.exports = connection;