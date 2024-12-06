const express = require('express')
const app =  express();
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// add mongoDB setup
require('./Models/db');
const AuthRouter = require('./Routes/AuthRouter');

const PORT = process.env.PORT || 8000;

// test
app.get('/test', (req, res)=>{
    res.send('Testing..');
})

app.use(bodyparser.json());
app.use(cors());
app.use('/auth', AuthRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}...`);
})
