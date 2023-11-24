const express = require('express');
const studentController = require('../controllers/studentController');
const routes = express.Router();

routes.post('/addStudent', studentController.addStudent)



module.exports  =routes