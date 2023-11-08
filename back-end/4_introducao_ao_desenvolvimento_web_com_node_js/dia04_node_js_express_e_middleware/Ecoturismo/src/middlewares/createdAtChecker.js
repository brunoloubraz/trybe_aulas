const createdAtChecker = (req, res, next) => {
  const { createdAt } = req.body
  const formatoData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (createdAt !== formatoData) res.status(400).json({ message: 'O campo createdAt tem que ter o formato xx/xx/xxxx' })
  next()
}

module.exports = createdAtChecker;