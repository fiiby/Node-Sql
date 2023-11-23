const db = require('../models/indexStart')
const  createError = require('http-errors')

//use the model 
const Student = db.student

module.exports = {


    //add student
    addStudent : async(req, res, next)=>{
        try{
            let info = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender
            }
            const addStore = await Student.create(info)
            res.status(200).send(addStore)
        } catch(error) {
            next(error)
        }
    },
    // get all students :
}