const difficultyChecker = (req, res, next) => {
  const { difficulty } = req.body;
  const classifications = ['Fácil', 'Médio', 'Difícil'];
  if (!classifications.includes(difficulty)) {
    res.status(400).json('O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"');
  }
  next();
}

module.exports = difficultyChecker;