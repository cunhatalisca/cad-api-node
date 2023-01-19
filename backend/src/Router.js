const express = require('express');
const taskController = require('./controllers/taskController');

const Router = express.Router();

Router.get('/tasks', taskController.getAll)
Router.get('/', (res, res) => res.send('oi'))

module.exports = Router