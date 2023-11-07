// src/app.js
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');
const teams = require('./utils/teams')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const teamsRouter = require('./routes/teamsRouter')

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
app.use('/teams', teamsRouter);
let nextId = 3;

app.use(express.json());
app.use(apiCredentials)

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.use((error, req, res, _next) => {
  res.stats(500).json({ message: 'Erroooooo!'})
})

// app.use((req, res) => res.sendStatus(404));
module.exports = app;