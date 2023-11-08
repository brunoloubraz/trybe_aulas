
const descChecker = (req, res, next) => {
  const {description} = req.body
  const {rating, difficulty, createdAt} = req.body.description
  if (!description) res.status(400).json({ message: "O campo description é obrigatório" });
  if (!rating) res.status(400).json({ message: "O campo rating é obrigatório" });
  if (!difficulty) res.status(400).json({ message: "O campo difficulty é obrigatório" });
  if (!createdAt) res.status(400).json({ message: "O campo createdAt é obrigatório" });
  next();

 // PODE SER FEITO IGUAL ESTA ABAIXO EVITANDO O MODELO DE REPETIÇÕES DOS IF'S

  // const validateDescription = (descriptionValue, res, value) => {
  //   if (!descriptionValue) {
  //     return res.status(400).json(
  //       { message: `O campo ${value} é obrigatório` },
  //     );
  //   }
  // };
  
  // module.exports = (req, res, next) => {
  //   const { description } = req.body;
  
  //   return validateDescription(description, res, 'description')
  //     || validateDescription(description.createdAt, res, 'createdAt')
  //     || validateDescription(description.rating, res, 'rating')
  //     || validateDescription(description.difficulty, res, 'difficulty')
  //     || next();
  // };
}

module.exports = descChecker;