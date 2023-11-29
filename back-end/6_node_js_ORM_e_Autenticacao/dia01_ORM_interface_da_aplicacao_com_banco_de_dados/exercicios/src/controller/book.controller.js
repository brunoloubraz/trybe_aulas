const bookService = require('../services/books.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books)
  } catch (e) {
    console.log(e.message);
    res.stats(500).json({ message: error500Message })
  }
};

module.exports = {
  getAll,
}