var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mariflor",
    database: "crud"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//metodo para exportar modulos o variables
module.exports = con