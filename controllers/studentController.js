const db = require('../models/indexStart')
const  createError = require('http-errors')

//use the model 
const Student = db.students;

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
    getStudents :async(req, res, next)=>{
        try{
            let allStudents = await Student.findAll({})
        }catch(error){
            next(error)
        }
    },
    getStudent :async(req, res, next)=>{
        try{
            let id = req.params.id
            let student = await Student.findOne({where: {student_id: id}})
            
            if(!student){
                throw(createError(404, "Student does not exist"))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    },
    updateStudent :async(req, res, next)=>{
        try{
            let id = req.params.id

            const student = await Student.update(req.body, {where: {student_id: id}})
            if(!student){
                throw(createError(404, 'student does not exist'))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    },
    deleteStudent :async(req, res ,next)=>{
        try{
            let id = req.params.id

            await Student.destroy({ where: {student_id: id}})
            res.status(200).send("student deleted successfully")
        }catch(error){
            next(error)
        }
    }
}