const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql  = require('mysql')
const config = require('../config/config.json')
const cors = require('cors')

const db = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/register", async (req, res) => {
    // User data to register in db
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const password = req.body.password

    const sqlRegister = "INSERT INTO Users (first_name, last_name, email, password) VALUES (?,?,?,?);"
    db.query(sqlRegister , [first_name, last_name, email, password], function(err){
        res.setHeader('Content-Type', 'application/json');
        res.end()
    })
    
})


app.listen(3001, () =>{
    console.log("Api on http://localhost:3001")
})
