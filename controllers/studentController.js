const db = require('../models/indexStart')
const  createError = require('http-errors')

//use the model 
const Student = db.student

module.exports = {

// index will hv a global error 404 /the other one look it in node-app.

    //add student
    addStudent : async(req, res, next)=>{
        try{
            let info = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender
            }
            const addStudent= await Student.create(info)
            res.status(200).send(addStudent)
        } catch(error) {
            next(error)
        }
    },
    // get all students :
}