const express = require('express');
const Router = require('./Router')

const app = express();
app.use(Router); // OU seja: Toda requisição que for feita, o app tem que usar o router.

module.exports = app;
