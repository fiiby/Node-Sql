const db = require('../models/indexStart')
const  createError = require('http-errors')

//use the model 
const Course= db.course;

module.exports = {

// index will hv a global error 404 /the other one look it in node-app.

    //add student
    addCourse: async(req, res, next)=>{
        try{
            let info = {
              course_id: req.body.course_id,
                courseName: req.body.courseName,
               
            }
            const addCourse= await Course.create(info)
            res.status(200).send(addCourse)
        } catch(error) {
            next(error)
        }
    },
    // get all courses :
    getCourses :async(req, res, next)=>{
        try{
            let allCourses = await Course.findAll({})
        }catch(error){
            next(error)
        }
    },
    getCourse :async(req, res, next)=>{
        try{
            let id = req.params.id
            let course = await Course.findOne({where: {student_id: id}})
            
            if(!course){
                throw(createError(404, "Course does not exist"))
            }
            res.status(200).send(course)
        }catch(error){
            next(error)
        }
    },
    updateCourse:async(req, res, next)=>{
        try{
            let id = req.params.id

            const course = await Student.update(req.body, {where: {student_id: id}})
            if(!course){
                throw(createError(404, 'Course does not exist'))
            }
            res.status(200).send(course)
        }catch(error){
            next(error)
        }
    },
    deleteCourse :async(req, res ,next)=>{
        try{
            let id = req.params.id

            await Course.destroy({ where: {course_id: id}})
            res.status(200).send("Course deleted successfully")
        }catch(error){
            next(error)
        }
    }
}