require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql  = require('mysql')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
const secret = process.env.SUPERSECRET

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/api/register", async (req, res) => {
    // User data to register in db
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const password = req.body.password
    // hash user password 
    const hashedPassword = bcrypt.hashSync(password);

    let isValid = true
    // TODO:first verify that email is unique don't allow multiple users with the same email
    // because we use it as unique identifier

    const sqlRegister = "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?);"
    const input = [first_name, last_name, email, hashedPassword]
    
    const db_res = db.query(sqlRegister, input)
    
    for (let i = 0; i < input.length; i++) {
        if(typeof input[i] == 'undefined')
            isValid = false
    }
    console.log("isValid", isValid)

    // create a token
    const token = jwt.sign({ id: email }, secret, {
        expiresIn: 86400 // expires in 24 hours
    });

    const _user = {
        first_name: first_name,
        last_name: last_name,
        email: email
    }
    
    if (isValid) {
        res.json({
            user: _user,
            token: token
        });
    }
    else
        res.status(500).end()
})

app.get('/verifyToken', function(req, res) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      res.status(200).send(decoded);
    });
});

app.post("/api/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    //Checking if user exists in my database.
    const sqlLogin = "SELECT * FROM users WHERE email = ?;"
    const input = [email]
    const db_res = db.query(sqlLogin, input, function(err, result, fields){
        if(err){
            return res.status(500).send('Error on the server.');
        }
        else{
            const _user = result[0]
            //If user does not exist this will be undefined and nothing will return. If exists then we will get an answer.
            if (!_user) {
                return res.status(404).send('No user found.');
            }
            // Check hashed password
            // console.log("password", password)
            // console.log("_user.password", _user.password)
            const passwordIsValid = bcrypt.compareSync(password, _user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    
            const token = jwt.sign({ id: email }, secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            
            const returned_user = {
                first_name: _user.first_name,
                last_name: _user.last_name,
                email: _user.email
            }

            res.status(200).send({ auth: true, user: returned_user, token: token });

            // res.json({
            //     user: answer,
            // });
        }
    })
})

app.listen(3001, () =>{
    console.log("Api on http://localhost:3001")
})
