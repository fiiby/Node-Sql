const express = require('express');
const studentController = require('../controllers/studentController');
const routes = express.Router();

routes.post('/addStudent', studentController.addStudent)
routes.get('/getStudents', studentController.getStudents)
routes.get('/getStudent:id', studentController.addStudent)
routes.delete('/deleteStudent:id', studentController.deleteStudent)



module.exports  =routes