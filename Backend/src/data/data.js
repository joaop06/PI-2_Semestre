const mysql = require("mysql2")

const connection = new mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joao55347@',
    database: 'rangon'
})

module.exports = connection