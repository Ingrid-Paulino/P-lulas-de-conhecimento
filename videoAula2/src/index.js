const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('olá mundo') 
})

    app.listen(3005, () => console.log('rodando na porta 3005'))