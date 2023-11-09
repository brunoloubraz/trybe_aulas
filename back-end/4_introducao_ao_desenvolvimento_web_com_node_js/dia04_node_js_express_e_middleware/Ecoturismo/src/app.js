const express = require('express');
const nameChecker = require('./middlewares/nameChecker');
const priceChecker = require('./middlewares/priceChecker');
const descChecker = require('./middlewares/descChecker');
const createdAtChecker = require('./middlewares/createdAtChecker');
const ratingChecker = require('./middlewares/ratingChecker');
const difficultyChecker = require('./middlewares/difficultyChecker');
const token = require('./token');
const fieldsChecker = require('./middlewares/fieldsChecker');
const app = express();

app.use(express());

app.post('/activities',
  nameChecker,
  priceChecker, 
  descChecker, 
  createdAtChecker,
  ratingChecker,
  difficultyChecker,
  (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" })
});

app.post('/signup', fieldsChecker, (req, res)  => {
  const generateTk = token()
  res.status(201).json({ generateTk })
});

app.post('/activities', (req, res) => {
  
});

module.exports = app;