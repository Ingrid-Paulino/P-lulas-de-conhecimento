import service from './service'



// Caso se eu estivesse em um arquivo que não tem a importação do express

// FORMA 1
const controller1 = {
  /**
   * 
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  example(req, res) {
    // res. --> não me mostra qauis os tipos que te no res. Com a biblioteca JSdoc eu consigo ter os tipos aparecendo
    res.json(req.body)
  }
}

// FORMA 2
const controller2 = {
  /** @type {import('express').RequestHandler} */
  example(req, res, next) {
    // res. --> não me mostra qauis os tipos que te no res. Com a biblioteca JSdoc eu consigo ter os tipos aparecendo
    res.json(req.body)
  }
}

// FORMA 3 - middleware de erro
/** @type {import('express').ErrorRequestHandler} */
const errorHandlerMiddleware = (err, req, res, next) => {
    
};



// EXEMPLO DE CONTINUAÇÃO DO SERVICE
const controller1 = {
  /**
   * 
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  example(req, res) {
    const all = service.getAll(); // Se eu passar o mause em cima do get all, eu consigo ver o que eu tenho nessa função
    // all[0]. --> consigo pegar a minha propriedade id e name
    all[0].id
    all[0].name
    // res. --> não me mostra qauis os tipos que te no res. Com a biblioteca JSdoc eu consigo ter os tipos aparecendo
    res.json(req.body)
  }
}

module.exports = {
  controller1,
  controller2,
  errorHandlerMiddleware
}