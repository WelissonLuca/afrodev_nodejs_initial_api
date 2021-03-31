const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "240306",
	database: "scheduling",
});

module.exports = connection;