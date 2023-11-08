const express = require('express');
const nameChecker = require('./middlewares/nameChecker');
const priceChecker = require('./middlewares/priceChecker');
const descChecker = require('./middlewares/descChecker')

const app = express();

app.use(express());

app.post('/activities', nameChecker, priceChecker, descChecker, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;