const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: '3308'
});

module.exports = connection;