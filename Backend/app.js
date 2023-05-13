const express = require("express")
const app = express()
const mysql = require("mysql2")

app.use(express.json())

app.listen(8080, () => {
    console.log("Server is running")
})





const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root'
})