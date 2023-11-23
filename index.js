const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corOperation = {
    origin:'http://localhost:3001'
}

app.use(cors(corOperation))
const studentRoute = require('./routes/studentRoutes');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/Student', studentRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})