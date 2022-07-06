const express = require('express'); // importação

const app = express(); // criando uma aplicação
app.use(express.json()) // habilita o express a receber json no body

// req -> vem os dados que mandei na requisição
// res -> usamos para responser a requisição

// get - select
app.get('/', (req, res) => {
  res.send('olá mundo') 
})

app.get('/query', (req, res) => {
  // req.query // quando vai na query string -> localhost:3005/ola?nome=ingrid&idade=19
  res.send(req.query) // me retorna um json com as informações
})

app.get('/params/:id', (req, res) => {
  //req.params // quando a informação vai na rota -> localhost:3005/params/1
  res.send(req.params) // me retorna um json com id: 1
})

app.get('/headers', (req, res) => {
  //req.headers // passando informações  pelo cabeçalho
  res.send(req.headers) // me retorna todos os headers que eu criei + os do computador que são padrao
})

app.get('/body', (req, res) => {
  //req.headers // passando informações  pelo corpo da requisição 
  res.send(req.body) // me retorna todos os headers que eu criei + os do computador que são padrao
  //OBS: Para usar o body é necessario o thunderclient, insominia ou qualquer outro para conseguir enviar informaçoes para o corpo da requisição
})


// post - insert
app.post('/', (req, res) => {
  res.send('olá mundo')
})

// put -update
app.put('/', (req, res) => {
  res.send('olá mundo')
})

// delete - delete
app.delete('/', (req, res) => {
  res.send('olá mundo')
})

// configura a porta que será usada no meu sistema
app.listen(3005, () => console.log('rodando na porta 3005'))

// confuguração do script no package.json para rodar a aplicação
  // Eu poderia usar node index.js
    // "start": "node index.js"
  // ou posso usar o nodemon:
    // "start": "nodemon index.js"