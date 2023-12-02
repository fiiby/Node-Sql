const express = require('express');
const courseController = require('../controllers/courseController');
const routes = express.Router();

routes.post('/addCourse', courseController.addCourse)
routes.get('/getCourses', courseController.getCourses)
routes.get('/updateCourse:id', courseController.updateCourse)
routes.delete('/deleteCourse', courseController.deleteCourse)



module.exports  =routes;