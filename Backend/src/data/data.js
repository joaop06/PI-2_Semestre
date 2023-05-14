const mysql = require("mysql2")

const connection = new mysql.createConnection({
    host: 'localhost',
    user: 'rangon',
    password: 'pi2dsm',
    database: 'rangon'
})

module.exports = connection