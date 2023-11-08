// src/app.js
const apiCredentials = require('./middlewares/apiCredentials');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const routes = require('./routes')

require('express-async-errors');

const app = express();
const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});
app.use(limiter);
app.use(morgan('dev'));
app.use(express.static('images'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(apiCredentials)
app.use(routes)

app.use((error, req, res, _next) => {
  res.stats(500).json({ message: 'Erroooooo!'})
})
// app.use((req, res) => res.sendStatus(404));
module.exports = app;