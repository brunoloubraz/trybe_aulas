const app = require('./app');

const PORT = 3000;

// app.get('/health/live', (req, res) => {
//   res.status(200).json({ message: 'online' })
// })

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
  //  Para linux abaixo
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
  // Para Windows abaixos
  // console.log(`Valor da variável de ambiente USERNAME: ${process.env.USERNAME}`);
});