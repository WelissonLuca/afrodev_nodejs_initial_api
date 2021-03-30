const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: '240306',
    database: 'agenda'
});

module.exports = connection;