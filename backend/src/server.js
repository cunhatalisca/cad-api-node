const app = require('./app')
const dotnv = require('dotenv'); // para acessar as variáveis de ambiente

dotnv.config();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log('Servidor rodando!'))