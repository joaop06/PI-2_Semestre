const express = require("express")
const app = express()
const connection = require("./src/data/data")

app.listen(8080, () => {
    console.log("Server is running in port 8080")
})

connection.connect(function (err){
    console.log("Connection DataBase sucess!")
})


const indexRouter = require("./src/routes/index")
app.use('/', indexRouter)
const rangonRouter = require("./src/routes/rangonRouter")
app.use('/', rangonRouter)

module.exports = app