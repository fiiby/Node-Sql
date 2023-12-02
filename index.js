const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corOperation = {
    origin:'http://localhost:3000'
}

app.use(cors(corOperation))
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/student', studentRoutes)
app.use('/course', courseRoutes)

//global error handler:
app.use((req, res, next)=> {
    const err = new Error("Not FOund");
    err.status = 404
    
    next(err) 
})

app.use((err, req, res, next)=> {
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })

})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})