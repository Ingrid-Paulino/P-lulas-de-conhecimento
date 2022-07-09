const express = require('express');

const app = express();
app.use(express.json());

const controller = {
  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   */
  example(req, res) {
    // res. --> não me mostra qauis os tipos que te no res. Com a biblioteca JSdoc eu consigo ter os tipos aparecendo
    res.json()
  }
}


app.get('/', controller.example);

app.get('/', (req, res) => {
  // res. --> dentro do metodo get os tipos aparecem, mas quando passo eles para dentro de uma outra função eles desaparecem como na linha 13. com os param o tipos voltam a aparecer
  res.json()
});

app.listen(3000, () => console.log('rodando na porta 3000'));