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
    
    let isValid = true

    const sqlRegister = "INSERT INTO Users (first_name, last_name, email, password) VALUES (?,?,?,?);"
    const input = [first_name, last_name, email, password]
    
    const db_res = db.query(sqlRegister , input)
    
    for (let i = 0; i < input.length; i++) {
        if(typeof input[i] == 'undefined')
            isValid = false
    }
    console.log(isValid)

    if(isValid)
        res.end()
    else
        res.status(400).end()
})

app.post("/api/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sqlLogin = "SELECT id FROM Users WHERE email = ? AND password = ? ;" //Checking if user exists in my database.
    const input = [email, password]
    const db_res = db.query(sqlLogin, input , function(err, result, fields){
        if(err){
            throw err
        }
        else{
            const answer = result[0] //If user does not exist this will be undifined and nothing will return. If exists then we will get an answer.
            //console.log(answer)
            res.end(JSON.stringify({answer: answer})) 
        }
        
    })

    
})

app.listen(3001, () =>{
    console.log("Api on http://localhost:3001")
})
