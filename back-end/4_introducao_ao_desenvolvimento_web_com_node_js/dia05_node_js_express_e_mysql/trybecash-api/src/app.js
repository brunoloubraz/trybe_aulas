const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes')
require('express-async-errors');

const app = express();

app.use(express.json());
app.use('/people', peopleRoutes)

module.exports = app;