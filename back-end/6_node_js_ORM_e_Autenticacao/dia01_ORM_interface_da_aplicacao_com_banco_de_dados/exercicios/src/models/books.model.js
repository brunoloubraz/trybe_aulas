const booksModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('User', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  // (async () => {
  //   await sequelize.sync({ force: true })
  // })();
  return Book;
}